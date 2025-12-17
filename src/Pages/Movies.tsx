import { useState } from "react";
import MoviesList from "../Components/Movies/MoviesList";
import TitleSection from "../Components/Movies/TitleSection";

function Movies(){
    const [selectedGenre, setSelectedGenre] = useState('Todas');

    return(
        <main>
            <TitleSection onGenreChange={setSelectedGenre} selectedGenre={selectedGenre} />
            <MoviesList selectedGenre={selectedGenre} />
        </main>
    )
}

export default Movies;