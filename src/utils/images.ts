import type { ImageMetadata } from "astro";

// Eagerly import every project/education image at build time.
// Keys look like "/src/assets/projects/parray/PArray.jpg".
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

const educationImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/education/**/*.{png,jpg,jpeg,webp}",
  { eager: true },
);

function resolve(
  map: Record<string, { default: ImageMetadata }>,
  publicPath: string,
): ImageMetadata {
  // publicPath e.g. "/projects/parray/PArray.jpg" -> "/src/assets/projects/parray/PArray.jpg"
  const fullKey = `/src/assets${publicPath}`;
  const mod = map[fullKey];
  if (!mod) {
    throw new Error(
      `resolveImage: no image found for "${publicPath}" (looked for "${fullKey}"). ` +
        `Did you move it into src/assets and keep the same sub-path?`,
    );
  }
  return mod.default;
}

/** "/projects/parray/PArray.jpg" -> optimized ImageMetadata for <Image src={...}> */
export function resolveProjectImage(publicPath: string): ImageMetadata {
  return resolve(projectImages, publicPath);
}

/** "/education/Mines-center.png" -> optimized ImageMetadata for <Image src={...}> */
export function resolveEducationImage(publicPath: string): ImageMetadata {
  return resolve(educationImages, publicPath);
}
