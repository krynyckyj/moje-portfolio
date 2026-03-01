import { ScrollReveal } from './components/ScrollReveal';

export const Skills = () => {
    return ( 
      <section className="w-full max-w-6xl mx-auto px-6 md:px-24 md:py-12 z-10 relative">
  
  <h2 className="text-4xl md:text-5xl font-extrabold text-main2 mb-12 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
    Vybrané projekty
  </h2>

       
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<ScrollReveal>
    <div className="md:col-span-2 min-h-[300px] rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
        <h3 className="text-2xl text-main2 font-bold relative z-10">Kuchyne Srubar</h3>
        <p className="text-zinc-400 relative z-10">Digitalizace zastarale webove stranky</p>
        {/* Obrazek */}
    </div>
</ScrollReveal>

<ScrollReveal>
    <div className="md:col-span-1 md:row-span-2 min-h-[300px] md:min-h-full rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
        <h3 className="text-2xl text-main2 font-bold relative z-10">Druhý výtvor</h3>
        <p className="text-zinc-400 relative z-10">Nějaký zajímavý koncept</p>
         {/* Obrazek */}
    </div>
    </ScrollReveal>

<ScrollReveal>
    <div className="col-span-1 min-h-[250px] rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
        <h3 className="text-xl text-main2 font-bold relative z-10">Třetí projekt</h3>
         {/* Obrazek */}
    </div>
</ScrollReveal>

<ScrollReveal>
    <div className="col-span-1 min-h-[250px] rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
        <h3 className="text-xl text-main2 font-bold relative z-10">Čtvrtý projekt</h3>
         {/* Obrazek */}
    </div>
    </ScrollReveal>

  </div>
</section>
    );
};