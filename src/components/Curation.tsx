import { motion } from 'motion/react';

const curations = [
  {
    id: 1,
    title: "비 오는 날의 사찰",
    subtitle: "The Rain at Temple",
    image: "https://picsum.photos/seed/temple-rain/1200/1500",
    description: "처마 끝에 맺힌 빗방울과 그 소리가 전하는 깊은 고요"
  },
  {
    id: 2,
    title: "마음의 평온을 주는 문양",
    subtitle: "Patterns of Peace",
    image: "https://picsum.photos/seed/temple-pattern/1200/1500",
    description: "단청의 조화로움 속에서 찾는 선의 정신"
  },
  {
    id: 3,
    title: "빛과 그림자의 변주",
    subtitle: "Light & Shadow",
    image: "https://picsum.photos/seed/temple-light/1200/1500",
    description: "시간의 흐름을 보여주는 대웅전의 그림자"
  }
];

export default function Curation() {
  return (
    <section id="curation" className="py-48 px-6 md:px-12 bg-zen-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight leading-none text-zen-black">
              Curation
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-[10px] tracking-[0.4em] font-medium text-zen-black/40 uppercase ml-1"
          >
            Curated pieces for your zen state
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
          <div className="md:col-span-7">
            <CurationCard curation={curations[0]} />
          </div>
          
          <div className="md:col-span-5 flex flex-col gap-24 md:gap-48 md:pt-48">
            <CurationCard curation={curations[1]} delay={0.2} />
            <CurationCard curation={curations[2]} delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}

function CurationCard({ curation, delay = 0 }: { curation: typeof curations[0], delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative cursor-pointer"
    >
      <div className="overflow-hidden mb-10 aspect-[3/4] bg-zen-gray/10">
        <motion.img 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={curation.image} 
          alt={curation.title} 
          className="w-full h-full object-cover transition-all duration-1000 group-hover:brightness-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="group-hover:translate-x-4 transition-transform duration-700 ease-[0.22,1,0.36,1]">
        <h3 className="text-3xl font-serif mb-3 tracking-tight group-hover:text-zen-gold transition-colors duration-500">
          {curation.title}
        </h3>
        <p className="text-[10px] tracking-[0.3em] uppercase font-semibold text-zen-gold/80 mb-6 font-sans">
          {curation.subtitle}
        </p>
        <p className="text-sm font-light text-zen-black/50 leading-loose max-w-sm tracking-wide">
          {curation.description}
        </p>
      </div>
    </motion.div>
  );
}
