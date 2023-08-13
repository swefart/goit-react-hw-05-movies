import { RewAuthor, RewItem, RewList, RewText } from "./Reviews.styled";
import { fetchMovies } from "Api/FetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState({})


    useEffect(() => {
        async function getReviews() {
            try {
                const { data: { id, results } } = await fetchMovies.getReviewsMovie(movieId)
                setReviews({id, results})
            } catch {

            }
        }
        getReviews()
    }, [reviews])


    const { results } = reviews;

    return (
        <div className="container">
            {!results?.length && <p>We don't have any reviews for this movie</p>}
            <RewList>
                {results?.map(({ id, author, content }) => (
                    <RewItem key={id}>
                        <RewAuthor>{author}</RewAuthor>
                        <RewText>{content }</RewText>
                    </RewItem>
                ))}
            </RewList>
        </div>
    )
}
export default Reviews;