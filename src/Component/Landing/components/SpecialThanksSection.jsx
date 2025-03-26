import React, { useEffect, useRef, useState } from "react";

const sponsors = ["/Sponsor1.png"];

function SpecialThanksSection() {
  const [isStatic, setIsStatic] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const checkStatic = () => {
      if (containerRef.current && contentRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = contentRef.current.offsetWidth;
        setIsStatic(contentWidth <= containerWidth);
      }
    };

    checkStatic();
    window.addEventListener("resize", checkStatic);

    return () => {
      window.removeEventListener("resize", checkStatic);
    };
  }, []);

  return (
    <div className="py-12 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl font-bold text-sky-500 text-left">
          Special Thanks to:
        </h2>
        <div className="mt-8 relative overflow-hidden">
          <div className="relative z-10 py-6">
            <div className={`flex whitespace-nowrap`} ref={contentRef}>
              {sponsors.map((sponsor, index) => (
                <img
                  key={index}
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="mx-4 h-20 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialThanksSection;
