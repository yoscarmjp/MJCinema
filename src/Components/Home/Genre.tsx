
interface Genre {
  id: string;
  name: string;
  count: number;
  color: string;
}

interface GenreProps {
  onGenreClick?: (genreId: string) => void;
}

const genresData: Genre[] = [
  { 
    id: 'action', 
    name: 'Acción', 
    count: 245, 
    color: '#8B4513'
  },
  { 
    id: 'comedy', 
    name: 'Comedia', 
    count: 189, 
    color: '#1E3A5F'
  },
  { 
    id: 'drama', 
    name: 'Drama', 
    count: 312, 
    color: '#4A1942'
  },
  { 
    id: 'sci-fi', 
    name: 'Ciencia Ficción', 
    count: 156, 
    color: '#1B4D3E'
  },
  { 
    id: 'horror', 
    name: 'Terror', 
    count: 98, 
    color: '#5C4A2C'
  },
  { 
    id: 'romance', 
    name: 'Romance', 
    count: 134, 
    color: '#3D2B5C'
  },
  { 
    id: 'thriller', 
    name: 'Thriller', 
    count: 167, 
    color: '#5C2E2E'
  },
  { 
    id: 'animation', 
    name: 'Animación', 
    count: 76, 
    color: '#2C5C5C'
  },
  { 
    id: 'documentary', 
    name: 'Documental', 
    count: 89, 
    color: '#5C4A1B'
  },
  { 
    id: 'adventure', 
    name: 'Aventura', 
    count: 145, 
    color: '#3D1F5C'
  },
];

function Genre({ onGenreClick }: GenreProps) {
  const handleClick = (genreId: string) => {
    if (onGenreClick) {
      onGenreClick(genreId);
    }
  };

  return (
    <section className="px-20 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Explorar por <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">Género</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Descubre películas que se adaptan a tu estado de ánimo
        </p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 mx-auto">
        {genresData.map((genre) => (
          <button
            key={genre.id}
            onClick={() => handleClick(genre.id)}
            className="relative overflow-hidden rounded-xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl group w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-13px)]"
            style={{ backgroundColor: genre.color }}
          >
            <div className="relative z-10">
              <h3 className="text-white text-xl font-bold mb-1">
                {genre.name}
              </h3>
              <p className="text-white/80 text-sm">
                {genre.count} películas
              </p>
            </div>
            
            <div className="absolute inset-0 bg-linear-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-300" />
            <div className="absolute inset-0 bg-black/20" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Genre;