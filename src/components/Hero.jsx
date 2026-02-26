import BlurText from './BlurText';
export const Hero = () => {
    return (
        <section className="h-screen flex flex-col text-start items-center justify-center bg-main1 px-4">
            <div className="flex flex-col gap-10 max-w-3xl">

        <div className="md:hidden flex items-center gap-3">
            <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.8)] animate-pulse"></div>
             <h3 className="font-main text-sm md:text-base font-light text-zinc-400 tracking-wide">
             Maxim Krynyckyj — Front-End Vývojář
            </h3>
              </div>

            <div className="max-w-3xl">
                    <BlurText 
                        text="Stavím weby s přesahem." 
                        delay={60} 
                        animateBy="words" 
                        direction="top" 
                        className="font-main text-6xl md:text-8xl font-extrabold tracking-tight text-main2 leading-tight" 
                    />
                </div>

            <h2 className="font-main text-2xl font-normal text-main2">
            Jsem student a Front-End vývojář. Tvořím čisté, rychlé a moderní weby, které dávají smysl.
            </h2>

            <div className="w-full h-px bg-zinc-500 my-24 md:hidden"></div>
            </div>
            
        </section>
    );
};