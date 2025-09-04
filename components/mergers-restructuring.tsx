"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, RefreshCw, AlertTriangle, Handshake } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Zap,
    title: "Debt Optimization",
    description:
      "Strategic debt restructuring to improve cash flow and reduce financial burden.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: RefreshCw,
    title: "Capital Structure Resetting",
    description:
      "Comprehensive capital structure optimization for enhanced financial flexibility.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: AlertTriangle,
    title: "Distressed Debt Resolution",
    description:
      "Expert guidance through complex debt resolution and workout scenarios.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Handshake,
    title: "M&A, IPOs, JVs Consulting",
    description:
      "End-to-end support for mergers, acquisitions, IPOs, and joint ventures.",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function MergersRestructuring() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl" />
      </motion.div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              🔄 Mergers & Restructuring
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Mergers &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Restructuring
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Expert guidance through complex financial restructuring and
            strategic transactions
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotateY: -30,
                scale: 0.8,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{
                y: -15,
                rotateY: 10,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className="group relative perspective-1000"
            >
              <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-md rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-800/30 dark:hover:to-purple-800/30 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Icon with Enhanced Animation */}
                <motion.div
                  className={`flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-xl mb-4 shadow-lg relative z-10`}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -15, 15, 0],
                    y: -5,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <service.icon className="h-7 w-7 text-white" />

                  {/* Pulsing Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>

                <motion.h3
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-3 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  {service.description}
                </motion.p>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full`}
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                      }}
                      whileHover={{
                        x: `${20 + Math.random() * 60}%`,
                        y: `${20 + Math.random() * 60}%`,
                        scale: [0, 1, 0],
                        transition: {
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatType: "loop",
                        },
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "M&A Deals" },
              { value: "$2B+", label: "Transaction Value" },
              { value: "95%", label: "Success Rate" },
              { value: "30+", label: "Countries" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
