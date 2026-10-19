import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { seoProps } from '../seo/pages'
import { useI18n } from '../hooks/useI18n'
import { projects } from '../data/projects'
import '../styles/AuthmeisterPage.css'
import '../styles/KcalmPage.css'

const kcalm = projects.find((p) => p.id === 'kcalm')!

export default function Kcalm() {
  const { t, locale } = useI18n()

  return (
    <>
      <SEO {...seoProps('kcalm', locale)} />

      <div className="product">
        <div className="container">
          <Link to="/" className="product__back">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.kcalmPage.back}
          </Link>

          <header className="product__hero">
            <div className="product__hero-text">
              <span className="eyebrow">{t.projects.kcalm.category}</span>
              <h1 className="product__title">kcalm</h1>
              <p className="product__tagline">{t.kcalmPage.tagline}</p>
              <p className="kcalm__status">{t.kcalmPage.status}</p>
            </div>

            <figure className="product__hero-art" aria-hidden="true">
              <div className="product__hero-glow" />
              <img src={kcalm.image} alt="" width={220} height={220} className="product__hero-icon" />
            </figure>
          </header>

          <dl className="product__specs">
            {t.kcalmPage.specs.map((s) => (
              <div key={s.label} className="product__specs-item">
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>

          <section className="product__section" aria-labelledby="features-title">
            <span className="eyebrow">{t.kcalmPage.featuresEyebrow}</span>
            <h2 id="features-title" className="product__section-title">
              {t.kcalmPage.featuresTitle}
            </h2>

            <div className="product__highlights">
              {t.kcalmPage.highlights.map((h, i) => (
                <article key={h.title} className="product__highlight">
                  <span className="product__highlight-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="product__final" aria-labelledby="final-title">
            <h2 id="final-title">{t.kcalmPage.finalTitle}</h2>
            <p>{t.kcalmPage.finalBody}</p>

            <nav className="product__legal" aria-label="kcalm legal">
              <Link to="/kcalm/privacy">{t.kcalmPage.legalPrivacy}</Link>
              <span aria-hidden="true">·</span>
              <Link to="/kcalm/delete-account">{t.legal.kcalmDeleteAccount.title}</Link>
            </nav>
          </section>
        </div>
      </div>
    </>
  )
}
