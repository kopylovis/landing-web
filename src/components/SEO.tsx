import { Helmet } from 'react-helmet-async'
import { SITE_NAME, absoluteUrl, fullTitle as withSiteName } from '../seo/pages'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  siteName?: string
  locale?: string
  twitterHandle?: string
  keywords?: string
  canonical?: string
  noindex?: boolean
}

export default function SEO({
  title,
  description,
  image = 'https://monoroh.com/media/develop_logo_512x512.png',
  url = '/',
  type = 'website',
  siteName = SITE_NAME,
  locale = 'en',
  twitterHandle,
  keywords,
  canonical,
  noindex = false
}: SEOProps) {
  const fullTitle = withSiteName(title)
  const fullUrl = absoluteUrl(url)
  const canonicalUrl = canonical || fullUrl
  const ogLocale = locale === 'ru' ? 'ru_RU' : 'en_US'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex' : 'index, follow'} />
      {!noindex && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content={type} />
      {!noindex && <meta property="og:url" content={fullUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
    </Helmet>
  )
}
