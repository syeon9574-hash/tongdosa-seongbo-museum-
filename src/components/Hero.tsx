import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-zen-black">
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://picsum.photos/seed/temple-main/1920/1080" 
          alt="Tongdosa Temple Morning" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zen-black/60" />
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-zen-white/70 text-xs tracking-[1em] uppercase mb-8 font-light ml-[1em]">
            Seongbo Museum
          </span>
          <h1 className="text-7xl md:text-[10rem] font-serif text-zen-white font-light tracking-tight mb-10 leading-none">
            The Art of Zen
          </h1>
          <p className="text-zen-white/70 max-w-lg mx-auto text-sm md:text-lg leading-relaxed tracking-widest font-light italic">
            "비움으로 채우는 깨달음의 공간, <br className="hidden md:block"/> 정적인 몰입 속에서 만나는 천년의 숨결"
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-zen-white/20 mb-4" 
          />
          <span className="text-[9px] tracking-[0.5em] text-zen-white/40 uppercase ml-[0.5em]">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
