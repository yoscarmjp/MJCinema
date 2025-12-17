interface Genre {
  name: string;
  slug: string;
}

function TitleSection({ onGenreChange, selectedGenre }: { onGenreChange: (genre: string) => void, selectedGenre: string }) {
    const genres: Genre[] = [
      { name: 'Todas', slug: 'todas' },
      { name: 'Acción', slug: 'accion' },
      { name: 'Comedia', slug: 'comedia' },
      { name: 'Drama', slug: 'drama' },
      { name: 'Ciencia Ficción', slug: 'ciencia-ficcion' },
      { name: 'Crimen', slug: 'crimen' },
      { name: 'Historia', slug: 'historia' }
    ];

    const handleGenreClick = (genreName: string, slug: string) => {
      onGenreChange(genreName);
      const newUrl = slug === 'todas' ? '/movies' : `/movies?genre=${slug}`;
      window.history.pushState({}, '', newUrl);
    };

    return (
        <header className="flex flex-col px-8 lg:px-20 mt-16">
            <h1 className="text-5xl font-bold">
              Todas las <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">Películas</span>
            </h1>
            <p className="text-gray-400 mt-2">Explora nuestro catálogo completo</p>

            <div className="mt-12 flex flex-row flex-wrap items-center gap-8">
                <div className="relative">
                    <i className='bx bx-search absolute left-3 top-3.5 text-xl text-white/20'></i> 
                    <input 
                      type="text" 
                      placeholder="Buscar películas..."
                      className="border border-white/20 text-sm bg-white/10 p-3 w-90 px-10 text-white placeholder:text-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                    />
                </div>
                <div className="flex flex-row flex-wrap gap-3">
                    {genres.map((genre) => (
                      <button 
                          key={genre.name}
                          onClick={() => handleGenreClick(genre.name, genre.slug)}
                          className={`font-semibold px-4 py-2 rounded-lg transition-all duration-300 ${
                            selectedGenre === genre.name 
                              ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(255,0,0,0.5)] scale-105' 
                              : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-105'
                          }`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
}

export default TitleSection;