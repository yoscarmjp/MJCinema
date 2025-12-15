function Hero(){
    return(
        <main 
            className="relative w-full h-180 bg-center bg-no-repeat bg-cover mb-20"
            style={{
                backgroundImage: "url('/img/backgrounds/bg.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            <div className="relative z-20 h-full flex flex-col justify-center px-6 lg:px-32 text-white gap-4">
                
                <div className="flex items-center gap-4 text-sm">
                    <span className="uppercase bg-red-500/30 px-4 py-2 rounded-2xl tracking-widest text-red-500 font-semibold">
                        Película Destacada
                    </span>
                    <span className="flex items-center gap-1">
                        <i className='bx bxs-star text-yellow-400'></i> 9.2
                    </span>
                </div>

                <h1 className="text-4xl lg:text-7xl font-bold">
                    El Arte del <span className="text-red-500">Cine</span>
                </h1>

                <p className="max-w-xl text-gray-300">
                    Descubre miles de películas y series exclusivas. 
                    Desde los clásicos atemporales hasta los estrenos 
                    más esperados. Tu experiencia cinematográfica premium 
                    comienza aquí.
                </p>

                <div className="flex gap-4 mt-4">
                    <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 lg:px-8 cursor-pointer text-xs lg:text-base transition-all duration-300 py-4 rounded-lg font-semibold">
                        <i className='bx bxs-play'></i> Ver Ahora
                    </button>
                    <button className="flex items-center gap-2 bg-white/20 border border-white/30 hover:bg-white/30 px-4 text-xs lg:text-base lg:px-8 cursor-pointer transition-all duration-300 py-4 rounded-lg">
                        <i className='bx bx-info-circle'></i> Más Información
                    </button>
                </div>

                <div className="flex flex-row items-center flex-wrap gap-8 my-12">
                    <div>
                        <h1 className="text-orange-500 font-bold text-3xl">10K+</h1>
                        <p className="text-sm text-gray-400">Películas</p>
                    </div>

                    <div className=" h-12 w-px bg-gray-400" />

                    <div>
                        <h1 className="text-orange-500 font-bold text-3xl">4K</h1>
                        <p className="text-sm text-gray-400">Ultra HD</p>
                    </div>

                    <div className=" h-12 w-px bg-gray-400" />

                    <div>
                        <h1 className="text-orange-500 font-bold text-3xl">5+</h1>
                        <p className="text-sm text-gray-400">Dispositivos</p>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Hero;
