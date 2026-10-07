import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { useI18n } from '../hooks/useI18n'
import { projects } from '../data/projects'
import '../styles/AuthmeisterPage.css'
import '../styles/TosslingPage.css'

const tossling = projects.find((p) => p.id === 'tossling')!
const BREW = 'brew install --cask tossling/tap/tossling'

function DownloadButtons() {
  const { t } = useI18n()
  return (
    <div className="product__cta-row">
      <a href={tossling.links.macDownload} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.37 12.6c-.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.69-3.15-1.71-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.84-.75-1.46.02-2.81.85-3.56 2.16-1.52 2.63-.39 6.53 1.09 8.66.72 1.05 1.58 2.22 2.71 2.18 1.09-.04 1.5-.7 2.81-.7 1.31 0 1.68.7 2.83.68 1.17-.02 1.91-1.06 2.62-2.11.83-1.21 1.17-2.39 1.19-2.45-.03-.01-2.28-.87-2.3-3.47ZM14.21 6.19c.6-.73 1.01-1.74.9-2.75-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.07 1.96-.49 2.56-1.22Z" />
        </svg>
        {t.tosslingPage.downloadMac}
      </a>
      <a href={tossling.links.androidDownload} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.6 9.48 19.44 6.3a.38.38 0 0 0-.66-.38l-1.87 3.23a11.4 11.4 0 0 0-9.82 0L5.22 5.92a.38.38 0 0 0-.66.38L6.4 9.48A10.8 10.8 0 0 0 1 18h22a10.8 10.8 0 0 0-5.4-8.52ZM7 15.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm10 0a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
        </svg>
        {t.tosslingPage.downloadAndroid}
      </a>
    </div>
  )
}

function BrewCommand() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(BREW)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="tossling__brew">
      <span className="tossling__brew-label">{t.tosslingPage.brewLabel}</span>
      <div className="tossling__brew-row">
        <code>{BREW}</code>
        <button type="button" className="tossling__brew-copy" onClick={copy}>
          {copied ? t.tosslingPage.copied : t.tosslingPage.copy}
        </button>
      </div>
    </div>
  )
}

export default function Tossling() {
  const { t, locale } = useI18n()
  const page = t.tosslingPage

  return (
    <>
      <SEO
        title="Tossling — One Clipboard for Your Macs and Android Phone"
        description={t.projects.tossling.description}
        image="https://monoroh.com/media/tossling_512x512.png"
        url="/tossling"
        type="website"
        locale={locale}
      />

      <div className="product tossling">
        <div className="container">
          <Link to="/" className="product__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {page.back}
          </Link>

          <header className="product__hero">
            <div className="product__hero-text">
              <span className="eyebrow">{t.projects.tossling.category}</span>
              <h1 className="product__title">Tossling</h1>
              <p className="product__tagline">{page.tagline}</p>
              <DownloadButtons />
              <BrewCommand />
            </div>

            <figure className="product__hero-art" aria-hidden="true">
              <div className="product__hero-glow" />
              <img src={tossling.image} alt="" width={220} height={220} className="product__hero-icon" />
            </figure>
          </header>

          <dl className="product__specs">
            {page.specs.map((s) => (
              <div key={s.label} className="product__specs-item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <section className="product__section" aria-labelledby="features-title">
            <span className="eyebrow">{page.featuresEyebrow}</span>
            <h2 id="features-title" className="product__section-title">
              {page.featuresTitle}
            </h2>

            <div className="product__highlights">
              {page.highlights.map((h, i) => (
                <article key={h.title} className="product__highlight">
                  <span className="product__highlight-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="product__section" aria-labelledby="screens-title">
            <span className="eyebrow">{page.screensEyebrow}</span>
            <h2 id="screens-title" className="product__section-title">
              {page.screensTitle}
            </h2>

            <div className="tossling__shots">
              {page.shots.map((shot) => (
                <figure key={shot.src} className={`tossling__shot tossling__shot--${shot.kind}`}>
                  <img src={shot.src} alt={shot.alt} loading="lazy" decoding="async" />
                  <figcaption>{shot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section className="product__section" aria-labelledby="source-title">
            <span className="eyebrow">{page.sourceEyebrow}</span>
            <h2 id="source-title" className="product__section-title">
              {page.sourceTitle}
            </h2>
            <p className="tossling__lede">{page.sourceBody}</p>

            <ul className="tossling__repos" role="list">
              {page.repos.map((repo) => (
                <li key={repo.href}>
                  <a href={repo.href} target="_blank" rel="noopener noreferrer" className="tossling__repo">
                    <span className="tossling__repo-name">{repo.name}</span>
                    <span className="tossling__repo-detail">{repo.detail}</span>
                    <svg className="tossling__repo-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17 17 7M9 7h8v8" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="product__final" aria-labelledby="final-title">
            <h2 id="final-title">{page.finalTitle}</h2>
            <p>{page.finalBody}</p>
            <DownloadButtons />
            <p className="tossling__status">{page.status}</p>
          </section>
        </div>
      </div>
    </>
  )
}
