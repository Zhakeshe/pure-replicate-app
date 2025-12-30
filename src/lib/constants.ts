export const AUTHENTICITY_LOGO_URL =
  "https://static.tildacdn.com/tild3036-3637-4665-b338-396130643065/MB_.svg";

const AUTHENTICITY_LOGO_FALLBACK_URL = AUTHENTICITY_LOGO_URL;

export const getAuthenticityLogoSrc = () => {
  try {
    return AUTHENTICITY_LOGO_URL || AUTHENTICITY_LOGO_FALLBACK_URL;
  } catch {
    return AUTHENTICITY_LOGO_FALLBACK_URL;
  }
};

export const AUTHENTICITY_LOGO_FILTER =
  "brightness(0) saturate(100%) invert(12%) sepia(72%) saturate(4031%) hue-rotate(335deg) brightness(85%) contrast(105%)";

export const SPEAKER_BACKGROUND_URL =
  "https://static.tildacdn.com/tild6233-6662-4661-b730-373863663463/-min.png";

export const SPEAKER_IMAGE_URL =
  "https://i.postimg.cc/q7Bp1by6/1W6A6693-resized-(1)-no-bg-HD-(carve-photos)-fotor-20251230201923.png";

export const QUOTE_AUTHOR_IMAGE_URL =
  "https://optim.tildacdn.ink/tild6335-3135-4739-a464-623634353638/-/resize/160x/-/format/webp/image-removebg-previ.png.webp";

export const SPEAKER_IMAGE_FALLBACK_URL =
  "https://static.tildacdn.com/tild6438-3266-4131-b336-336434313833/Mask_group-min.png";
