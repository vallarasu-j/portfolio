"use client";
import React, { useState } from "react";
import { contactData } from "@/app/utils";
import { GithubSVG, LinkedInSVG, MailSVG } from "../ui/icons";

export default function Contact() {
  const { email, github, linkedIn } = contactData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200/50">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Let&apos;s Connect</h2>
        <p className="text-slate-600 max-w-2xl">
          Interested in working together or want to discuss AI integrations and web platforms? Reach out directly through any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {/* Email Card (with click-to-copy) */}
        <div 
          onClick={handleCopyEmail}
          className="glass-card p-6 flex flex-col justify-between items-start group min-h-[180px] cursor-pointer hover:border-sky-600/30"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            <MailSVG size={22} color="currentColor" />
          </div>
          <div className="space-y-1 mt-4">
            <h3 className="text-lg font-bold text-slate-800">Email Address</h3>
            <p className="text-sm text-slate-600 break-all">{email}</p>
          </div>
          <span className="text-xs font-mono font-bold text-sky-700 bg-sky-600/10 px-2.5 py-1 rounded-full mt-4 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </div>

        {/* LinkedIn Link */}
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 flex flex-col justify-between items-start group min-h-[180px] hover:border-sky-600/30"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            <LinkedInSVG size={22} color="currentColor" />
          </div>
          <div className="space-y-1 mt-4">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">LinkedIn</h3>
            <p className="text-sm text-slate-600">linkedin.com/in/vallarasu-j</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full mt-4 group-hover:border-sky-500 group-hover:text-sky-600 transition-all duration-300">
            Connect
          </span>
        </a>

        {/* GitHub Link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 flex flex-col justify-between items-start group min-h-[180px] hover:border-sky-600/30"
        >
          <div className="w-12 h-12 rounded-xl bg-sky-600/10 border border-sky-600/20 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
            <GithubSVG size={22} color="currentColor" />
          </div>
          <div className="space-y-1 mt-4">
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-600 transition-colors">GitHub</h3>
            <p className="text-sm text-slate-600">github.com/vallarasu-j</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full mt-4 group-hover:border-sky-500 group-hover:text-sky-600 transition-all duration-300">
            View Profile
          </span>
        </a>
      </div>
    </section>
  );
}
