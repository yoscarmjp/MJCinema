
type MovieCardProps = {
    image: string;
    title: string;
    genre: string;
    calification: number;
    isNew: boolean;
};

function MovieCard({image, title, genre, calification, isNew} : MovieCardProps){
    return(
        <div className="w-64 h-115 rounded-xl relative overflow-hidden bg-white/10">
            <span className="absolute bg-red-500 text-white font-semibold text-sm px-3 rounded-sm left-4 top-3">{isNew ? "Nuevo" : ""}</span>
            <span className="absolute right-4 top-3 text-xs flex justify-center items-center gap-1"><i className='bxr bxs-star text-yellow-500'></i>  {calification}</span>
            <img src={image} className="w-full" />
            <div className="px-3">
                <h1 className="text-lg font-semibold mt-2">{title}</h1>
                <p className="text-gray-400">{genre}</p>
            </div>
        </div>
    )
}

export default MovieCard;