import { useSearchParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { Form, Btn, Label, Search } from "./Movies.styled"; 
import { fetchMovies } from "Api/FetchMovies";
import MoviesList from "components/MovieList/MovieList";


const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        if (!query) return;

        async function getMovies() {
            try {
                const { data: { results } } = await fetchMovies.getMoviesByQuery(query);
                setMovies([...results])
            }
            catch {
                console.error(new Error())
            }
        }
        getMovies()

    },[query])



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const { query: { name, value } } = form.elements;
        setSearchParams({ [name]: value})
        form.reset();

    }
    

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                <Label>
                    <Search name="query"></Search>
                </Label>
                <Btn type="submit">Search</Btn>
            </Form>
            {movies && <MoviesList movies={movies} />}
        </div>
    )
}


export default Movies;