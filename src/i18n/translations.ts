/**
 * i18n — single source of truth for all translated copy.
 * Structural data (urls, ids, icons) stays in `src/data/projects.ts`.
 *
 * Conventions:
 *  - Keys are camelCase, namespaced by surface (nav, hero, apps, …).
 *  - Strings with inline markup are split into parts so each component
 *    composes them in JSX with the right elements.
 *  - Project copy is keyed by `projects.<id>` so the structural list and
 *    the translations stay in sync via the project id.
 */

interface NamedDetail { name: string; detail: string }
interface LabeledValue { label: string; value: string }
interface TitleBody { title: string; body: string }
interface ProseP { type: 'p'; text: string }
interface ProseH2 { type: 'h2'; text: string }
interface ProseH3 { type: 'h3'; text: string }
interface ProseUl { type: 'ul'; items: string[] }
type ProseBlockT = ProseP | ProseH2 | ProseH3 | ProseUl
interface LegalDoc { title: string; body: ProseBlockT[] }
interface ProjectCopyT { category: string; description: string; features: string[] }
interface HintLink { label: string; to: string; external: boolean }
interface Shot { src: string; alt: string; kind: 'desktop' | 'phone' | 'wide' }
interface RepoLink { name: string; detail: string; href: string }

export interface Translations {
  meta: { siteName: string; description: string; keywords: string }
  nav: { index: string; work: string; about: string; contact: string }
  controls: { toLight: string; toDark: string; switchLanguage: string }
  hero: {
    statusPrefix: string
    headline: { l1: string; l2Before: string; em: string; l3: string }
    lede: {
      before: string
      strong: string
      trailing: string
    }
    ctaWork: string
    ctaContact: string
  }
  apps: { eyebrowPrefix: string; title: string; subtitle: string }
  card: { viewCase: string; visitSite: string; viewSource: string }
  about: {
    eyebrow: string
    title: string
    lede: string
    principles: TitleBody[]
    stackEyebrow: string
    stackTitle: string
    stackSub: string
    closer: string
  }
  stack: NamedDetail[]
  footer: {
    eyebrow: string
    title: string
    titleBreak: string
    cta: string
    channels: { email: string; github: string; telegram: string }
    copyrightSuffix: string
    privacy: string
    terms: string
  }
  projects: Record<'tossling' | 'authmeister' | 'fastlaneRustore', ProjectCopyT>
  authmeisterPage: {
    back: string
    tagline: string
    specs: LabeledValue[]
    featuresEyebrow: string
    featuresTitle: string
    highlights: TitleBody[]
    finalTitle: string
    finalBody: string
    legalPrivacy: string
    legalTerms: string
  }
  tosslingPage: {
    back: string
    tagline: string
    downloadMac: string
    downloadDesktop: string
    downloadAndroid: string
    brewLabel: string
    copy: string
    copied: string
    specs: LabeledValue[]
    featuresEyebrow: string
    featuresTitle: string
    highlights: TitleBody[]
    screensEyebrow: string
    screensTitle: string
    shots: Shot[]
    sourceEyebrow: string
    sourceTitle: string
    sourceBody: string
    repos: RepoLink[]
    finalTitle: string
    finalBody: string
    status: string
  }
  legal: {
    backHome: string
    backAuthmeister: string
    section: string
    updated: string
    privacy: LegalDoc
    terms: LegalDoc
    authmeisterPrivacy: LegalDoc
    authmeisterTerms: LegalDoc
  }
  notFound: {
    title: string
    lede: string
    ctaHome: string
    ctaReport: string
    hintLabel: string
    hints: HintLink[]
    metaTitle: string
    metaDescription: string
  }
}

export const en: Translations = {
  meta: {
    siteName: 'Monoroh',
    description:
      'Mobile developer. I build apps for iOS, Android, desktop and web, often with Kotlin Multiplatform.',
    keywords:
      'Mobile App Developer, Kotlin Multiplatform, iOS, Android, Compose Multiplatform, SwiftUI',
  },

  nav: {
    index: 'Index',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },

  controls: {
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    switchLanguage: 'Switch language to Russian',
  },

  hero: {
    statusPrefix: 'Open to new projects',
    headline: {
      l1: '',
      l2Before: '',
      em: 'Multiplatform',
      l3: 'apps that feel native.',
    },
    lede: {
      before: 'I build apps for iOS, Android, desktop and web, often with ',
      strong: 'Kotlin Multiplatform',
      trailing: '.',
    },
    ctaWork: 'See selected work',
    ctaContact: 'Get in touch',
  },

  apps: {
    eyebrowPrefix: 'Selected work',
    title: 'Apps people actually use.',
    subtitle:
      'Published on the App Store, Google Play, RuStore and GitHub.',
  },

  card: {
    viewCase: 'View case',
    visitSite: 'Visit site',
    viewSource: 'View source',
  },

  about: {
    eyebrow: 'About',
    title: 'An engineer who takes apps all the way to the store.',
    lede:
      "I'm Ivan Kopylov. I design an app's architecture, write the app and publish it in the stores myself. More than 10 years with iOS, Android and Kotlin Multiplatform.",
    principles: [
      {
        title: 'Architecture first',
        body:
          'Clean architecture makes code easy to test and easy for a new developer to pick up. Business logic lives in Kotlin Multiplatform and does not depend on the platform.',
      },
      {
        title: 'Shared UI by default',
        body:
          'With Compose Multiplatform one UI runs on iOS, Android, desktop and web. A screen gets SwiftUI or native Compose only when the shared version falls short.',
      },
      {
        title: 'Release early',
        body:
          'The sooner a build reaches people, the sooner I learn what is wrong with it. CI/CD, analytics and crash reports come first, polish comes later.',
      },
    ],
    stackEyebrow: 'Stack',
    stackTitle: 'What I build with.',
    stackSub:
      'The tools behind my apps in production.',
    closer:
      'And yes, I will move that button one more pixel if you ask.',
  },

  stack: [
    { name: 'Kotlin Multiplatform', detail: 'Shared business logic across platforms' },
    { name: 'Compose Multiplatform', detail: 'Shared UI on top of KMP, one Compose for iOS, Android, desktop and web' },
    { name: 'Android · Kotlin', detail: 'Jetpack Compose, coroutines, modern Android' },
    { name: 'iOS · Swift', detail: 'SwiftUI first, UIKit where SwiftUI is not enough' },
    { name: 'Flutter', detail: 'When the project already uses it or needs one codebase fast' },
  ],

  footer: {
    eyebrow: 'Get in touch',
    title: 'Have an idea worth building?',
    titleBreak: "Let's ship it together.",
    cta: 'Start a conversation',
    channels: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
    },
    copyrightSuffix: ', built by hand.',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  projects: {
    tossling: {
      category: 'Open Source · macOS, Windows, Linux & Android',
      description:
        'One end-to-end encrypted clipboard for your computers and Android phone, through your own server. Copy on one device and paste on another a second later. Text, images and files up to 500 MB.',
      features: [
        'Encrypted on the devices (AES-256-GCM)',
        'Self-hosted server in one Docker container',
        'Files up to 500 MB from Finder or the phone',
        'Notifications from your own projects',
        'Open source, GPL-3.0',
      ],
    },
    authmeister: {
      category: 'Security & Authentication',
      description:
        'An OTP authenticator for TOTP and HOTP codes. It imports accounts from other authenticators, Google Authenticator included, through otpauth-migration.',
      features: [
        'TOTP & HOTP support',
        'Google Authenticator migration',
        'Encrypted storage',
        'A simple interface',
        'Backup and restore',
      ],
    },
    fastlaneRustore: {
      category: 'Open Source · Fastlane plugin',
      description:
        'A Fastlane plugin that automates publishing Android apps (AAB / APK) to RuStore. Handles JWE auth, cleans up drafts, uploads builds, and submits to moderation in one lane step.',
      features: [
        'RSA-SHA512 auth and JWE token exchange',
        'Auto-cleanup of pending drafts',
        'Single-step AAB or AAB + APK upload',
        'Configurable publish type (instantly / delayed / manual)',
        'Ships changelog and submits for moderation',
      ],
    },
  },

  authmeisterPage: {
    back: 'Back to portfolio',
    tagline:
      'An OTP authenticator that imports your accounts in one scan and keeps every secret on the device.',
    specs: [
      { label: 'Platforms', value: 'iOS · Android' },
      { label: 'Tech', value: 'Kotlin Multiplatform' },
      { label: 'Pricing', value: 'Free' },
      { label: 'Privacy', value: 'On-device only' },
    ],
    featuresEyebrow: 'Features',
    featuresTitle: 'Open it, copy the code, close it.',
    highlights: [
      {
        title: 'TOTP and HOTP',
        body:
          'Time-based and counter-based codes that follow the standard. Works with any service that supports authenticator apps.',
      },
      {
        title: 'Import from Google Authenticator',
        body:
          'Scan the otpauth-migration QR code from Google Authenticator once and all your accounts move over.',
      },
      {
        title: 'Only on the device',
        body:
          'Secrets are encrypted on the device. There is no cloud sync, and tokens never reach analytics or third parties.',
      },
      {
        title: 'Encrypted backups',
        body:
          'Export an encrypted backup to any storage you like and restore it on a new device.',
      },
    ],
    finalTitle: 'Free, no ads.',
    finalBody: 'On the App Store, Google Play and RuStore. No ads and no tracking.',
    legalPrivacy: 'Privacy Policy',
    legalTerms: 'Terms & Conditions',
  },

  tosslingPage: {
    back: 'Back to portfolio',
    tagline:
      'One clipboard for your computers and Android phone, through your own server. Copy on one device, paste on another a second later. Everything is encrypted on the devices; the server only relays ciphertext.',
    downloadMac: 'Download for Mac',
    downloadDesktop: 'Windows and Linux',
    downloadAndroid: 'Android APK',
    brewLabel: 'Or with Homebrew',
    copy: 'Copy',
    copied: 'Copied',
    specs: [
      { label: 'Platforms', value: 'macOS 13+ · Windows 10+ · Linux · Android 13+ · iOS in progress' },
      { label: 'Server', value: 'Self-hosted, Docker' },
      { label: 'Encryption', value: 'AES-256-GCM · X25519' },
      { label: 'License', value: 'GPL-3.0' },
    ],
    featuresEyebrow: 'Features',
    featuresTitle: 'Copy here, paste there.',
    highlights: [
      {
        title: 'One clipboard for the room',
        body:
          'Text and images you copy reach the other devices of your room by themselves. If you prefer, they go only on a hotkey. A room is a phone and any number of computers.',
      },
      {
        title: 'Files up to 500 MB',
        body:
          'From "Send via Tossling" in Finder, Explorer or a Linux file manager, the hotkey, the menu or Share on the phone. Received files land in Downloads/Tossling and in the clipboard.',
      },
      {
        title: 'Encrypted on the devices',
        body:
          'AES-256-GCM on the devices, a separate X25519 key for every device. Disconnecting a device moves the rest of the room to a new key and a new server token.',
      },
      {
        title: 'Your own server',
        body:
          'Tossling Server is one Docker container (ntfy inside) with a setup page. It relays ciphertext, keeps attachments for three hours and never sees the clipboard.',
      },
      {
        title: 'Notifications from your projects',
        body:
          'Servers, bots and CI publish events to channels of your server; every device shows them as system notifications, in the menu and on the phone.',
      },
      {
        title: 'Careful with secrets',
        body:
          'Passwords marked by password managers and Apple\'s Universal Clipboard are never sent. Pairing with the phone is a QR code; another computer joins with a 10-minute invite code.',
      },
    ],
    screensEyebrow: 'Screenshots',
    screensTitle: 'Menu bar, phone and server.',
    shots: [
      { src: '/media/tossling/mac-menu.webp', alt: 'The menu bar with recent items from the other devices of the room', kind: 'desktop' },
      { src: '/media/tossling/android-home.webp', alt: 'The Android app with the room and the recent items', kind: 'phone' },
      { src: '/media/tossling/android-alerts.webp', alt: 'Project notifications on Android', kind: 'phone' },
      { src: '/media/tossling/server-setup.webp', alt: 'The Tossling Server setup page after the first start', kind: 'wide' },
      { src: '/media/tossling/server-project.webp', alt: 'A project in the Tossling Server web panel with its events', kind: 'wide' },
    ],
    sourceEyebrow: 'Open source',
    sourceTitle: 'Three repositories, one project.',
    sourceBody: 'Everything is open source under GPL-3.0. The iOS app is in progress.',
    repos: [
      { name: 'Tossling Desktop', detail: 'Apps for macOS, Windows and Linux with a menu bar or tray icon, the tossling command and file manager menus', href: 'https://github.com/Tossling/tossling-desktop' },
      { name: 'Tossling for Android', detail: 'The phone app with history, a widget and project notifications', href: 'https://github.com/Tossling/tossling-mobile' },
      { name: 'Tossling Server', detail: 'One Docker container, ghcr.io/tossling/tossling-server (amd64, arm64)', href: 'https://github.com/Tossling/tossling-server' },
      { name: 'github.com/Tossling', detail: 'Releases, issues and the Homebrew tap', href: 'https://github.com/Tossling' },
    ],
    finalTitle: 'Start with the server.',
    finalBody:
      'Run Tossling Server, open its setup page, then install the app on a computer. It asks for the address and the token and shows a QR code for the phone.',
    status: 'Early, in daily use by the author. Expect changes before 1.0.',
  },

  legal: {
    backHome: 'Back home',
    backAuthmeister: 'Back to Authmeister',
    section: 'Legal',
    updated: 'Updated 05 Mar 2025',

    privacy: {
      title: 'Privacy Policy',
      body: [
        { type: 'p', text: 'This Privacy Policy describes how **Monoroh Developer** (\u201cwe,\u201d \u201cus,\u201d or \u201cour\u201d) collects, uses, and protects your information when you visit our website and use our services. By using our services, you agree to the collection and use of information in accordance with this Privacy Policy.' },
        { type: 'h2', text: 'Information we collect' },
        { type: 'h3', text: 'Personal information' },
        { type: 'p', text: 'We may collect personal information that you voluntarily provide to us, such as:' },
        { type: 'ul', items: ['Email address (when you contact us)', 'Name (when you provide it in communications)', 'Any other information you choose to provide'] },
        { type: 'h3', text: 'Usage information' },
        { type: 'p', text: 'We may automatically collect information about your visit, including:' },
        { type: 'ul', items: ['Browser type and version', 'Operating system', 'Pages visited and time spent on the site', 'Anonymized IP address'] },
        { type: 'h2', text: 'How we use your information' },
        { type: 'ul', items: ['To respond to your inquiries and communications', 'To improve the website and the apps we build', 'To analyze usage patterns and improve UX', 'To comply with legal obligations'] },
        { type: 'h2', text: 'Information sharing' },
        { type: 'p', text: "We don\u2019t sell or trade your personal information. We may share it only:" },
        { type: 'ul', items: ['With your explicit consent', 'To comply with legal requirements', 'To protect rights, property, or safety', 'In connection with a business transfer or merger'] },
        { type: 'h2', text: 'Data security' },
        { type: 'p', text: 'We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. No method of transmission over the internet is 100% secure.' },
        { type: 'h2', text: 'Your rights' },
        { type: 'ul', items: ['Access your personal information', 'Correct inaccurate information', 'Request deletion of your information', 'Object to processing', 'Request data portability'] },
        { type: 'h2', text: "Children\u2019s privacy" },
        { type: 'p', text: 'Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13.' },
        { type: 'h2', text: 'Changes' },
        { type: 'p', text: "We may update this policy from time to time. We\u2019ll post the new version on this page and update the date above." },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Reach out at mailto:mnrhwow@gmail.com.' },
      ],
    },

    terms: {
      title: 'Terms of Service',
      body: [
        { type: 'p', text: 'These Terms of Service (\u201cTerms\u201d) govern your use of our website and services operated by **Monoroh Developer**. By accessing or using our services, you agree to be bound by these Terms.' },
        { type: 'h2', text: 'Acceptance of terms' },
        { type: 'p', text: 'By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.' },
        { type: 'h2', text: 'Use license' },
        { type: 'p', text: 'Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only. Under this license you may not:' },
        { type: 'ul', items: ['Modify or copy the materials', 'Use the materials for any commercial purpose or public display', 'Attempt to reverse engineer any software', 'Remove any copyright or other proprietary notations'] },
        { type: 'h2', text: 'Disclaimer' },
        { type: 'p', text: 'The materials on our website are provided on an \u201cas is\u201d basis. We make no warranties, expressed or implied, and disclaim all other warranties.' },
        { type: 'h2', text: 'Limitations' },
        { type: 'p', text: 'In no event shall Monoroh Developer or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.' },
        { type: 'h2', text: 'Accuracy of materials' },
        { type: 'p', text: "Materials appearing on our website may include technical or typographical errors. We don\u2019t warrant that any materials are accurate, complete, or current." },
        { type: 'h2', text: 'Links' },
        { type: 'p', text: "We haven\u2019t reviewed all sites linked from our website and are not responsible for their contents. Use of any linked website is at your own risk." },
        { type: 'h2', text: 'Modifications' },
        { type: 'p', text: 'We may revise these Terms at any time without notice. By using this website you agree to be bound by the current version.' },
        { type: 'h2', text: 'Governing law' },
        { type: 'p', text: 'These Terms are governed by the laws of the jurisdiction in which we operate, and you submit to the exclusive jurisdiction of the courts in that location.' },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Reach out at mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterPrivacy: {
      title: 'Privacy Policy',
      body: [
        { type: 'p', text: "This policy describes how **Authmeister** handles your data. Short version: it doesn\u2019t leave your device." },
        { type: 'h2', text: 'Information we collect' },
        { type: 'ul', items: ['Your OTP tokens are stored locally on your device.', 'No personal information is transmitted to our servers.', 'Anonymous app-usage analytics may be collected to improve the app.'] },
        { type: 'h2', text: 'Data storage' },
        { type: 'p', text: 'All your authentication data is stored securely on your device using:' },
        { type: 'ul', items: ['Encrypted local storage', 'Device-specific encryption keys', 'No cloud storage of sensitive data'] },
        { type: 'h2', text: 'Permissions' },
        { type: 'ul', items: ['**Camera** — to scan QR codes for setup', '**Storage** — for encrypted backup & restore'] },
        { type: 'h2', text: 'Data sharing' },
        { type: 'p', text: "We don\u2019t share your data with third parties. Your OTP secrets remain on your device." },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Email mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterTerms: {
      title: 'Terms and Conditions',
      body: [
        { type: 'p', text: 'These Terms govern your use of the **Authmeister** mobile application.' },
        { type: 'h2', text: 'Acceptance of terms' },
        { type: 'p', text: 'By downloading and using Authmeister, you agree to these terms.' },
        { type: 'h2', text: 'Description of service' },
        { type: 'p', text: 'Authmeister is an OTP authenticator that generates time-based (TOTP) and counter-based (HOTP) authentication codes.' },
        { type: 'h2', text: 'User responsibilities' },
        { type: 'ul', items: ['Keep your device secure', 'Back up your authentication data', "Don\u2019t share your OTP codes with unauthorized parties"] },
        { type: 'h2', text: 'Disclaimer' },
        { type: 'p', text: 'The app is provided \u201cas is\u201d without warranties. We are not responsible for loss of account access due to app malfunction or device issues.' },
        { type: 'h2', text: 'Limitation of liability' },
        { type: 'p', text: 'Our liability is limited to the maximum extent permitted by law.' },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Email mailto:mnrhwow@gmail.com.' },
      ],
    },
  },

  notFound: {
    title: 'This page wandered off.',
    lede:
      "We couldn\u2019t find the page you were looking for. It might have moved, been renamed, or never existed in the first place.",
    ctaHome: 'Back to home',
    ctaReport: 'Report this',
    hintLabel: 'Maybe you wanted',
    hints: [
      { label: 'Selected work', to: '/#work', external: false },
      { label: 'Authmeister, an OTP authenticator', to: '/authmeister', external: false },
      { label: 'Tossling, one clipboard for your computers and phone', to: '/tossling', external: false },
    ],
    metaTitle: 'Page Not Found',
    metaDescription:
      "The page you're looking for doesn't exist. Head back home to explore our work.",
  },
}

export const ru: Translations = {
  meta: {
    siteName: 'Monoroh',
    description:
      'Мобильный разработчик. Делаю приложения для iOS, Android, десктопа и веба, часто на Kotlin Multiplatform.',
    keywords:
      'мобильная разработка, Kotlin Multiplatform, iOS, Android, Compose Multiplatform, SwiftUI',
  },

  nav: {
    index: 'Главная',
    work: 'Проекты',
    about: 'Обо мне',
    contact: 'Контакты',
  },

  controls: {
    toLight: 'Включить светлую тему',
    toDark: 'Включить темную тему',
    switchLanguage: 'Переключить язык на английский',
  },

  hero: {
    statusPrefix: 'Открыт для новых проектов',
    headline: {
      l1: '',
      l2Before: '',
      em: 'Мультиплатформенные',
      l3: 'приложения, которые ощущаются нативно.',
    },
    lede: {
      before: 'Разрабатываю приложения для iOS, Android, десктопа и веба, в том числе на ',
      strong: 'Kotlin Multiplatform',
      trailing: '.',
    },
    ctaWork: 'Смотреть проекты',
    ctaContact: 'Написать',
  },

  apps: {
    eyebrowPrefix: 'В проде',
    title: 'Приложения, которыми правда пользуются.',
    subtitle:
      'Опубликованы в App Store, Google Play, RuStore и на GitHub.',
  },

  card: {
    viewCase: 'Кейс',
    visitSite: 'На сайт',
    viewSource: 'Исходники',
  },

  about: {
    eyebrow: 'Обо мне',
    title: 'Инженер, который доводит приложение до стора.',
    lede:
      'Я Иван Копылов. Сам проектирую архитектуру приложения, пишу его и публикую в сторах. Больше 10 лет работаю с iOS, Android и Kotlin Multiplatform.',
    principles: [
      {
        title: 'Сначала архитектура',
        body:
          'С хорошей архитектурой код легко тестировать, и новый разработчик быстро в нем разбирается. Бизнес-логика живет в Kotlin Multiplatform и общая для всех платформ.',
      },
      {
        title: 'Общий UI по умолчанию',
        body:
          'На Compose Multiplatform один интерфейс работает на iOS, Android, десктопе и в вебе. SwiftUI или нативный Compose беру только для экрана, которому общего не хватает.',
      },
      {
        title: 'Выпускать рано',
        body:
          'Чем раньше сборка попадет к людям, тем раньше я узнаю, что в ней не так. Сначала CI/CD, аналитика и отчеты о падениях, полировка потом.',
      },
    ],
    stackEyebrow: 'Стек',
    stackTitle: 'На чем пишу.',
    stackSub:
      'Инструменты, на которых собраны мои приложения в проде.',
    closer:
      'И да, кнопку на пиксель подвину, если попросите.',
  },

  stack: [
    { name: 'Kotlin Multiplatform', detail: 'Одна бизнес-логика на все платформы' },
    { name: 'Compose Multiplatform', detail: 'Один Compose-интерфейс для iOS, Android, десктопа и веба' },
    { name: 'Android · Kotlin', detail: 'Jetpack Compose, корутины и современный Android' },
    { name: 'iOS · Swift', detail: 'SwiftUI в первую очередь, UIKit там, где SwiftUI не хватает' },
    { name: 'Flutter', detail: 'Когда проект уже на нем или быстро нужна одна кодовая база' },
  ],

  footer: {
    eyebrow: 'Связаться',
    title: 'Есть идея, которую хочется собрать?',
    titleBreak: 'Соберем ее вместе.',
    cta: 'Написать',
    channels: {
      email: 'Email',
      github: 'GitHub',
      telegram: 'Telegram',
    },
    copyrightSuffix: ', собрано вручную.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
  },

  projects: {
    tossling: {
      category: 'Open Source · macOS, Windows, Linux и Android',
      description:
        'Общий буфер обмена для своих компьютеров и Android-телефона через свой сервер, со сквозным шифрованием. Скопировал на одном устройстве, через секунду вставляешь на другом. Текст, картинки и файлы до 500 МБ.',
      features: [
        'Шифрование на устройствах (AES-256-GCM)',
        'Свой сервер в одном Docker-контейнере',
        'Файлы до 500 МБ из Finder или с телефона',
        'Уведомления от своих проектов',
        'Открытый код, GPL-3.0',
      ],
    },
    authmeister: {
      category: 'Безопасность · 2FA',
      description:
        'OTP-аутентификатор для кодов TOTP и HOTP. Переносит аккаунты из других аутентификаторов, в том числе из Google Authenticator через otpauth-migration.',
      features: [
        'Поддержка TOTP и HOTP',
        'Импорт из Google Authenticator',
        'Зашифрованное локальное хранилище',
        'Простой интерфейс',
        'Бэкап и восстановление',
      ],
    },
    fastlaneRustore: {
      category: 'Open Source · Fastlane-плагин',
      description:
        'Fastlane-плагин, который публикует Android-сборки (AAB или APK) в RuStore. Сам проходит JWE-авторизацию, чистит черновики, заливает сборку и отправляет ее на модерацию одним шагом lane.',
      features: [
        'RSA-SHA512 авторизация и обмен на JWE-токен',
        'Автоочистка незавершенных черновиков',
        'Заливка AAB или AAB + APK в один шаг',
        'Тип публикации instantly, delayed или manual',
        'Передает changelog и отправляет на модерацию',
      ],
    },
  },

  authmeisterPage: {
    back: 'К проектам',
    tagline:
      'OTP-аутентификатор, который переносит аккаунты одним сканированием и хранит все секреты на устройстве.',
    specs: [
      { label: 'Платформы', value: 'iOS · Android' },
      { label: 'Стек', value: 'Kotlin Multiplatform' },
      { label: 'Цена', value: 'Бесплатно' },
      { label: 'Приватность', value: 'Только на устройстве' },
    ],
    featuresEyebrow: 'Возможности',
    featuresTitle: 'Открыл, скопировал код, закрыл.',
    highlights: [
      {
        title: 'TOTP и HOTP',
        body:
          'Коды по времени и по счетчику, строго по стандарту. Работает с любым сервисом, который поддерживает аутентификаторы.',
      },
      {
        title: 'Импорт из Google Authenticator',
        body:
          'Отсканируй QR-код otpauth-migration из Google Authenticator, и все аккаунты переедут. Вбивать секреты руками не нужно.',
      },
      {
        title: 'Только на устройстве',
        body:
          'Секреты зашифрованы на устройстве. Облачной синхронизации нет, токены не попадают ни в аналитику, ни к третьим лицам.',
      },
      {
        title: 'Зашифрованные бэкапы',
        body:
          'Сохрани зашифрованный экспорт в любое облако и восстанови его на новом устройстве.',
      },
    ],
    finalTitle: 'Бесплатно, без рекламы.',
    finalBody: 'В App Store, Google Play и RuStore. Без рекламы и трекинга.',
    legalPrivacy: 'Политика конфиденциальности',
    legalTerms: 'Условия использования',
  },

  tosslingPage: {
    back: 'К проектам',
    tagline:
      'Общий буфер обмена для своих компьютеров и Android-телефона через свой сервер. Скопировал на одном устройстве, через секунду вставляешь на другом. Все шифруется на устройствах, сервер передает только шифротекст.',
    downloadMac: 'Скачать для Mac',
    downloadDesktop: 'Windows и Linux',
    downloadAndroid: 'APK для Android',
    brewLabel: 'Или через Homebrew',
    copy: 'Скопировать',
    copied: 'Скопировано',
    specs: [
      { label: 'Платформы', value: 'macOS 13+ · Windows 10+ · Linux · Android 13+ · iOS в работе' },
      { label: 'Сервер', value: 'Свой, Docker' },
      { label: 'Шифрование', value: 'AES-256-GCM · X25519' },
      { label: 'Лицензия', value: 'GPL-3.0' },
    ],
    featuresEyebrow: 'Возможности',
    featuresTitle: 'Скопировал здесь, вставил там.',
    highlights: [
      {
        title: 'Один буфер на всю комнату',
        body:
          'Скопированные текст и картинки сами доходят до остальных устройств комнаты. Если удобнее, они уходят только по горячей клавише. Комната — это телефон и сколько угодно компьютеров.',
      },
      {
        title: 'Файлы до 500 МБ',
        body:
          'Через "Отправить через Tossling" в Finder, Проводнике или файловом менеджере Linux, по горячей клавише, из меню или через "Поделиться" на телефоне. Полученные файлы ложатся в Загрузки/Tossling и в буфер обмена.',
      },
      {
        title: 'Шифрование на устройствах',
        body:
          'AES-256-GCM на устройствах, у каждого устройства свой ключ X25519. Если отключить устройство, остальная комната переходит на новый ключ и новый токен сервера.',
      },
      {
        title: 'Свой сервер',
        body:
          'Tossling Server — один Docker-контейнер (внутри ntfy) со страницей настройки. Он передает шифротекст, хранит вложения три часа и не видит содержимое буфера.',
      },
      {
        title: 'Уведомления от своих проектов',
        body:
          'Серверы, боты и CI публикуют события в каналы вашего сервера, а все устройства показывают их системными уведомлениями, в меню и на телефоне.',
      },
      {
        title: 'Бережно с секретами',
        body:
          'Пароли, помеченные менеджерами паролей, и Универсальный буфер обмена Apple никогда не отправляются. Телефон подключается по QR-коду, еще один компьютер по коду-приглашению на 10 минут.',
      },
    ],
    screensEyebrow: 'Скриншоты',
    screensTitle: 'Строка меню, телефон и сервер.',
    shots: [
      { src: '/media/tossling/mac-menu.webp', alt: 'Меню Tossling в строке меню Mac с последними элементами с других устройств', kind: 'desktop' },
      { src: '/media/tossling/android-home.webp', alt: 'Приложение для Android с комнатой и последними элементами', kind: 'phone' },
      { src: '/media/tossling/android-alerts.webp', alt: 'Уведомления проектов на Android', kind: 'phone' },
      { src: '/media/tossling/server-setup.webp', alt: 'Страница настройки Tossling Server после первого запуска', kind: 'wide' },
      { src: '/media/tossling/server-project.webp', alt: 'Проект в веб-панели Tossling Server и его события', kind: 'wide' },
    ],
    sourceEyebrow: 'Открытый код',
    sourceTitle: 'Три репозитория, один проект.',
    sourceBody: 'Весь код открыт под GPL-3.0. Приложение для iOS в работе.',
    repos: [
      { name: 'Tossling Desktop', detail: 'Приложения для macOS, Windows и Linux со строкой меню или треем, командой tossling и меню файловых менеджеров', href: 'https://github.com/Tossling/tossling-desktop' },
      { name: 'Tossling для Android', detail: 'Приложение для телефона с историей, виджетом и уведомлениями проектов', href: 'https://github.com/Tossling/tossling-mobile' },
      { name: 'Tossling Server', detail: 'Один Docker-контейнер ghcr.io/tossling/tossling-server (amd64, arm64)', href: 'https://github.com/Tossling/tossling-server' },
      { name: 'github.com/Tossling', detail: 'Релизы, задачи и Homebrew tap', href: 'https://github.com/Tossling' },
    ],
    finalTitle: 'Начните с сервера.',
    finalBody:
      'Запустите Tossling Server, откройте его страницу настройки и поставьте приложение на компьютер. Оно спросит адрес и токен и покажет QR-код для телефона.',
    status: 'Ранняя версия, автор пользуется каждый день. До 1.0 возможны изменения.',
  },

  legal: {
    backHome: 'На главную',
    backAuthmeister: 'К Authmeister',
    section: 'Юридическое',
    updated: 'Обновлено 05.03.2025',

    privacy: {
      title: 'Политика конфиденциальности',
      body: [
        { type: 'p', text: 'Эта политика описывает, как **Monoroh Developer** ("мы", "нас" или "наш") собирает, использует и защищает вашу информацию, когда вы посещаете сайт и пользуетесь нашими сервисами. Используя наши сервисы, вы соглашаетесь со сбором и использованием информации в соответствии с этой политикой.' },
        { type: 'h2', text: 'Какую информацию мы собираем' },
        { type: 'h3', text: 'Личная информация' },
        { type: 'p', text: 'Мы можем собирать личную информацию, которую вы добровольно передаете, например:' },
        { type: 'ul', items: ['Email-адрес (когда вы пишете нам)', 'Имя (если вы указываете его в переписке)', 'Любую другую информацию, которую вы решите предоставить'] },
        { type: 'h3', text: 'Информация об использовании' },
        { type: 'p', text: 'Мы можем автоматически собирать информацию о вашем визите:' },
        { type: 'ul', items: ['Тип и версию браузера', 'Операционную систему', 'Посещенные страницы и время на сайте', 'Обезличенный IP-адрес'] },
        { type: 'h2', text: 'Как мы используем эту информацию' },
        { type: 'ul', items: ['Отвечаем на ваши запросы и сообщения', 'Улучшаем сайт и приложения', 'Анализируем паттерны использования и улучшаем UX', 'Соблюдаем юридические обязательства'] },
        { type: 'h2', text: 'Передача информации' },
        { type: 'p', text: 'Мы не продаем и не передаем вашу личную информацию. Передача возможна только:' },
        { type: 'ul', items: ['С вашего явного согласия', 'Для выполнения требований закона', 'Для защиты прав, имущества и безопасности', 'В рамках реорганизации или слияния'] },
        { type: 'h2', text: 'Безопасность' },
        { type: 'p', text: 'Мы применяем разумные технические и организационные меры для защиты данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Ни один способ передачи через интернет не безопасен на 100%.' },
        { type: 'h2', text: 'Ваши права' },
        { type: 'ul', items: ['Получить доступ к своей личной информации', 'Исправить неточные данные', 'Потребовать удаления данных', 'Возразить против обработки', 'Запросить переносимость данных'] },
        { type: 'h2', text: 'Дети' },
        { type: 'p', text: 'Наши сервисы не предназначены для детей младше 13 лет. Мы намеренно не собираем личную информацию детей младше 13.' },
        { type: 'h2', text: 'Изменения' },
        { type: 'p', text: 'Мы можем обновлять политику. Новая версия будет опубликована на этой странице с обновленной датой.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    terms: {
      title: 'Условия использования',
      body: [
        { type: 'p', text: 'Эти условия использования ("Условия") регулируют ваше использование сайта и сервисов, которыми управляет **Monoroh Developer**. Пользуясь нашими сервисами, вы соглашаетесь с этими Условиями.' },
        { type: 'h2', text: 'Принятие условий' },
        { type: 'p', text: 'Заходя на сайт и используя его, вы соглашаетесь с условиями и положениями этого соглашения.' },
        { type: 'h2', text: 'Лицензия на использование' },
        { type: 'p', text: 'Разрешено временно скачать одну копию материалов сайта для личного некоммерческого просмотра. В рамках этой лицензии нельзя:' },
        { type: 'ul', items: ['Изменять или копировать материалы', 'Использовать материалы в коммерческих целях или публично показывать', 'Реверс-инжинирить любое ПО', 'Удалять копирайт и иные обозначения прав'] },
        { type: 'h2', text: 'Отказ от ответственности' },
        { type: 'p', text: 'Материалы предоставляются "как есть". Никаких прямых или подразумеваемых гарантий — мы отказываемся от всех гарантий.' },
        { type: 'h2', text: 'Ограничения' },
        { type: 'p', text: 'Ни в каком случае Monoroh Developer или его поставщики не несут ответственности за убытки, связанные с использованием или невозможностью использования материалов сайта.' },
        { type: 'h2', text: 'Точность материалов' },
        { type: 'p', text: 'Материалы могут содержать технические или типографические ошибки. Мы не гарантируем их точность, полноту или актуальность.' },
        { type: 'h2', text: 'Ссылки' },
        { type: 'p', text: 'Мы не проверяли все сайты, на которые ведут ссылки с нашего сайта, и не отвечаем за их содержимое. Использование любых внешних ссылок — на ваш страх и риск.' },
        { type: 'h2', text: 'Изменения' },
        { type: 'p', text: 'Мы можем пересматривать Условия в любое время без уведомления. Пользуясь сайтом, вы соглашаетесь с текущей версией.' },
        { type: 'h2', text: 'Применимое право' },
        { type: 'p', text: 'Условия регулируются законодательством юрисдикции, в которой мы работаем. Вы соглашаетесь с исключительной подсудностью судов этой юрисдикции.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterPrivacy: {
      title: 'Политика конфиденциальности',
      body: [
        { type: 'p', text: 'Эта политика описывает, как **Authmeister** обращается с вашими данными. Кратко: они не покидают ваше устройство.' },
        { type: 'h2', text: 'Какую информацию мы собираем' },
        { type: 'ul', items: ['Ваши OTP-токены хранятся локально на устройстве.', 'Никакая личная информация не передается на наши серверы.', 'Может собираться обезличенная аналитика использования приложения — для его улучшения.'] },
        { type: 'h2', text: 'Хранение данных' },
        { type: 'p', text: 'Все ваши данные аутентификации хранятся на устройстве безопасно:' },
        { type: 'ul', items: ['Зашифрованное локальное хранилище', 'Ключи шифрования, привязанные к устройству', 'Чувствительные данные не уходят в облако'] },
        { type: 'h2', text: 'Разрешения' },
        { type: 'ul', items: ['**Камера** — для сканирования QR-кодов при настройке', '**Хранилище** — для зашифрованного бэкапа и восстановления'] },
        { type: 'h2', text: 'Передача данных' },
        { type: 'p', text: 'Мы не передаем ваши данные третьим лицам. Ваши OTP-секреты остаются на устройстве.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterTerms: {
      title: 'Условия использования',
      body: [
        { type: 'p', text: 'Эти Условия регулируют ваше использование мобильного приложения **Authmeister**.' },
        { type: 'h2', text: 'Принятие условий' },
        { type: 'p', text: 'Скачивая и используя Authmeister, вы соглашаетесь с этими условиями.' },
        { type: 'h2', text: 'Описание сервиса' },
        { type: 'p', text: 'Authmeister — это OTP-аутентификатор, который генерирует одноразовые коды по времени (TOTP) и по счетчику (HOTP).' },
        { type: 'h2', text: 'Обязанности пользователя' },
        { type: 'ul', items: ['Содержите устройство в безопасности', 'Делайте бэкапы своих данных аутентификации', 'Не передавайте OTP-коды посторонним'] },
        { type: 'h2', text: 'Отказ от ответственности' },
        { type: 'p', text: 'Приложение предоставляется "как есть" без гарантий. Мы не несем ответственности за потерю доступа к аккаунтам из-за сбоев приложения или проблем устройства.' },
        { type: 'h2', text: 'Ограничение ответственности' },
        { type: 'p', text: 'Наша ответственность ограничена в максимальной степени, разрешенной применимым законом.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },
  },

  notFound: {
    title: 'Страница где-то затерялась.',
    lede:
      'Не нашел то, что ты искал. Возможно, страница переехала, переименовалась или вообще никогда не существовала.',
    ctaHome: 'На главную',
    ctaReport: 'Сообщить о проблеме',
    hintLabel: 'Возможно, ты искал',
    hints: [
      { label: 'Проекты в проде', to: '/#work', external: false },
      { label: 'Authmeister — OTP-аутентификатор', to: '/authmeister', external: false },
      { label: 'Tossling — общий буфер обмена для компьютеров и телефона', to: '/tossling', external: false },
    ],
    metaTitle: 'Страница не найдена',
    metaDescription:
      'Этой страницы нет. Вернись на главную и посмотри проекты.',
  },
}

export type Locale = 'en' | 'ru'
export const translations: Record<Locale, Translations> = { en, ru }
