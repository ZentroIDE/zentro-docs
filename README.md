# Zentro Docs

The source of [docs.zentro-ide.com](https://docs.zentro-ide.com) — the documentation for
[Zentro](https://zentro-ide.com), a project-centric desktop SQL IDE. Built with
[Next.js](https://nextjs.org) and [Nextra](https://nextra.site).

## Run it locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Layout

- `pages/` — the documentation itself, one `.mdx` file per page; navigation order lives in the
  `_meta.json` next to them.
- `components/` — small React components used from the pages.
- `public/` — images and icons.
- `data/release-notes.json` — offline snapshot of the release notes shown on the changelog page.

## Contributing

Fixes are welcome: a typo, a wrong step, an out-of-date screenshot. Open an issue or a pull
request. If you're unsure whether something is a bug in the docs or in Zentro, open an issue
first. For product feedback or help using Zentro, see
[zentro-ide.com/support](https://zentro-ide.com/support) and
[zentro-ide.com/feedback](https://zentro-ide.com/feedback), or write to
[support@zentro-ide.com](mailto:support@zentro-ide.com).

## License

- **Documentation content** (`pages/`, `public/images/`, and the text in this repository) is
  licensed under [Creative Commons Attribution 4.0 International](LICENSE) (CC BY 4.0). You may
  share and adapt it, including commercially, as long as you give appropriate credit.
- **Site source code** (`components/`, `scripts/`, `theme.config.tsx`, and the build
  configuration) is licensed under the [GNU General Public License v3.0 only](LICENSE-CODE).
- The Zentro name and logos are not covered by either license: see the
  [trademark policy](https://github.com/ZentroIDE/Zentro/blob/main/TRADEMARKS.md).

Copyright (C) 2026 Alex Nguyen. By contributing you agree that your contribution is licensed on
the same terms as the part of the repository it changes.
