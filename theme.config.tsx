import { DocsThemeConfig } from 'nextra-theme-docs'

const PRO_ROUTES = new Set([
  '/features/production-safety',
  '/features/security',
  '/features/query-stats',
])

const ProBadge = () => (
  <span style={{
    display: 'inline-block',
    fontSize: 10,
    fontWeight: 700,
    lineHeight: 1.4,
    padding: '1px 5px',
    borderRadius: 4,
    marginLeft: 6,
    background: 'rgba(16, 185, 129, 0.12)',
    color: 'rgb(5, 150, 105)',
    letterSpacing: '0.06em',
    verticalAlign: 'middle',
  }}>PRO</span>
)

const config: DocsThemeConfig = {
  banner: {
    key: 'active-development-2026-09',
    text: (
      <span>
        Zentro is under active development — some pages here may be incomplete or out of date.{' '}
        <a
          href="https://github.com/ZentroIDE/Zentro/issues"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Report an issue
        </a>
      </span>
    ),
    dismissible: true,
  },
  logo: (
    <span style={{ display: 'flex', alignItems: 'center', gap: 10, fontWeight: 600 }}>
      <img
        src="/appicon.png"
        alt="Zentro"
        style={{ width: 24, height: 24, borderRadius: 6 }}
      />
      Zentro Docs
    </span>
  ),
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    titleComponent({ title, route }) {
      if (PRO_ROUTES.has(route)) {
        return <span>{title}<ProBadge /></span>
      }
      return <>{title}</>
    },
  },
  footer: {
    text: (
      <span style={{ fontSize: 13, color: 'inherit' }}>
        © {new Date().getFullYear()} Zentro. Documentation licensed under{' '}
        <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
          CC BY 4.0
        </a>
        . ·{' '}
        <a href="https://zentro-ide.com" target="_blank" rel="noopener noreferrer">
          zentro-ide.com
        </a>
        {' · '}
        <a href="https://zentro-ide.com/support" target="_blank" rel="noopener noreferrer">
          Support
        </a>
        {' · '}
        <a href="https://zentro-ide.com/feedback" target="_blank" rel="noopener noreferrer">
          Feedback
        </a>
        {' · '}
        <a href="mailto:support@zentro-ide.com">support@zentro-ide.com</a>
      </span>
    ),
  },
  docsRepositoryBase: 'https://github.com/ZentroIDE/zentro-docs/tree/main',
  editLink: { text: 'Edit this page on GitHub →' },
  primaryHue: 159,
  primarySaturation: 70,
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Zentro Docs',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" type="image/png" href="/appicon.png" />
      <meta name="description" content="Official documentation for Zentro SQL IDE" />
      <meta property="og:title" content="Zentro Docs" />
      <meta property="og:description" content="Official documentation for Zentro SQL IDE" />
    </>
  ),
  toc: {
    backToTop: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
}

export default config
