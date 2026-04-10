import { useState, useEffect } from "react";

export default function useImagePreload(imageUrls) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    Promise.all(
      imageUrls.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          })
      )
    )
      .then(() => {
        if (!cancelled) setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading images:", error);
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [imageUrls]);

  return loading;
}
