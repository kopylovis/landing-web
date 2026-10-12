import SEO from '../components/SEO'
import { seoProps } from '../seo/pages'
import HeroSection from '../components/HeroSection'
import AppsSection from '../components/AppsSection'
import AboutSection from '../components/AboutSection'
import { useI18n } from '../hooks/useI18n'
import { useScrollToSection } from '../hooks/useScrollToSection'

export default function Home() {
  useScrollToSection('scroll', { behavior: 'smooth', block: 'start' })
  const { locale } = useI18n()

  return (
    <>
      <SEO {...seoProps('home', locale)} />
      <HeroSection />
      <AppsSection />
      <AboutSection />
    </>
  )
}
