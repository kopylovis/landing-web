import { AppData } from '../types'
// The update feeds name the newest installer of each platform and change with every release, so the buttons follow them.
import windowsFeed from '../../public/tossling/windows.json'
import linuxFeed from '../../public/tossling/linux-amd64.json'

/**
 * Structural project list (URLs, icons, ids). Translated copy
 * (category, description, features) lives in `src/i18n/translations.ts`,
 * keyed by project id.
 */
export const projects: AppData[] = [
  {
    id: 'tossling',
    name: 'Tossling',
    image: '/media/tossling_512x512.png',
    platforms: [
      { name: 'macOS', icon: '', available: true },
      { name: 'Android', icon: '', available: true },
      { name: 'iOS', icon: '', available: true },
      { name: 'Docker', icon: '', available: true },
    ],
    links: {
      page: '/tossling',
      github: 'https://github.com/Tossling/tossling-desktop',
      githubOrg: 'https://github.com/Tossling',
      githubMobile: 'https://github.com/Tossling/tossling-mobile',
      githubServer: 'https://github.com/Tossling/tossling-server',
      macDownload: 'https://github.com/Tossling/tossling-desktop/releases/latest',
      windowsDownload: windowsFeed.url,
      linuxDownload: linuxFeed.url,
      docs: 'https://tossling.github.io/docs/',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kopylovis.tossling',
      appStore: 'https://apps.apple.com/app/id6820647520',
    },
  },
  {
    id: 'authmeister',
    name: 'Authmeister',
    image: '/media/authmeister_512x512.png',
    platforms: [
      { name: 'Android', icon: '/media/googleplay.svg', available: true },
      { name: 'iOS', icon: '/media/appstore.svg', available: true },
    ],
    links: {
      googlePlay: 'https://play.google.com/store/apps/details?id=com.kopylovis.authmeister',
      appStore: 'https://apps.apple.com/app/id6742833866',
      ruStore: 'https://www.rustore.ru/catalog/app/com.kopylovis.authmeister',
    },
  },
  {
    id: 'kcalm',
    name: 'kcalm',
    image: '/media/kcalm_512x512.png',
    platforms: [
      { name: 'iOS', icon: '', available: true },
      { name: 'Android', icon: '', available: true },
    ],
    links: {
      page: '/kcalm',
    },
  },
  {
    id: 'sightra',
    name: 'Sightra',
    image: '/media/sightra_512x512.png',
    platforms: [
      { name: 'iOS', icon: '', available: true },
      { name: 'Android', icon: '', available: true },
    ],
    links: {
      page: '/sightra',
    },
  },
  {
    id: 'axrock',
    name: 'axrock.band',
    image: '/media/axrock_512x512.png',
    platforms: [{ name: 'Web', icon: '', available: true }],
    links: {
      website: 'https://axrock.band',
      github: 'https://github.com/kopylovis/axrock-web',
    },
  },
  {
    id: 'fastlaneRustore',
    name: 'upload_to_ru_store',
    image: '/media/upload_to_ru_store_512x512.png',
    platforms: [{ name: 'Ruby', icon: '', available: true }],
    links: {
      github: 'https://github.com/kopylovis/fastlane-upload-to-ru-store',
      rubygems: 'https://rubygems.org/gems/fastlane-plugin-upload_to_ru_store',
    },
  },
]

export const personalInfo = {
  handle: 'Monoroh',
  fullName: 'Ivan Kopylov',
  email: 'mnrhwow@gmail.com',
  github: 'https://github.com/kopylovis/',
  telegram: 'https://t.me/monoroh',
  location: 'Remote',
} as const
