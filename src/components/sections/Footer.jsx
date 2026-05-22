import React, { useState } from 'react';
import CV from '../../assets/docs/BiwanCV.pdf';
import { ScrollReveal } from '../ui/FramerAnimations';
import SpotlightCard from '../ui/SpotlightCard';
import Magnetic from '../ui/Magnetic';
import { Mail, Phone, MapPin, FileText, Send, CheckCircle } from 'lucide-react';

const Footer = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSending(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/biwanshrestha77@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        })
      });
      
      const data = await response.json();
      if (response.ok || data.success === "true") {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message. Please check your connection.");
    } finally {
      setIsSending(false);
    }
  };

  const contactDetails = [
    {
      title: "Location",
      detail: "Hattiban, Lalitpur",
      icon: <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />,
      spotlight: "rgba(6, 182, 212, 0.1)"
    },
    {
      title: "Phone",
      detail: "+977 9849966860",
      icon: <Phone className="w-5 h-5 text-amber-600 dark:text-purple-400" />,
      spotlight: "rgba(245, 158, 11, 0.1)"
    },
    {
      title: "Email",
      detail: "biwanshrestha77@gmail.com",
      icon: <Mail className="w-5 h-5 text-pink-600 dark:text-pink-400" />,
      spotlight: "rgba(236, 72, 153, 0.1)"
    },
    {
      title: "Resume",
      detail: "Download PDF CV",
      icon: <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      spotlight: "rgba(16, 185, 129, 0.1)",
      isLink: true,
      href: CV
    }
  ];

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden bg-[#fff1e6] dark:bg-zinc-950 border-t border-orange-100 dark:border-white/[0.05]">
      
      {/* Background glowing gradients */}
      <div className="absolute left-1/4 bottom-0 w-[400px] h-[300px] rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 w-[400px] h-[300px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact form and cards layout */}
        <div id="contactme" className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-20 items-start">
          
          {/* Left Columns: Pitch and Contact Info (2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="right">
              <span className="text-xs font-mono tracking-[0.25em] text-orange-600 dark:text-cyan-400 uppercase">Contact</span>
              <h2 className="text-4xl md:text-5xl font-black text-orange-950 dark:text-white mt-3 tracking-tight">Let's Connect</h2>
              <p className="text-orange-800 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed mt-4">
                Have a project idea, partnership proposal, or just want to chat? Fill out the form, or reach out through direct channels. I usually respond within 24 hours.
              </p>
            </ScrollReveal>

            {/* Direct Cards Stack */}
            <div className="space-y-4">
              {contactDetails.map((card, idx) => (
                <ScrollReveal key={idx} direction="right" delay={idx * 0.1}>
                  {card.isLink ? (
                    <a href={card.href} download className="block group">
                      <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-white/[0.04] bg-white/40 dark:bg-zinc-950/40 hover:border-emerald-500/30 hover:bg-zinc-100/40 dark:hover:bg-zinc-900/40 transition-all duration-300">
                        <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08] group-hover:scale-105 transition-transform">
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{card.title}</h4>
                          <span className="text-xs font-bold text-zinc-800 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors font-mono">{card.detail}</span>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 dark:border-white/[0.04] bg-white/40 dark:bg-zinc-950/40 hover:border-zinc-300 dark:hover:border-white/[0.08] transition-all">
                      <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/[0.08]">
                        {card.icon}
                      </div>
                      <div>
                        <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{card.title}</h4>
                        <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 font-mono">{card.detail}</span>
                      </div>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right Columns: Floating Glassmorphism Contact Form (3 cols) */}
          <div className="lg:col-span-3">
            <ScrollReveal direction="left">
              <SpotlightCard 
                spotlightColor="rgba(139, 92, 246, 0.1)" 
                className="border-zinc-200 dark:border-white/[0.05] bg-white/60 dark:bg-zinc-950/60 p-8 rounded-3xl relative overflow-hidden"
              >
                
                {/* Visual elements */}
                <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-purple-500/20 rounded-tr-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-purple-500/20 rounded-bl-3xl pointer-events-none" />

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-6 font-mono tracking-wide uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Send A Message
                </h3>

                {isSubmitted ? (
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-450">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-zinc-950 dark:text-white font-mono">Transmission Successful!</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-xs max-w-xs leading-relaxed">
                      Thank you for reaching out. Your message has been encrypted and sent. I'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs rounded-xl border border-zinc-200 dark:border-white/[0.06] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 p-4 transition-all outline-none font-mono"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="e.g. john@example.com"
                          className="w-full bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs rounded-xl border border-zinc-200 dark:border-white/[0.06] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 p-4 transition-all outline-none font-mono"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hello Biwan, I'd love to collaborate on..."
                        className="w-full bg-zinc-100/60 dark:bg-zinc-900/60 text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 text-xs rounded-xl border border-zinc-200 dark:border-white/[0.06] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 p-4 transition-all outline-none font-mono resize-none"
                      />
                    </div>

                    <Magnetic range={40} className="w-full">
                      <button
                        type="submit"
                        disabled={isSending}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-purple-600 dark:bg-purple-500 text-white dark:text-zinc-950 hover:bg-purple-700 dark:hover:bg-purple-400 font-mono text-xs tracking-widest font-bold uppercase transition-all duration-300 disabled:opacity-50 shadow-[0_4px_20px_rgba(139,92,246,0.25)] cursor-pointer"
                      >
                        {isSending ? (
                          <>Encrypting &amp; Sending...</>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </form>
                )}
              </SpotlightCard>
            </ScrollReveal>
          </div>

        </div>

        {/* Social Media & Copyright Footer bottom */}
        <div className="pt-12 border-t border-zinc-200 dark:border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-sm font-black text-zinc-900 dark:text-white tracking-widest">BIWAN SHRESTHA</span>
            <p className="text-zinc-500 text-[10px] font-mono mt-1">FINAL YEAR CSIT STUDENT &bull; FULL STACK DEVELOPER</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              {
                name: "GitHub",
                href: "https://github.com/biwanshrestha14",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                )
              },
              {
                name: "Instagram",
                href: "https://www.instagram.com/beewan_derer/",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                )
              },
              {
                name: "Facebook",
                href: "https://facebook.com/biwan.shrestha.9",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )
              }
            ].map((social, idx) => (
              <Magnetic key={idx} range={20} actionScale={1.1}>
                <button
                  onClick={() => window.open(social.href, '_blank')}
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-white/[0.08] hover:border-zinc-300 dark:hover:border-white/20 bg-zinc-100 dark:bg-zinc-900/60 hover:bg-zinc-200 dark:hover:bg-zinc-900 text-zinc-650 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center transition-all shadow-md cursor-pointer"
                  aria-label={social.name}
                >
                  {social.icon}
                </button>
              </Magnetic>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-600">
          <span>&copy; {new Date().getFullYear()} BIWAN SHRESTHA. ALL RIGHTS ENCRYPTED.</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
            AWARDS-GRADE EXPERIENCES
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
