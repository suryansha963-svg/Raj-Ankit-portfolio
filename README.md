# Raj Ankit Pandey — Portfolio

Scroll-driven personal site for **Raj Ankit Pandey**, Ph.D. researcher in Functional
Materials & Energy Harvesting, Thapar Institute of Engineering & Technology.

Built with React 18 + Vite. All content is extracted from the original Wix site
and the CV.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub
Pages, Cloudflare Pages). `vite.config.js` uses `base: './'`, so it works from a
subdirectory too.

## Editing your content

**Everything you'll want to change lives in one file: `src/data/content.js`.**
Bio, research areas, captions, timeline, awards, publications, skills,
references and links are all plain data there — no need to touch the components.

## Project layout

```
public/
  frames/hero/   121 frames  → hero scroll sequence
  frames/lab/     96 frames  → thesis scroll sequence
  images/         portrait, logo, research figures
  videos/         demonstration clips + poster frames
  Raj_Ankit_CV.pdf
src/
  data/
    content.js              ← all copy and data
    videos.js               ← demonstration clips, keyed by research area id
  components/
    ScrollFrames.jsx        canvas image-sequence player (custom)
    Reveal.jsx              scroll reveals, split headlines, counters (custom)
    Lightbox.jsx            full-screen figure viewer (custom)
    DemoVideos.jsx          click-to-play demonstration clips (custom)
    PillNav.jsx             React Bits
    TextType.jsx            React Bits
    RotatingText.jsx        React Bits
    ScrollExpand.jsx        React Bits
  sections/                 Hero, Research, Thesis, Career, Awards,
                            Publications, Skills, Connect
```

## How the scroll animation works

`ScrollFrames` makes a section `N` viewport-heights tall and pins a `<canvas>`
inside it. As you scroll, it maps scroll progress to a frame index and paints
that frame, with a smoothing lerp so scrubbing feels weighted rather than
twitchy. Frames preload concurrently and it draws the nearest already-loaded
frame, so the sequence starts playing immediately.

Progress is published two ways:

- as a CSS custom property `--sf-p` (0→1) on the pinned stage, for CSS-driven motion
- via an `onProgress` callback, used by `Hero` and `Thesis` to drive their content

Two sequences are used: the hero (chip render, 4 viewports) and the thesis
section (6 viewports, where the six findings light up one at a time).

## Swapping the frame sequences

Drop numbered JPEGs into `public/frames/<name>/` as `f000.jpg`, `f001.jpg`, …
then point `sequences` in `src/data/content.js` at the directory and frame
count. Keep frames modest in size — the hero set is 1280px wide, ~45 KB each.

## Demonstration videos

Each research area can show a row of click-to-play clips under its writeup.
Add a clip by dropping the `.mp4` and a poster `.jpg` into `public/videos/`,
then add an entry to `src/data/videos.js`, keyed by the matching research
area's `id` in `content.js` (currently `harvesting` and `sensors`):

```js
harvesting: [
  {
    src: 'videos/your-clip.mp4',
    poster: 'videos/your-clip.jpg',
    ratio: 16 / 9,        // encoded width / height — sets the card's shape
    label: 'Short title',
    note: 'One sentence describing what the clip shows.'
  }
]
```

`DemoVideos` renders nothing for an area with no entry, so new research areas
are safe to add without a videos.js entry. Clips only start decoding once the
person clicks play (`preload="none"`), and starting one clip pauses any
other that's already playing.

`ScrollExpand` also takes `mediaType="video"` if you want a clip to open to
full bleed the way the M.Sc. thesis image does.

## Notes

- One typeface throughout — Inter, loaded from Google Fonts.
- Respects `prefers-reduced-motion`.
- No horizontal overflow at 390px; the nav collapses to a hamburger under 768px.
