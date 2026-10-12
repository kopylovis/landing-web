import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_NAME, absoluteUrl, fullTitle, pageMeta, pagePaths, type PageKey } from './src/seo/pages'

const escape = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function headTags(page: PageKey): string {
  const meta = pageMeta(page, 'en')
  const title = escape(fullTitle(meta.title))
  const description = escape(meta.description)
  const url = absoluteUrl(meta.path)
  const tags = [
    `<title>${title}</title>`,
    `<meta data-rh="true" name="description" content="${description}" />`,
    `<meta data-rh="true" name="robots" content="index, follow" />`,
    `<link data-rh="true" rel="canonical" href="${url}" />`,
    `<meta data-rh="true" property="og:type" content="${meta.type}" />`,
    `<meta data-rh="true" property="og:url" content="${url}" />`,
    `<meta data-rh="true" property="og:title" content="${title}" />`,
    `<meta data-rh="true" property="og:description" content="${description}" />`,
    `<meta data-rh="true" property="og:image" content="${meta.image}" />`,
    `<meta data-rh="true" property="og:image:width" content="512" />`,
    `<meta data-rh="true" property="og:image:height" content="512" />`,
    `<meta data-rh="true" property="og:site_name" content="${SITE_NAME}" />`,
    `<meta data-rh="true" property="og:locale" content="en_US" />`,
    `<meta data-rh="true" name="twitter:card" content="summary" />`,
    `<meta data-rh="true" name="twitter:title" content="${title}" />`,
    `<meta data-rh="true" name="twitter:description" content="${description}" />`,
    `<meta data-rh="true" name="twitter:image" content="${meta.image}" />`,
  ]
  return tags.join('\n    ')
}

function sitemap(): string {
  const urls = Object.values(pagePaths).map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function routeEntryPages(): Plugin {
  return {
    name: 'route-entry-pages',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html']
      if (!html || html.type !== 'asset') return
      const template = String(html.source)
      const block = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/
      if (!block.test(template)) this.error('index.html has no <!-- seo:start --> block')

      for (const [page, path] of Object.entries(pagePaths) as [PageKey, string][]) {
        const source = template.replace(block, headTags(page))
        if (path === '/') {
          html.source = source
        } else {
          this.emitFile({ type: 'asset', fileName: `${path.slice(1)}index.html`, source })
        }
      }
      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap() })
    }
  }
}

export default defineConfig({
  plugins: [react(), routeEntryPages()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  publicDir: 'public'
})
