import MovieCard from "../../Components/Movies/MovieCard";

interface Movies {
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

function MyListSection() {

    const movies: Movies[] = [
      {
        id: '1',
        title: 'Dune: Parte Dos',
        poster: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
        year: 2024,
        rating: 8.8,
        duration: '2h 46min',
        genre: 'Ciencia Ficción',
        genres: ['Ciencia Ficción', 'Aventura', 'Drama'],
        synopsis: 'Paul Atreides se une a Chani y los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia.',
        director: 'Denis Villeneuve',
        cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson'],
        isNew: true,
        isTrending: true,
      },
      {
        id: '2',
        title: 'Oppenheimer',
        poster: 'https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
        year: 2023,
        rating: 8.5,
        duration: '3h',
        genre: 'Drama',
        genres: ['Drama', 'Historia', 'Biografía'],
        synopsis: 'La historia del científico J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica.',
        director: 'Christopher Nolan',
        cast: ['Cillian Murphy', 'Emily Blunt', 'Robert Downey Jr.'],
        isTrending: true,
      },
      {
        id: '3',
        title: 'Poor Things',
        poster: 'https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg',
        year: 2023,
        rating: 8.0,
        duration: '2h 21min',
        genre: 'Comedia',
        genres: ['Comedia', 'Drama', 'Romance'],
        synopsis: 'La increíble historia de Bella Baxter, una joven resucitada por el científico Dr. Godwin Baxter.',
        director: 'Yorgos Lanthimos',
        cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe'],
        isNew: true,
      },
      {
        id: '4',
        title: 'Killers of the Flower Moon',
        poster: 'https://image.tmdb.org/t/p/w500/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/1X7vow16X7CnCoexXh4H4F2yDJv.jpg',
        year: 2023,
        rating: 7.8,
        duration: '3h 26min',
        genre: 'Crimen',
        genres: ['Crimen', 'Drama', 'Historia'],
        synopsis: 'Miembros de la nación Osage son asesinados bajo misteriosas circunstancias en Oklahoma durante la década de 1920.',
        director: 'Martin Scorsese',
        cast: ['Leonardo DiCaprio', 'Robert De Niro', 'Lily Gladstone'],
      },
    ];

    


    return (
        <main className="flex flex-row flex-wrap gap-4 px-8 my-12 lg:px-20 min-h-screen">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                image={movie.poster}
                title={movie.title}
                genre={movie.genre}
                calification={movie.rating}
                isNew={movie.isNew ?? false}
              />
            ))}
            {movies.length === 0 && (
              <div className="w-full text-center py-20">
                <p className="text-2xl text-gray-400">No se encontraron películas en este género</p>
              </div>
            )}

            <style>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.5s ease-out forwards;
              }
                `}
            </style>
        </main>
      );
    }
export default MyListSection;