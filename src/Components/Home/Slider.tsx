import { useState, useRef, useEffect } from 'react';
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
  const [itemsPerView, setItemsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  const maxIndex = Math.max(0, slider.movies.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="px-4 sm:px-8 lg:px-20 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{slider.title}</h2>
                <p className="text-gray-400 text-xs sm:text-sm">{slider.description}</p>
            </div>
            <div className="hidden sm:flex gap-2">
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

        <div 
          ref={sliderRef}
          className="relative overflow-hidden touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            <div
              className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
                {slider.movies.map((movie) => (
                    <div
                      key={movie.id}
                      className="shrink-0 w-full sm:w-80 group cursor-pointer"
                      style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 12 / itemsPerView}px)` }}
                    >
                        <div className="relative overflow-hidden rounded-lg">
                            {movie.isNew && (
                                <span className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
                                  NUEVO
                                </span>
                            )}
                            <div className="absolute top-2 sm:top-3 right-2 sm:right-3 flex items-center gap-1 bg-black/70 px-2 py-1 rounded z-10">
                                <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                                <span className="text-white text-xs sm:text-sm font-semibold">
                                  {movie.rating}
                                </span>
                            </div>
                            <img
                              src={movie.poster}
                              alt={movie.title}
                              className="w-full aspect-2/3 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="mt-3">
                            <h3 className="text-white font-semibold text-base sm:text-lg mb-1 truncate">
                                {movie.title}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm">{movie.genre}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Indicadores móviles */}
        <div className="flex sm:hidden justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-zinc-600'
              }`}
              aria-label={`Ir a slide ${idx + 1}`}
            />
          ))}
        </div>
    </section>
  );
};

export default Slider;