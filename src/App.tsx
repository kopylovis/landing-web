import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './contexts/ThemeContext'
import { I18nProvider } from './contexts/I18nContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Authmeister from './pages/Authmeister'
import AuthmeisterPrivacy from './pages/AuthmeisterPrivacy'
import TosslingPrivacy from './pages/TosslingPrivacy'
import SightraPrivacy from './pages/SightraPrivacy'
import SightraTerms from './pages/SightraTerms'
import Kcalm from './pages/Kcalm'
import KcalmPrivacy from './pages/KcalmPrivacy'
import AuthmeisterTerms from './pages/AuthmeisterTerms'
import Tossling from './pages/Tossling'
import NotFound from './pages/NotFound'
import './styles/globals.css'

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <I18nProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/authmeister" element={<Authmeister />} />
                <Route path="/authmeister/privacy" element={<AuthmeisterPrivacy />} />
                <Route path="/authmeister/terms" element={<AuthmeisterTerms />} />
                <Route path="/tossling" element={<Tossling />} />
                <Route path="/tossling/privacy" element={<TosslingPrivacy />} />
                <Route path="/sightra/privacy" element={<SightraPrivacy />} />
                <Route path="/sightra/terms" element={<SightraTerms />} />
                <Route path="/kcalm" element={<Kcalm />} />
                <Route path="/kcalm/privacy" element={<KcalmPrivacy />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Router>
        </I18nProvider>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
