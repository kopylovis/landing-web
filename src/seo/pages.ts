import { translations, type Locale } from '../i18n/translations'

export const SITE_URL = 'https://monoroh.com'
export const SITE_NAME = 'Monoroh Developer'

const DEFAULT_IMAGE = `${SITE_URL}/media/develop_logo_512x512.png`

export type PageKey =
  | 'home'
  | 'privacy'
  | 'terms'
  | 'authmeister'
  | 'authmeisterPrivacy'
  | 'authmeisterTerms'
  | 'tossling'
  | 'tosslingPrivacy'
  | 'sightraPrivacy'
  | 'sightraTerms'
  | 'kcalm'
  | 'kcalmPrivacy'

export interface PageMeta {
  path: string
  title: string
  description: string
  image: string
  type: 'website' | 'article'
}

export const pagePaths: Record<PageKey, string> = {
  home: '/',
  privacy: '/privacy/',
  terms: '/terms/',
  authmeister: '/authmeister/',
  authmeisterPrivacy: '/authmeister/privacy/',
  authmeisterTerms: '/authmeister/terms/',
  tossling: '/tossling/',
  tosslingPrivacy: '/tossling/privacy/',
  sightraPrivacy: '/sightra/privacy/',
  sightraTerms: '/sightra/terms/',
  kcalm: '/kcalm/',
  kcalmPrivacy: '/kcalm/privacy/',
}

export function fullTitle(title: string): string {
  return title.includes('Monoroh') ? title : `${title} - Monoroh`
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return SITE_URL + (path.endsWith('/') ? path : `${path}/`)
}

export function pageMeta(page: PageKey, locale: Locale): PageMeta {
  const t = translations[locale]
  const path = pagePaths[page]
  const authmeisterImage = `${SITE_URL}/media/authmeister_512x512.png`
  const tosslingImage = `${SITE_URL}/media/tossling_512x512.png`
  const sightraImage = `${SITE_URL}/media/sightra_512x512.png`
  const kcalmImage = `${SITE_URL}/media/kcalm_512x512.png`

  switch (page) {
    case 'home':
      return { path, title: `${t.meta.siteName} — Mobile App Developer`, description: t.meta.description, image: DEFAULT_IMAGE, type: 'website' }
    case 'privacy':
      return { path, title: t.legal.privacy.title, description: t.legal.privacy.description, image: DEFAULT_IMAGE, type: 'article' }
    case 'terms':
      return { path, title: t.legal.terms.title, description: t.legal.terms.description, image: DEFAULT_IMAGE, type: 'article' }
    case 'authmeister':
      return { path, title: 'Authmeister — Modern OTP Authenticator', description: t.projects.authmeister.description, image: authmeisterImage, type: 'website' }
    case 'authmeisterPrivacy':
      return { path, title: `Authmeister — ${t.legal.authmeisterPrivacy.title}`, description: t.legal.authmeisterPrivacy.description, image: authmeisterImage, type: 'article' }
    case 'authmeisterTerms':
      return { path, title: `Authmeister — ${t.legal.authmeisterTerms.title}`, description: t.legal.authmeisterTerms.description, image: authmeisterImage, type: 'article' }
    case 'tossling':
      return { path, title: 'Tossling, One Clipboard for Your Computers and Android Phone', description: t.projects.tossling.description, image: tosslingImage, type: 'website' }
    case 'tosslingPrivacy':
      return { path, title: `Tossling, ${t.legal.tosslingPrivacy.title}`, description: t.legal.tosslingPrivacy.description, image: tosslingImage, type: 'article' }
    case 'sightraPrivacy':
      return { path, title: `Sightra, ${t.legal.sightraPrivacy.title}`, description: t.legal.sightraPrivacy.description, image: sightraImage, type: 'article' }
    case 'sightraTerms':
      return { path, title: `Sightra, ${t.legal.sightraTerms.title}`, description: t.legal.sightraTerms.description, image: sightraImage, type: 'article' }
    case 'kcalm':
      return { path, title: 'kcalm, a Calm Food Diary', description: t.projects.kcalm.description, image: kcalmImage, type: 'website' }
    case 'kcalmPrivacy':
      return { path, title: `kcalm, ${t.legal.kcalmPrivacy.title}`, description: t.legal.kcalmPrivacy.description, image: kcalmImage, type: 'article' }
  }
}

export function seoProps(page: PageKey, locale: Locale) {
  const meta = pageMeta(page, locale)
  return { title: meta.title, description: meta.description, image: meta.image, url: meta.path, type: meta.type, locale }
}
