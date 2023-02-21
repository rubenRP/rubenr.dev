export const formatUrl = (language: any, path: string, slug?: string) => {
  if (language === "en") {
    if (slug) {
      return slug;
    }
    return path;
  } else {
    if (slug) {
      return `${language}/${slug}`;
    }
    return `${language}/${path}`;
  }
};
