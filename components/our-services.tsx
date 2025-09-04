"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  PieChart,
  Shield,
  TrendingUp,
  Search,
  Building2,
  Target,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: PieChart,
    title: "Portfolio Management",
    description:
      "Comprehensive portfolio optimization and management services to maximize returns while minimizing risk.",
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description:
      "Thorough risk analysis and mitigation strategies to protect your investments and business interests.",
    color: "from-green-500 to-emerald-500",
    delay: 0.2,
  },
  {
    icon: TrendingUp,
    title: "Strategic Investment Advice",
    description:
      "Data-driven investment strategies tailored to your financial goals and market conditions.",
    color: "from-purple-500 to-violet-500",
    delay: 0.3,
  },
  {
    icon: Search,
    title: "Market Surveys",
    description:
      "In-depth market research and analysis to identify opportunities and competitive advantages.",
    color: "from-orange-500 to-red-500",
    delay: 0.4,
  },
  {
    icon: Building2,
    title: "Business Venture Analysis",
    description:
      "Comprehensive evaluation of business opportunities and venture feasibility assessments.",
    color: "from-indigo-500 to-blue-500",
    delay: 0.5,
  },
  {
    icon: Target,
    title: "Maximizing Results",
    description:
      "Performance optimization strategies to enhance efficiency and maximize your financial outcomes.",
    color: "from-pink-500 to-rose-500",
    delay: 0.6,
  },
];

export function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl" />
      </motion.div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-900 dark:text-blue-100 border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              🚀 Our Services
            </span>
          </motion.div> */}

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive financial advisory services designed to drive your
            business forward
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
                rotateX: -30,
                scale: 0.8,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      rotateX: 0,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: service.delay,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              whileHover={{
                y: -15,
                rotateY: 10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              className="group relative perspective-1000"
            >
              <div className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5`}
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Floating Icon */}
                <motion.div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 shadow-lg relative z-10`}
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    y: -5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="h-8 w-8 text-white" />

                  {/* Icon Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.h3
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-4 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: service.delay + 0.2 }}
                >
                  {service.title}
                </motion.h3>

                <motion.p
                  className="text-gray-600 dark:text-gray-300 leading-relaxed relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: service.delay + 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20`}
                  style={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, transparent, transparent) border-box`,
                  }}
                  whileHover={{
                    background: `linear-gradient(white, white) padding-box, linear-gradient(45deg, var(--tw-gradient-from), var(--tw-gradient-to)) border-box`,
                  }}
                />

                {/* Particle Effects */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                      initial={{
                        x: "50%",
                        y: "50%",
                        scale: 0,
                        opacity: 0,
                      }}
                      whileHover={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        transition: {
                          duration: 2,
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
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative">Explore All Services</span>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
