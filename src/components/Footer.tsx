import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const SocialIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'linkedin':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-8.791h-2.96v-3.429h2.96v-2.538c0-2.928 1.788-4.52 4.398-4.52 1.25 0 2.324.093 2.636.135v3.057h-1.809c-1.42 0-1.695.675-1.695 1.666v2.185h3.384l-.441 3.429h-2.943v8.791h6.128c.731 0 1.324-.593 1.324-1.324v-21.351c0-.732-.593-1.325-1.324-1.325z"/>
        </svg>
      );
    case 'github':
      return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Footer() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Mock implementation)");
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-black text-white pt-24 pb-12">
      
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1%2F69b0d1d271397d4fd4227e2d_Footer%20Video_mp4.mp4" type="video/mp4" />
        <source src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1%2F69b0d1d271397d4fd4227e2d_Footer%20Video_webm.webm" type="video/webm" />
        <div className="absolute inset-0 bg-[#111111]"></div>
      </video>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Contact Card */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group mb-32 w-full max-w-3xl"
        >
          {/* Bottom Outer Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-white/20 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>
          
          <div className="relative bg-[#1a1a1a]/80 backdrop-blur-[40px] p-10 md:p-16 rounded-[60px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] flex flex-col items-center text-center overflow-hidden">
            
            {/* Bottom Rim Light (The sharp white curve at the bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent shadow-[0_-4px_20px_rgba(255,255,255,0.3)]"></div>

            {/* Top Spinning Icon */}
            <div className="relative mb-10">
              
              
            </div>

            {/* Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 leading-tight max-w-2xl">
              Get in touch
            </h2>
            <p className="text-base md:text-md text-white/40 mb-12 max-w-md leading-relaxed font-medium">
              I'm currently looking for new opportunities, whether interstate or remote. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
              <input 
                type="text" 
                placeholder="Your name*"
                className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/5 focus:bg-black/50 focus:border-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm font-medium" 
                required 
              />
              <input 
                type="email" 
                placeholder="Email*"
                className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/5 focus:bg-black/50 focus:border-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm font-medium" 
                required 
              />
              <textarea 
                rows={4} 
                placeholder="Message"
                className="w-full px-6 py-4 rounded-2xl bg-black/30 border border-white/5 focus:bg-black/50 focus:border-white/10 outline-none transition-all text-white placeholder:text-white/20 text-sm font-medium resize-none" 
              ></textarea>
              
              <div className="pt-8">
                <button 
                  type="submit" 
                  className="px-12 py-4 rounded-full bg-[#2a2a2a] hover:bg-[#333333] text-white font-bold transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 text-sm tracking-wide"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Social Links Row */}
        <div className="w-full flex flex-wrap items-center justify-center gap-x-16 gap-y-8 mb-16 pt-16 border-t border-white/10">
          {[
            { label: 'LinkedIn', type: 'linkedin', href: 'https://www.linkedin.com/in/chanaka-madhuranga-' },
            { label: 'Instagram', type: 'instagram', href: 'https://instagram.com' },
            { label: 'Facebook', type: 'facebook', href: 'https://facebook.com' },
            { label: 'GitHub', type: 'github', href: 'https://github.com/chanaka-devx' }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href}
              className="group flex items-center gap-3 text-white/50 hover:text-white transition-all font-medium"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-all border border-white/5">
                <SocialIcon type={social.type} />
              </div>
              <span className="text-sm tracking-wide">{social.label}</span>
              <ArrowUpRight className="w-3 h-3 opacity-30 group-hover:opacity-100 transition-all" />
            </a>
          ))}
        </div>

        {/* Branding Row */}
          
          <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-all">
            <span className="text-4xl font-bold tracking-tighter text-white/90">madhuranga.me</span>
          </div>

      </div>
    </footer>
  );
}
