import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const archiveItems = [
  { id: 1, category: 'Color', title: '청색의 변주', image: 'https://picsum.photos/seed/blue/800/800' },
  { id: 2, category: 'Line', title: '처마의 곡선', image: 'https://picsum.photos/seed/roof/800/800' },
  { id: 3, category: 'Pattern', title: '꽃살문의 미학', image: 'https://picsum.photos/seed/flower-door/800/800' },
  { id: 4, category: 'Color', title: '단청의 오방색', image: 'https://picsum.photos/seed/color/800/800' },
  { id: 5, category: 'Line', title: '담장의 정렬', image: 'https://picsum.photos/seed/wall/800/800' },
  { id: 6, category: 'Pattern', title: '연꽃 무늬', image: 'https://picsum.photos/seed/lotus/800/800' },
];

const categories = ['All', 'Color', 'Line', 'Pattern'];

export default function Archive() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === activeCategory);

  return (
    <section id="archive" className="py-48 px-6 md:px-12 bg-zen-gray/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-8xl font-serif font-light mb-12 tracking-tight">
              Archive
            </h2>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {categories.map((cat, idx) => (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.4em] font-medium uppercase transition-all duration-500 relative pb-3 group ${
                  activeCategory === cat ? 'text-zen-black' : 'text-zen-black/30 hover:text-zen-black'
                }`}
              >
                {cat}
                <div className={`absolute bottom-0 left-0 h-[1.5px] bg-zen-gold transition-all duration-500 ${activeCategory === cat ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-zen-white mb-6">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale-[0.4] transition-all duration-1000 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                  
                  {/* Gallery Spotlight Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
                  </div>
                </div>
                <div className="flex flex-col items-start translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-zen-gold/60 mb-2 font-medium">
                    {item.category}
                  </span>
                  <h3 className="text-base tracking-wide font-light text-zen-black/80 group-hover:text-zen-black transition-colors">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
