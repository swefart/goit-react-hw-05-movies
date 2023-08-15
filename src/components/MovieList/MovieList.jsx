import { TrandItemLink, TrandList, TrandItem } from "./MovieList.styled";
import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";

const MoviesList = ({movies}) => {

    const location = useLocation();
    return (
        <div className="container">
            {<TrandList>
                {movies.map(({ id, title }) => {
                    return (
                        <TrandItem key={id}>
                        <TrandItemLink to={`/movies/${id}`} state={{from : location}}>{title }</TrandItemLink>
                    </TrandItem>
                    )
                    
                })}
            </TrandList>}
        </div>
         
    )
}
export default MoviesList


MoviesList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}