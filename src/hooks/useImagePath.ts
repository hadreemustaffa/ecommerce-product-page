export function useImageURL(path: string) {
    return new URL(path, import.meta.url).href;
  }


