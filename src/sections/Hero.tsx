import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
    >
      {/* 背景画像 - 全画面 */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/alberto-rudolphi-YTc2kHz5L9s-unsplash.jpg)",
        }}
      ></div>

      {/* オーバーレイ - 画像の上に軽いグラデーション */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-white/20 via-transparent to-white/30"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/10 via-transparent to-transparent"></div>

      {/* コンテンツ - 中央配置、幅制限なし */}
      <div
        className={`relative z-10 w-full text-center px-4 md:px-8 fade-in ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent drop-shadow-lg">
            ZAGARO
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white mb-6 font-semibold drop-shadow-md">
            あなたの可能性を、技術で解き放つ。
          </p>
          <div className="mt-8">
            <a
              href="https://twitter.com/zagaro_eng"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white text-base md:text-lg font-medium transition-colors duration-200 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Unsplashクレジット - 右下に小さく表示 */}
      <div className="absolute bottom-4 right-4 z-20">
        <a
          href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B5%E3%83%9C%E3%83%86%E3%83%B3%E3%81%AE%E6%A4%8D%E7%89%A9-YTc2kHz5L9s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white text-xs transition-colors duration-200 flex items-center gap-1 bg-black/20 backdrop-blur-sm px-2 py-1 rounded-md"
        >
          <span>Photo by</span>
          <span className="underline">Alberto Rudolphi</span>
          <span>on</span>
          <span className="underline">Unsplash</span>
        </a>
      </div>
    </section>
  );
}
