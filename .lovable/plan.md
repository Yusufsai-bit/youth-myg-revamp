## Add a video section to the homepage

A new "Featured Video" section will be inserted **directly above the About Us section** on the homepage, showcasing your uploaded video file.

### Section design
- Full-width section with a soft background that matches the brand (subtle teal-tinted gradient, consistent with the hero).
- Centred section header: eyebrow "Watch", title (e.g. "See MYG in Action") — final copy to be confirmed.
- Video player in a rounded, shadowed container with a 16:9 aspect ratio, capped at a sensible max width (~960px) and responsive on mobile/tablet.
- Sits between the Hero and About Us sections so it's the second thing visitors see.

### Video behaviour — important note on "autoplay with sound"
Modern browsers (Chrome, Safari, Firefox, all mobile browsers) **block videos from autoplaying with sound**. This is a hard browser rule we cannot override. The realistic options are:

1. **Autoplay muted, with an unmute button** (recommended) — the video starts playing automatically and silently; a visible speaker/unmute control lets visitors turn sound on with one tap. This is what Apple, Stripe, and most modern sites do.
2. **Click-to-play with sound** — shows a poster image with a large play button; sound plays from the first click.

I'll implement **option 1** by default unless you tell me otherwise after the plan. Standard player controls will also be visible.

### File handling
- You'll upload the video file (MP4 recommended, ideally under ~20MB and 1080p or smaller for fast loading).
- I'll place it in `public/videos/` and reference it via a static path so it's served as-is (rather than bundled).
- A poster image (first frame or a chosen still) will be added so the section looks good before the video loads — I can either generate one from the video or use an existing MYG photo.

### Technical details
- New file: `src/components/HomeVideo.tsx` — a small, self-contained section component using a native `<video>` element with `autoPlay`, `muted`, `loop`, `playsInline`, `controls`, and `preload="metadata"` for performance.
- Edit: `src/pages/HomePage.tsx` — import `HomeVideo` and render it immediately above the About Us `<Section>`.
- Accessibility: meaningful `aria-label`, captions track support if you have a `.vtt` file (optional, can be added later).
- SEO: add `VideoObject` JSON-LD to the existing structured data on HomePage so Google can index the video.
- No new dependencies.

### What I need from you before building
1. Upload the video file (drag it into the chat).
2. Confirm the section copy (eyebrow + title + optional one-line description), or let me draft it.
3. Confirm you're happy with **autoplay-muted + unmute button** (since true autoplay-with-sound isn't possible in browsers).
