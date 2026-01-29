# COTW Wiki – Global styles

All wiki and shared layout styles live under `src/styles/` and are loaded via `index.css` → `wiki.css`, so every page gets them.

## Files

- **`variables.css`** – Design tokens (colors, spacing, fonts) as CSS custom properties.
- **`wiki.css`** – Shared layout and component classes for animal/reserve/wiki pages. Imports `variables.css`.

## Refactoring inline styles → classes

Pages and components that still use a local `const styles = { ... }` and `style={styles.xyz}` can be migrated to the shared classes below. Use **EasternWildTurkey.jsx** and **AnimalTableOfContents.jsx** / **AnimalsByReleaseDate.jsx** as references.

### Page layout (animal/reserve wiki pages)

| Old (inline / style obj) | New class |
|--------------------------|-----------|
| `container`              | `wiki-page` |
| `innerWrapper`           | `wiki-inner` |
| `mainHeader`             | `wiki-header` |
| `editActions`            | `wiki-edit-actions` |
| `layout`                 | `wiki-layout` |
| `mainColumn`             | `wiki-main` |
| `sidebarColumn`          | `wiki-sidebar` |
| `sidebarHeader`          | `wiki-sidebar-header` |
| `sidebarImage`           | `wiki-sidebar-image` |
| `sidebarSection`         | `wiki-sidebar-section` |
| `sidebarLabel`           | `wiki-sidebar-label` |
| `trophyGrid`             | `wiki-trophy-grid` |
| `trophyItem`             | `wiki-trophy-item` |
| `trophyLabel`            | `wiki-trophy-label` |
| `silver` / `gold` / `diamond` | `wiki-trophy-silver` / `wiki-trophy-gold` / `wiki-trophy-diamond` (combine with `wiki-trophy-label`) |
| `quoteBox`               | `wiki-quote` |
| `link`                   | `wiki-link` |
| `h2`                     | `wiki-h2` |
| `table`                  | `wiki-table` |
| `th`                     | `wiki-th` (+ `wiki-th-center`, `wiki-th-w25`, `wiki-th-alt` as needed) |
| `td`                     | `wiki-td` (+ `wiki-td-bold`, `wiki-td-italic`, `wiki-td-muted`) |
| `shotContainer`          | `wiki-shot-container` |
| `shotImage`              | `wiki-shot-image` |
| `shotInfo`               | `wiki-shot-info` |
| `galleryGrid`            | `wiki-gallery-grid` |
| `galleryItem`            | `wiki-gallery-item` |
| `galleryImgPlaceholder`  | `wiki-gallery-placeholder` |
| `galleryLabel`           | `wiki-gallery-label` |
| `common` / `rare` / etc. | `wiki-common` / `wiki-rare` / `wiki-very-rare` / `wiki-uncommon` |

### Helpers

- `wiki-p-mb`, `wiki-mb-4`, `wiki-fs-sm`, `wiki-inline-block`
- `wiki-class-icon`, `wiki-zone-icon`
- `wiki-toc`, `wiki-toc-title`, `wiki-toc-toggle`, `wiki-ul`, `wiki-li`, `wiki-ol-nested`
- Shot block: wrap in `wiki-shot-wrap`, title `wiki-shot-title`

### TOC panel (AnimalTableOfContents-style)

- `wiki-toc-panel`, `wiki-toc-panel-header`, `wiki-toc-panel-title`, `wiki-toc-panel-toggle`
- `wiki-toc-panel-list`, `wiki-toc-panel-item`, `wiki-toc-panel-link`. Use `.hidden` when collapsed.

### Animals-by-release (AnimalsByReleaseDate)

- `wiki-release-container`, `wiki-release-header`, `wiki-release-instruction`
- `wiki-release-table-wrapper`, `wiki-release-column`, `wiki-release-col-header`, `wiki-release-cell` (keep `style={{ backgroundColor: animal.color }}` where needed)
- `wiki-release-timeline`, `wiki-release-timeline-item` with `style={{ '--wiki-timeline-bg': color }}`

### Dynamic values

Keep a single inline style only when the value is dynamic, e.g.:

- Cell background: `style={{ backgroundColor: animal.color }}`
- Timeline chip: `style={{ '--wiki-timeline-bg': color }}`

Everything else should use the classes above.
