'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';



const stats = [
  {
    number: '30+',
    label: 'global conferences',
    description: 'hosted over the past decade'
  },
  {
    number: '25+',
    label: 'countries represented',
    description: 'through collaborations and partnerships'
  },
  {
    number: '5,000+',
    label: 'community members',
    description: 'actively engaged in knowledge exchange'
  },
  {
    number: '75+',
    label: 'journal publications',
    description: 'contributing to global research'
  }
];

const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px' });
  const [displayValue, setDisplayValue] = useState(value);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!isInView) return;

    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/\d/g, '');
    const duration = 2;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(numericValue * progress);
      setDisplayValue(current + suffix);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(updateCounter);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-start border-l border-neutral-800 px-8 py-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
        className="text-6xl font-black text-neutral-900 dark:text-white mb-2 tracking-tight"
      >
        <AnimatedCounter value={stat.number} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
        className="space-y-1"
      >
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {stat.label}
        </p>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-xs">
          {stat.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const AnimatedStats = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-16 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white mb-4 tracking-tight">
            Driving change through collaboration
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            TIIKM is a leading global academic conference organizer and research collaborator connecting scholars and institutions worldwide.
          </p>
        </motion.div> */}

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-neutral-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`${
                index !== 0 ? 'border-l border-neutral-200 dark:border-neutral-800' : ''
              } ${
                index >= 2 ? 'border-t border-neutral-200 dark:border-neutral-800' : ''
              }`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <StatCard stat={stat} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
