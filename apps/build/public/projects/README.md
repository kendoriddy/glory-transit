# Project images

Optional screenshots for case studies. Add files here, then set paths in `lib/case-studies.ts`.

## SchoolOrbit

- `schoolorbit/hero.png` — main screenshot (recommended 1600×1000 or similar)
- Uncomment `images.hero` in the SchoolOrbit entry

## Plug by Descasio

- `plug-by-descasio/hero.png`
- Uncomment `images.hero` in the Plug entry

## TailorFlow

- `tailorflow/hero.png`
- Uncomment `images.hero` in the TailorFlow entry

## Gallery (optional)

```ts
images: {
  hero: "/projects/schoolorbit/hero.png",
  heroAlt: "Description for accessibility",
  gallery: [
    { src: "/projects/schoolorbit/screen-2.png", alt: "...", caption: "..." },
  ],
},
```

## GitHub

Add `links.repo` only when the repository is public:

```ts
links: {
  site: "https://schoolorbit.ng",
  repo: "https://github.com/your-org/schoolorbit",
},
```
