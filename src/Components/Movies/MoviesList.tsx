import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

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

function MoviesList({ selectedGenre }: { selectedGenre: string }) {
    const [, setSelectedGenre] = useState('Todas');

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
      {
        id: '5',
        title: 'The Batman',
        poster: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fvber9r9H9cLhXGY.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
        year: 2022,
        rating: 7.8,
        duration: '2h 56min',
        genre: 'Acción',
        genres: ['Acción', 'Crimen', 'Drama'],
        synopsis: 'Batman se ve obligado a investigar la corrupción de Ciudad Gótica cuando un asesino en serie tiene como objetivo a la élite de la ciudad.',
        director: 'Matt Reeves',
        cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano'],
        isTrending: true,
      },
      {
        id: '6',
        title: 'Everything Everywhere All at Once',
        poster: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg',
        year: 2022,
        rating: 8.0,
        duration: '2h 19min',
        genre: 'Ciencia Ficción',
        genres: ['Ciencia Ficción', 'Comedia', 'Aventura'],
        synopsis: 'Una inmigrante china se ve envuelta en una aventura insana donde solo ella puede salvar el mundo explorando otros universos.',
        director: 'Daniel Kwan, Daniel Scheinert',
        cast: ['Michelle Yeoh', 'Ke Huy Quan', 'Stephanie Hsu'],
      },
      {
        id: '7',
        title: 'Top Gun: Maverick',
        poster: 'https://image.tmdb.org/t/p/w500/62HCnUTziyWQpE7YBPF3jLo5Xsa.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg',
        year: 2022,
        rating: 8.3,
        duration: '2h 10min',
        genre: 'Acción',
        genres: ['Acción', 'Drama'],
        synopsis: 'Después de más de treinta años de servicio, Pete Mitchell continúa superando los límites como piloto de pruebas.',
        director: 'Joseph Kosinski',
        cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly'],
      },
      {
        id: '8',
        title: 'Interstellar',
        poster: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
        year: 2014,
        rating: 8.7,
        duration: '2h 49min',
        genre: 'Ciencia Ficción',
        genres: ['Ciencia Ficción', 'Aventura', 'Drama'],
        synopsis: 'Un grupo de exploradores debe viajar más allá de nuestra galaxia para descubrir si la humanidad tiene un futuro entre las estrellas.',
        director: 'Christopher Nolan',
        cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      },
      {
        id: '9',
        title: 'Joker',
        poster: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YMsVnx4m.jpg',
        year: 2019,
        rating: 8.4,
        duration: '2h 2min',
        genre: 'Drama',
        genres: ['Drama', 'Crimen', 'Thriller'],
        synopsis: 'Arthur Fleck, un comediante fallido, desciende lentamente hacia la locura mientras se transforma en el Joker.',
        director: 'Todd Phillips',
        cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
      },
      {
        id: '10',
        title: 'Blade Runner 2049',
        poster: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
        backdrop: 'https://image.tmdb.org/t/p/original/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg',
        year: 2017,
        rating: 8.0,
        duration: '2h 44min',
        genre: 'Ciencia Ficción',
        genres: ['Ciencia Ficción', 'Drama', 'Misterio'],
        synopsis: 'Un joven blade runner descubre un secreto enterrado hace mucho tiempo que le lleva a buscar a Rick Deckard.',
        director: 'Denis Villeneuve',
        cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
      },
    ];

    const getGenreFromSlug = (slug: string): string => {
      const genreMap: { [key: string]: string } = {
        'todas': 'Todas',
        'accion': 'Acción',
        'comedia': 'Comedia',
        'drama': 'Drama',
        'ciencia-ficcion': 'Ciencia Ficción',
        'crimen': 'Crimen',
        'historia': 'Historia'
      };
      return genreMap[slug] || 'Todas';
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const genreParam = params.get('genero');
        
        if (genreParam) {
          setSelectedGenre(getGenreFromSlug(genreParam));
    }

    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const genreParam = params.get('genero');
      setSelectedGenre(genreParam ? getGenreFromSlug(genreParam) : 'Todas');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);


    const filteredMovies = selectedGenre === 'Todas' 
        ? movies 
        : movies.filter(movie => movie.genres.includes(selectedGenre));

    return (
        <main className="flex flex-row flex-wrap gap-4 px-8 my-12 lg:px-20 min-h-screen">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                image={movie.poster}
                title={movie.title}
                genre={movie.genre}
                calification={movie.rating}
                isNew={movie.isNew ?? false}
              />
            ))}
            {filteredMovies.length === 0 && (
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
export default MoviesList;