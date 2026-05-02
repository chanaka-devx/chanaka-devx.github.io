import { Star } from 'lucide-react';


export default function PreFooterMarquee() {
  const textItems = Array(10).fill("LET'S BUILD TOGETHER");

  return (
    <div className="w-full py-12 bg-background-light dark:bg-background-dark overflow-hidden border-t border-b border-black/5 dark:border-white/5 relative z-10 flex mask-image-fade">
      <div className="flex animate-marquee gap-8 min-w-max pr-8 items-center">
        {textItems.map((text, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gradientStart to-primary-gradientEnd tracking-tighter whitespace-nowrap opacity-80">
              {text}
            </span>
            <Star className="w-8 h-8 text-primary opacity-50" />
          </div>
        ))}
      </div>
      <div className="flex animate-marquee gap-8 min-w-max pr-8 items-center absolute top-12 left-full">
        {textItems.map((text, idx) => (
          <div key={`dup-${idx}`} className="flex items-center space-x-8">
            <span className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-gradientStart to-primary-gradientEnd tracking-tighter whitespace-nowrap opacity-80">
              {text}
            </span>
            <Star className="w-8 h-8 text-primary opacity-50" />
          </div>
        ))}
      </div>
    </div>
  );
}
