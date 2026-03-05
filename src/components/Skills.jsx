import { ScrollReveal } from './ScrollReveal';

export const Skills = () => {
    return ( 
      <section className="w-full max-w-6xl mx-auto px-6 md:px-24 md:py-12 z-10 relative">
  
        <h2 className="text-4xl md:text-5xl font-extrabold text-main2 mb-12 tracking-tight leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Vybrané projekty
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mb-24">

            <div className="md:col-span-2">
                <ScrollReveal>
                    <div className="min-h-[300px] h-full rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
                        <h3 className="text-2xl text-main2 font-bold relative z-10">Kuchyne Srubar</h3>
                        <p className="text-zinc-400 relative z-10">Digitalizace zastarale webove stranky</p>
                        <img src="" alt="" />
                    </div>
                </ScrollReveal>
            </div>

            <div className="md:col-span-1 md:row-span-2">
                <ScrollReveal>
                    <div className="min-h-[300px] md:min-h-full h-full rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
                        <h3 className="text-2xl text-main2 font-bold relative z-10">Zatim nic</h3>
                        <p className="text-zinc-400 relative z-10"> :/</p>
                    </div>
                </ScrollReveal>
            </div>

            <div className="col-span-1">
                <ScrollReveal>
                    <div className="min-h-[250px] h-full rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
                        <h3 className="text-xl text-main2 font-bold relative z-10">Zatim nic</h3>
                    </div>
                </ScrollReveal>
            </div>

            <div className="col-span-1 mb-14 md:mb-0">
                <ScrollReveal>
                    <div className="min-h-[250px] h-full rounded-3xl bg-zinc-900/50 border border-white/10 p-8 flex flex-col justify-end hover:bg-zinc-800/50 transition-colors cursor-pointer relative overflow-hidden group">
                        <h3 className="text-xl text-main2 font-bold relative z-10">Zatim nic</h3>
                    </div>
                </ScrollReveal>
            </div>

        </div>
    </section>
    );
};