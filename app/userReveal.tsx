"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Kích hoạt "visible = true" khi phần tử lọt vào khung nhìn (khi cuộn tới).
 * Dùng chung cho mọi animation trượt/fade trong thiệp cưới.
 */
export function useReveal(threshold = 0.25) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}