import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const routesWithFiles = ['tossling']

function routeEntryPages(): Plugin {
  return {
    name: 'route-entry-pages',
    apply: 'build',
    enforce: 'post',
    generateBundle(_, bundle) {
      const html = bundle['index.html']
      if (!html || html.type !== 'asset') return
      for (const route of routesWithFiles) {
        this.emitFile({ type: 'asset', fileName: `${route}/index.html`, source: html.source })
      }
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
