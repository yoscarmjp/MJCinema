import { Link } from "react-router-dom";

interface Genre {
  id: string;
  name: string;
  count: number;
  color: string;
}

const genresData: Genre[] = [
  { 
    id: 'accion', 
    name: 'Acción', 
    count: 245, 
    color: '#8B4513'
  },
  { 
    id: 'comedia', 
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
    id: 'ciencia-ficcion', 
    name: 'Ciencia Ficción', 
    count: 156, 
    color: '#1B4D3E'
  },
  { 
    id: 'crimen', 
    name: 'Crimen', 
    count: 167, 
    color: '#5C2E2E'
  },
  { 
    id: 'historia', 
    name: 'Historia', 
    count: 145, 
    color: '#3D1F5C'
  },
];

function GenreList() {

  return (
    <section className="flex justify-center items-center flex-wrap gap-4 mx-auto py-12 px-8 lg:px-20">
      {genresData.map((genre) => (
        <Link
          key={genre.id}
          to={`/movies?genre=${genre.id}`}
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
        </Link>
      ))}
    </section>
  );
}

export default GenreList;