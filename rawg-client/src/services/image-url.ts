import noImagePlaceholder from "../assets/placeholder.webp";
const getCroppedImageUrl = (url: string | null) => {
  if (!url) return noImagePlaceholder;
  return url.replace("media/games", "media/crop/600/400/games");
};

export default getCroppedImageUrl;
