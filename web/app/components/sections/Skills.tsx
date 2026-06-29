"use client";
import React from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/app/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-200/50">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Core Technologies</h2>
        <p className="text-slate-600 max-w-2xl">
          A comprehensive breakdown of my technical stack across frontend, backend, AI agent integration, and cloud databases.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.category}
            variants={cardVariants}
            className="glass-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-800">{cat.category}</h3>
                <span className="text-xs font-mono font-bold text-sky-700 bg-sky-600/10 px-2.5 py-1 rounded-full">
                  0{idx + 1}
                </span>
              </div>

              {/* Skills badges grid */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100/60 hover:bg-sky-600/10 border border-slate-200 hover:border-sky-600/30 text-slate-700 hover:text-sky-800 text-sm transition-all duration-300 font-medium"
                  >
                    {item.icon && <span className="text-slate-500 hover:text-sky-600">{item.icon}</span>}
                    <span>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
