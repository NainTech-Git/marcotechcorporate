"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FileUser,
  UserCheck,
  FileText,
  Clock,
  FileCheck,
  Handshake,
  Video,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRef } from "react";

const sopSteps = [
  {
    icon: FileUser,
    title: "Client Assessment",
    description:
      "Comprehensive evaluation of client background, financial history, and business requirements",
    color: "from-blue-600 to-cyan-600",
    duration: "1-2 Days",
  },
  {
    icon: UserCheck,
    title: "Profile Verification",
    description:
      "Detailed verification of client credentials, compliance checks, and regulatory requirements",
    color: "from-emerald-600 to-teal-600",
    duration: "2-3 Days",
  },
  {
    icon: FileText,
    title: "Documentation",
    description:
      "Systematic collection, review, and organization of all required legal and financial documents",
    color: "from-violet-600 to-purple-600",
    duration: "3-5 Days",
  },
  {
    icon: Clock,
    title: "Analysis & Review",
    description:
      "Thorough financial analysis, market assessment, and strategic evaluation of opportunities",
    color: "from-orange-600 to-red-600",
    duration: "5-7 Days",
  },
  {
    icon: FileCheck,
    title: "Proposal Development",
    description:
      "Preparation of detailed mandate letter, term sheet, and customized financial solutions",
    color: "from-indigo-600 to-blue-600",
    duration: "2-3 Days",
  },
  {
    icon: Handshake,
    title: "Agreement Finalization",
    description:
      "Negotiation of terms, legal documentation, and formal agreement execution",
    color: "from-pink-600 to-rose-600",
    duration: "3-5 Days",
  },
  {
    icon: Video,
    title: "Relationship Activation",
    description:
      "Final consultation meeting, onboarding process, and ongoing relationship management setup",
    color: "from-teal-600 to-cyan-600",
    duration: "1-2 Days",
  },
];

export function SOPSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-500/3 to-indigo-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-indigo-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Standard Operating{" "}
            <span className="text-green-600 dark:text-green-400">
              Procedures
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our systematic approach ensures efficient service delivery,
            transparent communication, and exceptional results through every
            stage of our partnership.
          </p>
        </motion.div>

        <div className="relative" ref={ref}>
          {/* Timeline Line - Desktop Only */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 rounded-full hidden lg:block opacity-20" />

          <div className="space-y-8 sm:space-y-12">
            {sopSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        x: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: "easeOut",
                }}
                className="flex flex-col lg:items-center gap-6 lg:gap-12"
              >
                <div
                  className={`flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 w-full ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Icon - Above card on mobile */}
                  <motion.div
                    className="flex justify-center relative z-10 order-1 lg:order-none"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${step.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <step.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Card Content */}
                  <motion.div
                    className="flex-1 w-full max-w-md lg:max-w-none order-2 lg:order-none mx-auto lg:mx-0"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <div
                      className={`bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 relative text-center lg:text-left ${
                        index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div
                        className={`absolute top-4 right-4 sm:top-6 sm:right-6 ${
                          index % 2 === 0 ? "lg:right-6" : "lg:left-6"
                        } w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${
                          step.color
                        } rounded-lg sm:rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                      >
                        {index + 1}
                      </div>

                      {/* Duration Badge */}
                      <div
                        className={`absolute ${
                          index % 2 === 0
                            ? "top-4 left-4 sm:top-6 sm:left-6"
                            : "top-4 right-4 sm:top-6 sm:right-6"
                        } bg-white/90 dark:bg-slate-700/90 px-3 py-1 rounded-full border border-blue-200/30 dark:border-blue-800/30 backdrop-blur-sm`}
                      >
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                          {step.duration}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="mt-8 sm:mt-10">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                          {step.title}
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Spacer for desktop alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 sm:mt-20"
        >
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 sm:p-12 rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-slate-700/50 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    14-21 Days
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Total Timeline
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    End-to-end process completion
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    99%
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Success Rate
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Successful project completion
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                  <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    24/7
                  </div>
                  <div className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Support
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    Dedicated relationship management
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Start Your Journey
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
