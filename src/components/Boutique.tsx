import { motion } from 'motion/react';

const products = [
  { id: 1, name: "천년의 향", price: "28,000", image: "https://picsum.photos/seed/incense/800/1000" },
  { id: 2, name: "선각 명상보", price: "45,000", image: "https://picsum.photos/seed/meditation/800/1000" },
  { id: 3, name: "연화문 다기 세트", price: "120,000", image: "https://picsum.photos/seed/tea-set/800/1000" },
];

export default function Boutique() {
  return (
    <section className="py-48 px-6 md:px-12 bg-zen-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-zen-black/30 mb-6 block font-bold">Selected Items</span>
            <h2 className="text-5xl md:text-8xl font-serif font-light mb-12 tracking-tight text-zen-black">Museum Boutique</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden bg-zen-gray/10 mb-10 relative">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              <div className="text-center translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-xs font-bold tracking-[0.4em] uppercase mb-3 text-zen-black/80 group-hover:text-zen-gold transition-colors duration-500">{product.name}</h3>
                <p className="text-sm font-serif text-zen-black/30 italic transition-colors group-hover:text-zen-black/60 tracking-widest leading-none">KRW {product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <button className="text-[10px] tracking-[0.5em] uppercase font-bold py-6 px-16 border border-zen-black/10 hover:border-zen-gold hover:text-zen-gold transition-all duration-700 relative overflow-hidden group">
            <span className="relative z-10">Explore All Collection</span>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-zen-black/5 transition-all duration-500" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
