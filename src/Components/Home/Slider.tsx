import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  year: number;
  rating: number;
  duration: string;
  genre: string;
  genres: string[];
  synopsis: string;
  director: string;
  cast: string[];
  isNew?: boolean;
  isTrending?: boolean;
  trailerUrl?: string;
}

interface SliderProps {
  slider: {
    title: string;
    description: string;
    movies: Movie[];
  };
}

const Slider = ({ slider }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, slider.movies.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="px-20 py-12">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="text-3xl font-bold text-white mb-1">{slider.title}</h2>
                <p className="text-gray-400 text-sm">{slider.description}</p>
            </div>
            <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  aria-label="Anterior"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
                  aria-label="Siguiente"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>

        <div className="relative overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
                {slider.movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="shrink-0 w-80 group cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-lg">
                            {movie.isNew && (
                                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                  NUEVO
                                </span>
                            )}
                            <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded z-10">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-white text-sm font-semibold">
                                  {movie.rating}
                                </span>
                            </div>
                            <img
                              src={movie.poster}
                              alt={movie.title}
                              className="w-80 h-112.5 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">
                                {movie.title}
                            </h3>
                            <p className="text-gray-400 text-sm">{movie.genre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Slider;