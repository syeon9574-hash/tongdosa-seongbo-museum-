import { motion } from 'motion/react';

export default function Story() {
  return (
    <section id="story" className="py-64 px-6 md:px-12 bg-zen-black text-zen-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Heading */}
        <div className="mb-48 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-[10px] tracking-[0.6em] uppercase text-zen-gold/60 mb-10 font-bold">
              Magazine Edition Vol. 01
            </p>
            <h2 className="text-6xl md:text-[12rem] font-serif font-light leading-[0.85] tracking-tighter mb-16 text-zen-white">
              Artist’s <br /> 
              <span className="italic text-zen-white/20">Breath</span>
            </h2>
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
              <span className="text-xl md:text-3xl font-serif text-zen-gold">화승의 숨결</span>
              <div className="hidden md:block flex-grow h-[1px] bg-zen-white/10" />
            </div>
          </motion.div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-64">
          {/* Block 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8 overflow-hidden aspect-[16/10] bg-zen-gray/10"
            >
              <motion.img 
                whileInView={{ scale: 1.1 }}
                viewport={{ once: false }}
                transition={{ duration: 10, ease: "linear" }}
                src="https://picsum.photos/seed/artist-painter/1600/1000" 
                alt="Master painting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-4"
            >
              <h3 className="text-3xl md:text-5xl font-serif mb-10 leading-snug text-zen-white">
                "붓 끝에서 피어나는 <br className="hidden md:block"/> 천년의 세월"
              </h3>
              <p className="text-sm font-light text-zen-white/50 leading-loose tracking-widest">
                단순히 그림을 그리는 행위를 넘어, <br className="hidden md:block"/> 
                한 획 한 획에 마음을 담는 수행의 과정입니다. <br className="hidden md:block"/> 
                통도사의 불화는 그 자체로 하나의 우주이며, <br className="hidden md:block"/> 
                우리는 그 속에서 어제의 지혜와 평온을 만납니다.
              </p>
            </motion.div>
          </div>

          {/* Block 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            <div className="md:col-span-4 self-center order-2 md:order-1 space-y-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <span className="text-zen-gold/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Detail 01</span>
                <p className="text-sm font-light leading-loose text-zen-white/40 tracking-wider">
                  천연 안료가 만들어내는 깊고 은은한 색채. <br/>
                  시간의 흐름에도 변치 않는 본연의 가치를 지향합니다.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-zen-gold/60 text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Detail 02</span>
                <p className="text-sm font-light leading-loose text-zen-white/40 tracking-wider">
                  섬세한 필선이 자아내는 고요한 리듬. <br/>
                  정지된 이미지 속에서도 살아 숨쉬는 생명력을 느낄 수 있습니다.
                </p>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8 order-1 md:order-2"
            >
              <div className="aspect-[3/4] md:aspect-[4/5] bg-neutral-900/50 overflow-hidden relative group">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5 }}
                  src="https://picsum.photos/seed/texture-detail/1200/1500" 
                  alt="Texture Detail" 
                  className="w-full h-full object-cover grayscale-[0.6] group-hover:grayscale-[0.2] transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-80 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <div className="w-16 h-[1px] bg-zen-gold/30 mx-auto mb-16 transition-all duration-1000 group-hover:w-32" />
            <p className="text-3xl md:text-6xl font-serif italic mb-16 leading-tight tracking-tight text-zen-white/80">
              "예술은 곧 마음의 거울이며, <br className="hidden md:block"/> 
              박물관은 그 거울을 닦는 공간입니다."
            </p>
            <div className="flex flex-col items-center gap-6">
              <span className="text-[10px] tracking-[0.8em] text-zen-white/20 uppercase ml-[0.8em] font-light">
                The Art of Zen
              </span>
              <div className="w-[1px] h-24 bg-gradient-to-b from-zen-gold/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
