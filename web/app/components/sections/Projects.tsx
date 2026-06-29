"use client";
import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@nextui-org/chip";
import { projectList } from "@/app/utils";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-slate-200/50">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Featured Projects</h2>
        <p className="text-slate-600 max-w-2xl">
          A selection of major platforms I designed, developed, and deployed, incorporating complex web architecture and advanced AI/LLM integrations.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projectList.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            className="glass-card p-6 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-slate-800 hover:text-sky-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              {/* Project Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies Used */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.map((tech) => (
                <Chip
                  key={`${project.title}-${tech}`}
                  size="sm"
                  variant="flat"
                  className="bg-sky-600/10 border border-sky-600/20 text-sky-700 text-xs font-semibold"
                >
                  {tech}
                </Chip>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
