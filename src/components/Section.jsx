import { useEffect, useRef, useState } from 'react';

export default function Section({ id, children, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      id={id}
      ref={sectionRef}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 md:px-6 fade-in ${isVisible ? 'visible' : ''}`}>
        {children}
      </div>
    </section>
  );
}

