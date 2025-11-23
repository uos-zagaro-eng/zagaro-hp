import { useState, useEffect } from "react";

/**
 * スクロール位置を監視するカスタムフック
 * @param threshold スクロール閾値（この値を超えたらscrolledがtrueになる）
 * @returns スクロール位置とスクロール状態
 */
export const useScroll = (threshold: number = 50) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          setScrolled(currentScrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollY, scrolled };
};

