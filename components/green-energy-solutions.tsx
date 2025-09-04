"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sun, Wind, Droplets, Leaf } from "lucide-react";

const energySolutions = [
  { icon: Sun, title: "Solar Energy", color: "from-yellow-400 to-orange-500" },
  { icon: Wind, title: "Wind Power", color: "from-blue-400 to-cyan-500" },
  { icon: Droplets, title: "Hydro Power", color: "from-blue-500 to-teal-500" },
  { icon: Leaf, title: "Biomass", color: "from-green-400 to-emerald-500" },
];

const industries = [
  "Cement",
  "Mining",
  "Steel",
  "Oil & Gas Refineries",
  "Power Generation",
  "Manufacturing",
];

export function GreenEnergySolutions() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Green Energy{" "}
            <span className="text-green-600 dark:text-green-400">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Sustainable energy solutions helping clients earn carbon credits and
            achieve environmental goals
          </p>
        </motion.div>

        {/* Energy Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {energySolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {solution.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-900 dark:text-green-100 border border-green-200 dark:border-green-800 hover:from-green-200 hover:to-blue-200 dark:hover:from-green-800/50 dark:hover:to-blue-800/50 transition-all duration-300 cursor-pointer hover:shadow-md"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Carbon Credits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 max-w-2xl mx-auto">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Carbon Credits & Environmental Benefits
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our green energy solutions help clients reduce their carbon
              footprint while generating valuable carbon credits, contributing
              to both environmental sustainability and financial returns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
