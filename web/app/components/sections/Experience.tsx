"use client";
import React from "react";
import { motion } from "framer-motion";
import { experienceList } from "@/app/utils";

const timelineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6 }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-200/50">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Work History</h2>
        <p className="text-slate-600 max-w-2xl">
          My professional software engineering experience, highlighting technical achievements and leadership impact.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
        {experienceList.map((exp, index) => (
          <motion.div
            key={`${exp.role}-${exp.period}`}
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative pl-8 md:pl-10 group"
          >
            {/* Timeline Circle */}
            <span className="absolute left-0 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-600 border-2 border-slate-50 group-hover:scale-125 group-hover:bg-emerald-500 shadow-sm group-hover:shadow-emerald-500/50 transition-all duration-300" />

            <div className="glass-card p-6 space-y-4">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-sky-600">
                    {exp.company} &bull; <span className="text-slate-500 font-normal">{exp.location}</span>
                  </p>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-600 bg-slate-100 border border-slate-200/80 px-3 py-1 rounded-full self-start md:self-center">
                  {exp.period}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2.5 text-sm text-slate-600 list-none pl-0">
                {exp.bullets.map((bullet, idx) => (
                  <li key={`${index}-${idx}`} className="relative pl-6 leading-relaxed">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
