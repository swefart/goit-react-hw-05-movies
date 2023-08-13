import { HomeTitle} from "./Home.styled";
import { fetchMovies } from "Api/FetchMovies";
import { useState, useEffect} from "react";
import MoviesList from "components/MovieList/MovieList";



const Home = () => {
    const [trandMovies, setTrandMovies] = useState([])

    useEffect(() => {
        async function getMovies() {
            try {
                const { data: { results } } = await fetchMovies.getTrendMovies()
                setTrandMovies(results)

            }
            catch {

            }
        }
        getMovies()
    },[])



    return (
        <div className='container'>
            <HomeTitle>Tranding day</HomeTitle>
           <MoviesList movies={trandMovies}></MoviesList>
            
        </div>
    )
}

export default Home;
