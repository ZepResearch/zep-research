"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function CoOrganizationLogosClient({ logos }) {
  const [duplicatedLogos, setDuplicatedLogos] = useState([]);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    // Duplicate logos to ensure smooth infinite scroll
    setDuplicatedLogos([...logos, ...logos]);

    // Measure container width
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    // Update container width on window resize
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [logos]);

  return (
    <div className="overflow-hidden" ref={containerRef}>
      <div
        className="flex animate-scroll"
        style={{
          width: `${containerWidth * 2}px`,
          animationDuration: `${duplicatedLogos.length * 1}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[150px]  mx-4 mb-2"
          >
            <div className="relative w-24 h-28 overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-lg transition-shadow duration-300">
              <Image
                src={logo.src}
                alt={logo.name}
                layout="fill"
                objectFit="contain"
                className="p-4"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

