export default function Footer() {
  return (
    <footer className="py-32 px-6 md:px-12 bg-zen-black text-white/30 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 md:gap-12 mb-32">
          <div className="md:col-span-2 space-y-12">
            <h2 className="text-3xl font-serif text-white tracking-[0.3em] uppercase leading-none">TONGDOSA</h2>
            <p className="text-xs font-light leading-loose max-w-sm tracking-widest">
              통도사 성보박물관은 천년의 지혜와 고귀한 예술을 보존하고 현대적으로 재해석하여 <br className="hidden md:block"/> 
              관람객에게 깊은 평온과 영감을 선사합니다.
            </p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-zen-gold transition-colors"><div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-zen-gold transition-all">FB</div></a>
              <a href="#" className="hover:text-zen-gold transition-colors"><div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-zen-gold transition-all">IG</div></a>
              <a href="#" className="hover:text-zen-gold transition-colors"><div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:border-zen-gold transition-all">YT</div></a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/80 mb-10 font-bold">Navigation</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] uppercase">
              <li><a href="#curation" className="hover:text-zen-gold transition-colors block">Curation</a></li>
              <li><a href="#archive" className="hover:text-zen-gold transition-colors block">Archive</a></li>
              <li><a href="#story" className="hover:text-zen-gold transition-colors block">Story</a></li>
              <li><a href="#space" className="hover:text-zen-gold transition-colors block">Space</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-white/80 mb-10 font-bold">Policies</h4>
            <ul className="space-y-6 text-[10px] tracking-[0.3em] uppercase font-medium">
              <li><a href="#" className="hover:text-zen-gold transition-colors block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-zen-gold transition-colors block">Terms of Service</a></li>
              <li><a href="#" className="hover:text-zen-gold transition-colors block">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <span className="text-[9px] tracking-[0.4em] uppercase opacity-50 font-medium">© 2026 TONGDOSA SEONGBO MUSEUM. DESIGNED BY 성수연</span>
            <span className="text-[9px] tracking-[0.4em] uppercase opacity-30 hidden md:block">ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-12 h-[1px] bg-zen-gold/20" />
            <span className="text-[9px] tracking-[0.8em] text-zen-gold/60 uppercase ml-[0.8em] font-light">The Art of Zen</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
