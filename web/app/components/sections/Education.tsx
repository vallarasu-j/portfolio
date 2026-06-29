"use client";
import React from "react";
import { motion } from "framer-motion";
import { educationList } from "@/app/utils";

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-slate-200/50">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Education</h2>
        <p className="text-slate-600 max-w-2xl">
          Academic foundation in electronics, communications, and computational engineering.
        </p>
      </div>

      <div className="max-w-3xl">
        {educationList.map((edu) => (
          <motion.div
            key={edu.career}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-800">
                {edu.career}
              </h3>
              <p className="text-sm text-slate-600">
                {edu.description}
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-sky-700 bg-sky-600/10 border border-sky-600/20 px-3.5 py-1.5 rounded-full self-start md:self-center">
              {edu.years}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
