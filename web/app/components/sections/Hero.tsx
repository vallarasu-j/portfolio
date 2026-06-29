"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { whoAmIData } from "@/app/utils";

export default function Hero() {
  const { fullName, profession, whoAmI } = whoAmIData;

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl space-y-6"
      >
        {/* Glow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-700 text-xs font-semibold tracking-wider uppercase mb-2 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-sky-600" />
          Open to Work & Collaboration
        </div>

        {/* Name with Solid Sky Blue (No Gradient) */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Hi, I&apos;m{" "}
          <span className="text-sky-600">
            {fullName}
          </span>
        </h1>

        {/* Profession */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700">
          {profession}
        </h2>

        {/* Detailed Professional Summary */}
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {whoAmI}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            as="a"
            href="#projects"
            size="lg"
            className="bg-sky-600 hover:bg-sky-500 text-white font-semibold shadow-lg shadow-sky-600/10 transition-all duration-300"
            radius="md"
          >
            Explore Projects
          </Button>
          <Button
            as="a"
            href="#contact"
            variant="bordered"
            size="lg"
            className="border-slate-200 hover:border-sky-500 hover:bg-sky-500/5 text-slate-700 hover:text-sky-600 font-semibold transition-all duration-300"
            radius="md"
          >
            Get in Touch
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
