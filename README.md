# Dictionary Web App (React + TypeScript + Vite)

A responsive dictionary app that lets you search for a word, fetches definitions from **dictionaryapi.dev**, and renders results with a shadcn/ui + Tailwind UI.

## Features

- Search by typing a word and pressing **Enter** (or clicking the search icon)
- Fetches and displays:
  - Word + phonetic spelling
  - Pronunciation audio (if available)
  - Meanings grouped by part of speech
  - Example sentences, synonyms, and antonyms
  - Source link(s)
- Loading skeletons and error state
- Theme toggle (light/dark) persisted in `localStorage`
- Font style selector (sans/serif/mono) persisted in `localStorage`

## Live data source

- Uses `https://api.dictionaryapi.dev/api/v2/entries/en/{word}`
- Response is normalized into app-friendly data via `src/utils/formatData.ts`

## Project structure (key files)

- `src/App.tsx`
  - Applies the selected font class to the app container.
- `src/components/container.tsx`
  - Main page layout: header, search bar, and dictionary entry / empty / error views.
- `src/components/dictionary-header.tsx`
  - Header UI: font selector + theme switch.
- `src/components/dictionary-search.tsx`
  - Search input and triggers dictionary lookup.
- `src/hooks/useWordQuery.ts`
  - React Query hook that calls `getWord(word)`.
- `src/api/dictionary.ts`
  - Fetch logic + typed API error mapping.
- `src/utils/formatData.ts`
  - Converts the raw dictionary API response to `CleanWord`.
- `src/store/dictionaryStore.ts`
  - Zustand store for `input` and the current `word` query.
- `src/store/themeStore.ts`
  - Zustand store for theme persistence + `html.dark` class sync.
- `src/store/fontStore.ts` + `src/lib/fontClasses.ts`
  - Zustand store for font persistence + mapping to Tailwind classes.

## Scripts

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Lint
pnpm lint

# Format (TypeScript/TSX)
pnpm format

# Typecheck (app + node)
pnpm typecheck

# Preview production build
pnpm preview
```

## How to run

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Start dev server
   ```bash
   pnpm dev
   ```
3. Open the URL shown in the terminal.

## Notes on behavior

- Empty state: when no committed search term is present (`word` is empty).
- Query enabling: `useWordQuery` only runs when `word.trim().length > 0`.
- Pronunciation audio: created at click-time using `new Audio(audio).play()`.

## License

This project is provided as-is under the same license terms as the repository template you started from.
