import Genre from "../Components/Home/Genre";
import Hero from "../Components/Home/Hero";
import Slider from "../Components/Home/Slider";
import PlanCard from "../Components/Plans/PlanCard";

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

interface Feature {
    text: string;
    available: boolean;
}

interface Plan {
    icon: string;
    iconGradient: string;
    title: string;
    subtitle: string;
    price: string;
    features: Feature[];
    buttonText: string;
    buttonStyle: string;
    containerStyle: string;
    isPopular: boolean;
}

function HomePage(){
    const movies: Movie[] = [
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

    const plans: Plan[] = [
        {
            icon: 'bx-bolt-alt',
            iconGradient: 'bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300',
            title: 'Básico',
            subtitle: 'Perfecto para comenzar',
            price: '4.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: false },
                { text: 'Sin audio premium', available: false }
            ],
            buttonText: 'Comenzar',
            buttonStyle: 'bg-white/5 border border-white/10 hover:bg-white/10',
            containerStyle: 'border border-white/20',
            isPopular: false
        },
        {
            icon: 'bx-star',
            iconGradient: 'bg-gradient-to-r from-orange-700 to-orange-400',
            title: 'Estándar',
            subtitle: 'La mejor opción',
            price: '9.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: true },
                { text: 'Sin audio premium', available: false }
            ],
            buttonText: 'Elegir Plan',
            buttonStyle: 'bg-red-500 hover:scale-105 drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]',
            containerStyle: 'border border-red-500 shadow-2xl shadow-red-500/60',
            isPopular: true
        },
        {
            icon: 'bx-crown',
            iconGradient: 'bg-gradient-to-r from-yellow-600 to-yellow-300',
            title: 'Premium',
            subtitle: 'Experiencia completa',
            price: '14.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: true },
                { text: 'Sin audio premium', available: true }
            ],
            buttonText: 'Ir Premium',
            buttonStyle: 'bg-white/5 border border-white/10 hover:bg-white/10',
            containerStyle: 'border border-white/20',
            isPopular: false
        }
    ];
    
    return(
        <main>
            <Hero />
            <Slider
                slider={{
                  title: 'Tendencias',
                  description: 'Lo más visto esta semana',
                  movies: movies,
                }}
            />
            <Slider
                slider={{
                  title: 'Nuevos Estrenos',
                  description: 'Recien Agregados',
                  movies: movies,
                }}
            />
            <Slider
                slider={{
                  title: 'Mejor Valoradas',
                  description: 'Las joyas del catálogo',
                  movies: movies,
                }}
            />
            <Genre />
            <Slider
                slider={{
                  title: 'Para Ti',
                  description: 'Basado en tus gustos',
                  movies: movies,
                }}
            />
            <section className="flex justify-center items-center flex-col gap-16 my-20">
                <div className="text-center">
                    <span className="text-red-500 font-semibold uppercase drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">Planes y Precios</span>
                    <h1 className="text-5xl font-bold mt-3">Elige tu <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">Plan Perfecto</span></h1>
                    <p className="text-gray-400 mt-3">Cancela cuando quieras. Sin compromisos ni costes ocultos.</p>
                </div>
                <div className="flex justify-center items-center flex-row flex-wrap gap-6">
                    {plans.map((plan, index) => (
                        <PlanCard key={index} plan={plan} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default HomePage;