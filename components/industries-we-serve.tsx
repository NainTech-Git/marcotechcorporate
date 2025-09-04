"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const industries = [
  "MNCs",
  "Information Technology",
  "EPC & Engineering",
  "Hospitality & Hotels",
  "Real Estate",
  "Infrastructure",
  "Construction",
  "Manufacturing",
  "Healthcare",
  "Energy & Utilities",
  "Financial Services",
  "Retail & E-commerce",
];

export function IndustriesWeServe() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50px", "-50px"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y, rotate }}
        className="absolute top-10 right-10 w-32 h-32 border-2 border-blue-200 dark:border-blue-800 rounded-full opacity-20"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["-30px", "30px"]) }}
        className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-lg opacity-30"
      />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              🏢 Industries We Serve
            </span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Industries We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Serve
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Trusted by leading companies across diverse sectors and industries
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                y: -3,
                rotateY: 4,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group perspective-1000"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 transition-all duration-300 cursor-pointer hover:shadow-xl backdrop-blur-sm relative overflow-hidden">
                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
                <span className="relative z-10">{industry}</span>
              </span>
            </motion.div>
          ))}
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                y: [null, -20, 20, -20],
                x: [null, 10, -10, 10],
                scale: [1, 1.2, 0.8, 1],
                opacity: [0.3, 0.8, 0.3, 0.8],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
