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
interface LegalDoc { title: string; description: string; body: ProseBlockT[] }
interface ProjectCopyT { category: string; description: string; features: string[] }
interface HintLink { label: string; to: string; external: boolean }
interface Shot { src: string; alt: string; kind: 'desktop' | 'phone' | 'wide' }
interface RepoLink { name: string; detail: string; href: string }

export interface Translations {
  meta: { siteName: string; description: string }
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
    legalPrivacy: string
  }
  legal: {
    backHome: string
    backAuthmeister: string
    backTossling: string
    section: string
    updated: string
    tosslingUpdated: string
    privacyUpdated: string
    authmeisterUpdated: string
    privacy: LegalDoc
    terms: LegalDoc
    authmeisterPrivacy: LegalDoc
    authmeisterTerms: LegalDoc
    tosslingPrivacy: LegalDoc
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
      { label: 'Privacy', value: 'Encrypted on the device' },
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
        title: 'Secrets stay on the device',
        body:
          'Secrets are encrypted on the device and never reach analytics or the developer. They go to the cloud only if you turn on backups, encrypted with your password.',
      },
      {
        title: 'Encrypted backups',
        body:
          'Export an encrypted backup to any storage you like and restore it on a new device.',
      },
    ],
    finalTitle: 'Free, no ads.',
    finalBody: 'On the App Store, Google Play and RuStore. No ads.',
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
    legalPrivacy: 'Privacy Policy',
  },

  legal: {
    backHome: 'Back home',
    backAuthmeister: 'Back to Authmeister',
    backTossling: 'Back to Tossling',
    section: 'Legal',
    updated: 'Updated 05 Mar 2025',
    tosslingUpdated: 'Updated 12 Oct 2026',
    privacyUpdated: 'Updated 12 Oct 2026',
    authmeisterUpdated: 'Updated 12 Oct 2026',

    privacy: {
      title: 'Privacy Policy',
      description: 'The monoroh.com website collects nothing: no analytics and no cookies. What the GitHub Pages hosting sees and what happens to your emails.',
      body: [
        { type: 'p', text: 'This policy covers the **monoroh.com** website. Each app has a policy of its own: https://monoroh.com/authmeister/privacy/ for Authmeister and https://monoroh.com/tossling/privacy/ for Tossling.' },
        { type: 'h2', text: 'What the site collects' },
        { type: 'p', text: 'Nothing. The site has no analytics, no counters, no ads and no cookies. Fonts, images and scripts load from monoroh.com itself.' },
        { type: 'h2', text: 'Hosting' },
        { type: 'p', text: 'The site is hosted on GitHub Pages. Like any web server, GitHub sees your IP address and the pages you open and keeps them in its logs for security. GitHub describes this at https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement.' },
        { type: 'h2', text: 'In your browser' },
        { type: 'p', text: 'The theme and language you pick are saved in your browser’s local storage. They stay on your device and are not sent anywhere. Clearing the site data removes them.' },
        { type: 'h2', text: 'If you write to me' },
        { type: 'p', text: 'When you email me, I get your address and what you write. I use it only to reply. Ask, and I will delete the correspondence.' },
        { type: 'h2', text: 'Children' },
        { type: 'p', text: 'The site is not directed at children under 13 and does not collect their data.' },
        { type: 'h2', text: 'Who is responsible' },
        { type: 'p', text: 'The site and the apps are made by Ivan Kopylov (Monoroh). When this policy changes, the new version appears on this page with a new date. Write to mailto:mnrhwow@gmail.com with any questions.' },
      ],
    },

    terms: {
      title: 'Terms of Service',
      description: 'Terms of use for the monoroh.com website.',
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
      description: 'What Authmeister keeps on your device, what it sends to the developer’s server, to Firebase and to cloud backups, and how to delete it.',
      body: [
        { type: 'p', text: 'This policy covers the **Authmeister** apps for iPhone, Apple Watch, Android and Wear OS. Authmeister has no accounts and no ads. Your codes and passwords are stored on your device, and the developer never receives them.' },
        { type: 'h2', text: 'On your device' },
        { type: 'ul', items: [
          'Accounts for one-time codes and saved passwords are stored encrypted. On Android they are encrypted with AES-256-GCM under a key kept in the Android Keystore. On iPhone they are kept in the Keychain and are not synced to iCloud Keychain.',
          'A PIN, Face ID or a fingerprint can lock the app. The system checks the biometrics, and the app never gets them.',
          'The camera is used only to scan QR codes. The photo library is read only when you pick an image with a QR code.',
          'Codes go to a paired Apple Watch or Wear OS watch directly over the system connection. By default all codes are sent and passwords are not. You choose what goes to the watch in the settings.',
          'Widgets show codes on the home screen if you add them.',
        ] },
        { type: 'h2', text: 'The developer’s server' },
        { type: 'ul', items: [
          'At launch the app downloads the list of services and their setup guides from api.monoroh.com. Each request carries the app version, the OS version and the device maker and model. Like any web server, it also sees your IP address. Codes, passwords and account names are never sent.',
          'To check whether a saved password has leaked, the app sends the first 5 characters of its SHA-1 hash. The server returns all leaked hashes that start with them, and the match is checked on the device. The password and its full hash never leave the device.',
        ] },
        { type: 'h2', text: 'Firebase' },
        { type: 'p', text: 'The app uses Firebase Analytics and Firebase Crashlytics by Google. Analytics records app launches, sessions and screens with the device model, OS version, country and an app instance ID. Crashlytics sends crash reports with the error, the device state and an installation ID. None of this is linked to your name or email, and your codes, passwords and account names are not sent. On Android, Firebase may also read the advertising ID. Authmeister shows no ads and does not use it for advertising. Google describes its part at https://firebase.google.com/support/privacy.' },
        { type: 'h2', text: 'Cloud backups' },
        { type: 'ul', items: [
          'Backups to Google Drive, Dropbox, Microsoft OneDrive or iCloud Drive are off until you turn them on.',
          'A backup is encrypted on the device with your password (PBKDF2 and AES-GCM) before upload. The cloud provider stores only the encrypted file. The password hint is saved in the file unencrypted, so don’t put the password in it.',
          'When you connect Google Drive, Dropbox or OneDrive, the app receives your name, email and avatar from that service to show which account is connected. Signing out in the app revokes its access.',
          'Export to a QR code is not encrypted unless you turn on encryption in the backup settings. Treat an unencrypted export like the secrets themselves.',
        ] },
        { type: 'h2', text: 'Deleting your data' },
        { type: 'p', text: 'Delete accounts and passwords in the app, one by one or several at once. Resetting a forgotten PIN erases everything. On iPhone the Keychain keeps the data after the app is deleted, so delete the accounts first if you want them gone. A cloud backup can be deleted in the backup settings or in the cloud storage itself. To have Firebase or server data about your device deleted, write to the email below.' },
        { type: 'h2', text: 'Children' },
        { type: 'p', text: 'Authmeister is not directed at children under 13 and does not knowingly collect their data.' },
        { type: 'h2', text: 'Changes and contact' },
        { type: 'p', text: 'Authmeister is made by Ivan Kopylov. When this policy changes, the new version appears on this page with a new date. Write to mailto:mnrhwow@gmail.com with any questions.' },
      ],
    },

    authmeisterTerms: {
      title: 'Terms and Conditions',
      description: 'Terms of use for the Authmeister authenticator for iPhone, Android and watches.',
      body: [
        { type: 'p', text: 'These Terms govern your use of the **Authmeister** mobile application.' },
        { type: 'h2', text: 'Acceptance of terms' },
        { type: 'p', text: 'By downloading and using Authmeister, you agree to these terms.' },
        { type: 'h2', text: 'Description of service' },
        { type: 'p', text: 'Authmeister is an authenticator that generates time-based (TOTP) and counter-based (HOTP) codes and stores passwords. It can show codes on a watch and in widgets and back up your data, encrypted, to a cloud storage you choose.' },
        { type: 'h2', text: 'User responsibilities' },
        { type: 'ul', items: ['Keep your device secure', 'Back up your authentication data', 'Remember your backup password. It cannot be recovered, and without it the backup cannot be restored.', "Don\u2019t share your OTP codes with unauthorized parties"] },
        { type: 'h2', text: 'Disclaimer' },
        { type: 'p', text: 'The app is provided \u201cas is\u201d without warranties. We are not responsible for loss of account access due to app malfunction or device issues.' },
        { type: 'h2', text: 'Limitation of liability' },
        { type: 'p', text: 'Our liability is limited to the maximum extent permitted by law.' },
        { type: 'h2', text: 'Contact' },
        { type: 'p', text: 'Questions? Email mailto:mnrhwow@gmail.com.' },
      ],
    },

    tosslingPrivacy: {
      title: 'Privacy Policy',
      description: 'Tossling encrypts the clipboard on your device. What the server and Firebase see, what stays on the phone and how to delete it.',
      body: [
        { type: 'p', text: 'This policy covers the **Tossling** apps for iPhone and Android. Tossling has no accounts and no analytics, and the developer does not receive what you copy.' },
        { type: 'h2', text: 'Where your data goes' },
        { type: 'p', text: 'The phone talks only to the Tossling server that your computer uses. You run that server yourself or use one run by someone you trust. The developer does not see its traffic. The one exception is the demo, described below.' },
        { type: 'h2', text: 'What the server sees' },
        { type: 'ul', items: [
          'Clipboard text, images and files are encrypted on your device with AES-256-GCM before they leave it. The key stays on the devices of your room, so the server cannot read the content.',
          'The server keeps encrypted messages for up to 12 hours and attachments for up to 3 hours, then deletes them.',
          'Like any web server, it sees the IP address of your device and when it connects.',
          'Each device has a token of its own on the server, labeled with the device name, so the server owner can see the devices and cut one off.',
          'Project notifications are not encrypted. Your own services send them to your server, and the phone shows them.',
        ] },
        { type: 'h2', text: 'Push notifications' },
        { type: 'p', text: 'To wake the app, the server sends a push through Firebase Cloud Messaging by Google and, on iPhone, through the Apple Push Notification service. A push carries no clipboard content, only a signal to fetch new messages. For this Firebase gives the app an installation ID and a push token. They are not linked to your name or email. Google describes its part at https://policies.google.com/privacy.' },
        { type: 'h2', text: 'On your phone' },
        { type: 'ul', items: [
          'The history of what you sent and received, the room key and the list of devices are stored on the phone only. On iPhone the room key is kept in the Keychain, so the app can return to the room after a reinstall.',
          'The app reads the clipboard only when you send it, with the To Computer button, the share sheet, a shortcut or the quick settings tile.',
          'The camera is used only to scan the QR code that a computer shows. Nothing is recorded or stored.',
        ] },
        { type: 'h2', text: 'Deleting your data' },
        { type: 'p', text: 'Leaving the room in the app deletes the room key from the phone and the phone\'s token from the server. Deleting the app removes the history. On iPhone the Keychain keeps the room key after the app is deleted, so leave the room first if you want it gone. Messages left on the server expire on their own within 12 hours.' },
        { type: 'h2', text: 'Demo' },
        { type: 'p', text: 'The developer runs a demo server at tossling-demo.monoroh.com, so the app can be tried without a computer. Each demo gets a room of its own with a bot that decrypts what you send in order to reply. The room closes after an hour, and the server deletes messages and files an hour after they arrive. Notifications of the demo project go to everyone trying the demo, and they never carry what you sent.' },
        { type: 'h2', text: 'Children' },
        { type: 'p', text: 'Tossling is not directed at children under 13 and does not knowingly collect their data.' },
        { type: 'h2', text: 'Source code' },
        { type: 'p', text: 'The apps and the server are open source at https://github.com/Tossling, so anyone can check what they do.' },
        { type: 'h2', text: 'Changes and contact' },
        { type: 'p', text: 'When this policy changes, the new version appears on this page with a new date. Write to mailto:mnrhwow@gmail.com with any questions.' },
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
      { label: 'Приватность', value: 'Шифрование на устройстве' },
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
        title: 'Секреты на устройстве',
        body:
          'Секреты зашифрованы на устройстве и не попадают ни в аналитику, ни к разработчику. В облако они уходят, только если включить бэкап, и шифруются вашим паролем.',
      },
      {
        title: 'Зашифрованные бэкапы',
        body:
          'Сохрани зашифрованный экспорт в любое облако и восстанови его на новом устройстве.',
      },
    ],
    finalTitle: 'Бесплатно, без рекламы.',
    finalBody: 'В App Store, Google Play и RuStore. Без рекламы.',
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
    legalPrivacy: 'Политика конфиденциальности',
  },

  legal: {
    backHome: 'На главную',
    backAuthmeister: 'К Authmeister',
    backTossling: 'К Tossling',
    section: 'Юридическое',
    updated: 'Обновлено 05.03.2025',
    tosslingUpdated: 'Обновлено 12.10.2026',
    privacyUpdated: 'Обновлено 12.10.2026',
    authmeisterUpdated: 'Обновлено 12.10.2026',

    privacy: {
      title: 'Политика конфиденциальности',
      description: 'Сайт monoroh.com ничего не собирает, на нем нет аналитики и cookies. Что видит хостинг GitHub Pages и что происходит с письмами.',
      body: [
        { type: 'p', text: 'Политика относится к сайту **monoroh.com**. У каждого приложения своя политика, для Authmeister это https://monoroh.com/authmeister/privacy/, для Tossling https://monoroh.com/tossling/privacy/.' },
        { type: 'h2', text: 'Что собирает сайт' },
        { type: 'p', text: 'Ничего. На сайте нет аналитики, счетчиков, рекламы и cookies. Шрифты, картинки и скрипты грузятся с самого monoroh.com.' },
        { type: 'h2', text: 'Хостинг' },
        { type: 'p', text: 'Сайт размещен на GitHub Pages. Как любой веб-сервер, GitHub видит IP-адрес и открытые страницы и хранит их в журналах для безопасности. Подробности у GitHub на https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement.' },
        { type: 'h2', text: 'В браузере' },
        { type: 'p', text: 'Выбранные тема и язык сохраняются в локальном хранилище браузера. Они остаются на устройстве и никуда не отправляются. Если очистить данные сайта, они пропадут.' },
        { type: 'h2', text: 'Если вы мне пишете' },
        { type: 'p', text: 'Из письма я получаю ваш адрес и то, что вы написали, и использую это только для ответа. Если попросите, удалю переписку.' },
        { type: 'h2', text: 'Дети' },
        { type: 'p', text: 'Сайт не рассчитан на детей младше 13 лет и не собирает их данные.' },
        { type: 'h2', text: 'Кто отвечает' },
        { type: 'p', text: 'Сайт и приложения делает Иван Копылов (Monoroh). Если политика изменится, новая версия появится на этой странице с новой датой. Вопросы присылайте на mailto:mnrhwow@gmail.com.' },
      ],
    },

    terms: {
      title: 'Условия использования',
      description: 'Условия использования сайта monoroh.com.',
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
      description: 'Что Authmeister хранит на устройстве, что отправляет на сервер разработчика, в Firebase и в облачные бэкапы и как все это удалить.',
      body: [
        { type: 'p', text: 'Политика относится к приложениям **Authmeister** для iPhone, Apple Watch, Android и Wear OS. В Authmeister нет аккаунтов и рекламы. Коды и пароли хранятся на вашем устройстве, разработчик их не получает.' },
        { type: 'h2', text: 'На устройстве' },
        { type: 'ul', items: [
          'Аккаунты одноразовых кодов и сохраненные пароли хранятся в зашифрованном виде. На Android их шифрует AES-256-GCM ключом из Android Keystore. На iPhone они лежат в связке ключей и не синхронизируются через iCloud.',
          'Приложение можно закрыть PIN-кодом, Face ID или отпечатком. Биометрию проверяет система, приложению она не передается.',
          'Камера нужна только для сканирования QR-кодов. К фотографиям приложение обращается, только когда вы сами выбираете картинку с QR-кодом.',
          'На сопряженные Apple Watch или часы с Wear OS коды уходят напрямую через системное соединение. По умолчанию отправляются все коды, а пароли нет. Что попадет на часы, выбирается в настройках.',
          'Если добавить виджет, он показывает коды на главном экране.',
        ] },
        { type: 'h2', text: 'Сервер разработчика' },
        { type: 'ul', items: [
          'При запуске приложение загружает с api.monoroh.com список сервисов и инструкции к ним. В каждом запросе есть версия приложения, версия системы, производитель и модель устройства. Как любой веб-сервер, он видит и IP-адрес. Коды, пароли и названия аккаунтов туда не отправляются.',
          'Чтобы проверить, не утек ли сохраненный пароль, приложение отправляет первые 5 символов его хэша SHA-1. Сервер возвращает все утекшие хэши с таким началом, а совпадение ищется на устройстве. Сам пароль и полный хэш устройство не покидают.',
        ] },
        { type: 'h2', text: 'Firebase' },
        { type: 'p', text: 'В приложении работают Firebase Analytics и Firebase Crashlytics от Google. Analytics записывает запуски, сессии и экраны вместе с моделью устройства, версией системы, страной и идентификатором установки приложения. Crashlytics присылает отчеты о сбоях с ошибкой, состоянием устройства и идентификатором установки. С вашим именем или почтой это не связано, коды, пароли и названия аккаунтов не отправляются. На Android Firebase может читать рекламный идентификатор. Рекламы в Authmeister нет, и для рекламы он не используется. Свою часть Google описывает на https://firebase.google.com/support/privacy.' },
        { type: 'h2', text: 'Облачные бэкапы' },
        { type: 'ul', items: [
          'Бэкап в Google Drive, Dropbox, Microsoft OneDrive или iCloud Drive выключен, пока вы сами его не включите.',
          'Перед отправкой бэкап шифруется на устройстве вашим паролем (PBKDF2 и AES-GCM). В облаке лежит только зашифрованный файл. Подсказка к паролю хранится в файле открыто, поэтому не пишите в нее сам пароль.',
          'При подключении Google Drive, Dropbox или OneDrive приложение получает от сервиса имя, почту и аватар, чтобы показать, какой аккаунт подключен. Если выйти из аккаунта в приложении, доступ отзывается.',
          'Экспорт в QR-код не шифруется, пока шифрование не включено в настройках бэкапа. Обращайтесь с таким экспортом так же, как с самими секретами.',
        ] },
        { type: 'h2', text: 'Как удалить свои данные' },
        { type: 'p', text: 'Аккаунты и пароли удаляются в приложении по одному или выборкой. Сброс забытого PIN-кода стирает все. На iPhone связка ключей хранит данные и после удаления приложения, поэтому сначала удалите аккаунты. Облачный бэкап удаляется в настройках бэкапа или прямо в облачном хранилище. Чтобы удалить данные о вашем устройстве в Firebase или на сервере, напишите на почту ниже.' },
        { type: 'h2', text: 'Дети' },
        { type: 'p', text: 'Authmeister не рассчитан на детей младше 13 лет и сознательно не собирает их данные.' },
        { type: 'h2', text: 'Изменения и связь' },
        { type: 'p', text: 'Authmeister делает Иван Копылов. Если политика изменится, новая версия появится на этой странице с новой датой. Вопросы присылайте на mailto:mnrhwow@gmail.com.' },
      ],
    },

    authmeisterTerms: {
      title: 'Условия использования',
      description: 'Условия использования аутентификатора Authmeister для iPhone, Android и часов.',
      body: [
        { type: 'p', text: 'Эти Условия регулируют ваше использование мобильного приложения **Authmeister**.' },
        { type: 'h2', text: 'Принятие условий' },
        { type: 'p', text: 'Скачивая и используя Authmeister, вы соглашаетесь с этими условиями.' },
        { type: 'h2', text: 'Описание сервиса' },
        { type: 'p', text: 'Authmeister генерирует одноразовые коды по времени (TOTP) и по счетчику (HOTP) и хранит пароли. Он умеет показывать коды на часах и в виджетах и сохранять зашифрованный бэкап в выбранное вами облако.' },
        { type: 'h2', text: 'Обязанности пользователя' },
        { type: 'ul', items: ['Содержите устройство в безопасности', 'Делайте бэкапы своих данных аутентификации', 'Запомните пароль от бэкапа. Восстановить его нельзя, а без него бэкап не открыть.', 'Не передавайте OTP-коды посторонним'] },
        { type: 'h2', text: 'Отказ от ответственности' },
        { type: 'p', text: 'Приложение предоставляется "как есть" без гарантий. Мы не несем ответственности за потерю доступа к аккаунтам из-за сбоев приложения или проблем устройства.' },
        { type: 'h2', text: 'Ограничение ответственности' },
        { type: 'p', text: 'Наша ответственность ограничена в максимальной степени, разрешенной применимым законом.' },
        { type: 'h2', text: 'Контакты' },
        { type: 'p', text: 'Есть вопросы? Напишите на mailto:mnrhwow@gmail.com.' },
      ],
    },

    tosslingPrivacy: {
      title: 'Политика конфиденциальности',
      description: 'Tossling шифрует буфер на устройстве. Что видят сервер и Firebase, что остается на телефоне и как это удалить.',
      body: [
        { type: 'p', text: 'Политика относится к приложениям **Tossling** для iPhone и Android. В Tossling нет аккаунтов и аналитики, и разработчик не получает то, что вы копируете.' },
        { type: 'h2', text: 'Куда уходят данные' },
        { type: 'p', text: 'Телефон обменивается данными только с тем сервером Tossling, который использует ваш компьютер. Этот сервер вы запускаете сами или пользуетесь сервером человека, которому доверяете. Разработчик его трафик не видит. Исключение одно, демо, о нем ниже.' },
        { type: 'h2', text: 'Что видит сервер' },
        { type: 'ul', items: [
          'Текст, картинки и файлы из буфера шифруются на устройстве по AES-256-GCM еще до отправки. Ключ есть только у устройств вашей комнаты, поэтому сервер содержимое прочитать не может.',
          'Зашифрованные сообщения сервер хранит до 12 часов, вложения до 3 часов, потом удаляет.',
          'Как любой веб-сервер, он видит IP-адрес устройства и время подключения.',
          'У каждого устройства на сервере свой токен с именем устройства, чтобы владелец сервера видел устройства и мог отключить любое.',
          'Уведомления проектов не шифруются. Их присылают на ваш сервер ваши же сервисы, а телефон показывает.',
        ] },
        { type: 'h2', text: 'Пуш-уведомления' },
        { type: 'p', text: 'Чтобы разбудить приложение, сервер отправляет пуш через Firebase Cloud Messaging от Google, а на iPhone еще и через Apple Push Notification service. В пуше нет содержимого буфера, только сигнал забрать новые сообщения. Для этого Firebase выдает приложению идентификатор установки и токен для пушей. С вашим именем или почтой они не связаны. Свою часть Google описывает на https://policies.google.com/privacy.' },
        { type: 'h2', text: 'На телефоне' },
        { type: 'ul', items: [
          'История отправленного и полученного, ключ комнаты и список устройств хранятся только на телефоне. На iPhone ключ комнаты лежит в связке ключей, поэтому после переустановки приложение возвращается в комнату.',
          'Приложение читает буфер, только когда вы его отправляете, кнопкой "На компьютер", через меню "Поделиться", быструю команду или плитку в быстрых настройках.',
          'Камера нужна только чтобы отсканировать QR-код с компьютера. Ничего не записывается и не сохраняется.',
        ] },
        { type: 'h2', text: 'Как удалить свои данные' },
        { type: 'p', text: 'Если выйти из комнаты в приложении, ключ комнаты удалится с телефона, а токен телефона с сервера. Удаление приложения стирает историю. На iPhone ключ комнаты остается в связке ключей и после удаления приложения, поэтому сначала выйдите из комнаты. Сообщения на сервере сами удаляются в течение 12 часов.' },
        { type: 'h2', text: 'Демо' },
        { type: 'p', text: 'Разработчик держит демо-сервер на tossling-demo.monoroh.com, чтобы приложение можно было попробовать без компьютера. Для каждого демо создается отдельная комната с ботом, который расшифровывает присланное, чтобы ответить. Через час комната закрывается, а сообщения и файлы сервер удаляет через час после получения. Уведомления демо-проекта видят все, кто пробует демо, и того, что вы отправили, в них никогда нет.' },
        { type: 'h2', text: 'Дети' },
        { type: 'p', text: 'Tossling не рассчитан на детей младше 13 лет и сознательно не собирает их данные.' },
        { type: 'h2', text: 'Исходный код' },
        { type: 'p', text: 'Приложения и сервер открыты на https://github.com/Tossling, так что любой может проверить, что они делают.' },
        { type: 'h2', text: 'Изменения и связь' },
        { type: 'p', text: 'Если политика изменится, новая версия появится на этой странице с новой датой. Вопросы присылайте на mailto:mnrhwow@gmail.com.' },
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
