import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Space() {
  return (
    <section id="space" className="py-48 px-6 md:px-12 bg-zen-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          
          {/* Architecture Section */}
          <div className="space-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight mb-12 leading-none text-zen-black">Space & Architecture</h2>
              <p className="text-sm font-light text-zen-black/60 leading-[2] max-w-md tracking-wide">
                자연과 건축이 하나로 어우러지는 통도사 성보박물관의 공간미를 느껴보세요. <br/><br/>
                전통 건축의 우아한 곡선과 현대적 갤러리의 정적함이 공존하는 이곳은, 사유와 명상을 위한 완벽한 배경이 됩니다.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square bg-zen-gray/10 overflow-hidden relative group"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src="https://picsum.photos/seed/arch-1/1000/1000" 
                  alt="Architecture Details" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-square bg-zen-gray/10 overflow-hidden mt-16 relative group"
              >
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1.5 }}
                  src="https://picsum.photos/seed/arch-2/1000/1000" 
                  alt="Temple Architecture" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col justify-center gap-24 h-full lg:pt-32"
          >
            <div className="bg-zen-gray/20 p-12 md:p-24 space-y-16 border border-zen-black/[0.03]">
              <div className="space-y-16">
                <InfoItem 
                  icon={<Clock size={20} strokeWidth={1} />}
                  title="Visiting Hours"
                  content="09:00 - 17:00 (Open Everyday)"
                />
                <InfoItem 
                  icon={<MapPin size={20} strokeWidth={1} />}
                  title="Location"
                  content="108 Tongdosa-ro, Habuk-myeon, Yangsan, Gyeongnam"
                />
                <InfoItem 
                  icon={<Phone size={20} strokeWidth={1} />}
                  title="Contact"
                  content="+82 055-382-7100"
                />
              </div>
              
              <div className="pt-8">
                <motion.button 
                  whileHover={{ x: 10 }}
                  className="text-[10px] tracking-[0.5em] uppercase font-bold text-zen-gold border-b border-zen-gold/30 pb-3 transition-all flex items-center gap-4"
                >
                  Get Directions
                  <div className="w-8 h-[1px] bg-zen-gold" />
                </motion.button>
              </div>
            </div>
            
            {/* REAL MAP IFRAME WITH REVEAL */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="relative h-80 bg-zen-white overflow-hidden"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.3142714241695!2d129.06316137648356!3d35.48514997265147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3566370415a76987%3A0xed4987621f92e35!2z7Ya164-E7IKsIOyEseuhtOuwleyrrOq0gA!5e0!3m2!1sko!2skr!4v1713334644000!5m2!1sko!2skr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border border-zen-black/5" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, content }: { icon: ReactNode, title: string, content: string }) {
  return (
    <div className="flex gap-6">
      <div className="mt-1 text-zen-gold">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] tracking-[0.2em] uppercase text-zen-black/40 mb-2 font-medium">{title}</h4>
        <p className="text-sm font-light tracking-wide">{content}</p>
      </div>
    </div>
  );
}
