
import { useState,useEffect, Suspense  } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Back, MovieBox, Poster, InfoBox, Title, Overview, Genres, Description, InfoList, InfoItem, InfoLink, SubTitle } from "./Movie.styled";
import { fetchMovies } from "Api/FetchMovies";
import {BsArrowLeftShort} from 'react-icons/bs'
import { useRef } from "react";


const Movie = () => {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams();
    const basePosterUrl = 'https://image.tmdb.org/t/p/w500/';
    const location = useLocation();
    const backLinkLocation =useRef(location.state?.from ?? "/")


    useEffect(() => {

        async function movieByID() {
            try {
                const { data } = await fetchMovies.getMovieByID(movieId)
                setMovie({ ...data })
            } catch {
                console.error(new Error())
            }
           
        }
        movieByID()
    },[movieId])

    const posterUrl = path => {
        return path ? basePosterUrl + path : 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Movietime.svg/1920px-Movietime.svg.png'
    }

    const avarageVote = value => {
        return `${Math.round(value * 10)}%`
    }

    const genresToString = (arr) => {
        return arr.map(({name}) => name).join(' ')
    }

    const parseYear = value => {
        return new Date(value).getFullYear();
    }
    if (!movie) return; 

    const { poster_path, title, release_date, vote_average, overview, genres } =
        movie;
    
    return (
        <>
            
        { movie && <> <div className="container">
            <Back to={backLinkLocation.current}> 
            <BsArrowLeftShort />
            Go Back
            </Back>
                <MovieBox>
                    <Poster src={posterUrl(poster_path)} />
                    <InfoBox>
                        <Title>{title} ({parseYear(release_date)})</Title>
                        <Description> User Score: {avarageVote(vote_average) }</Description>
                        <Overview>Overview</Overview>
                        <Description>{overview}</Description>
                        <Genres>Genres</Genres>
                        <Description>{genresToString(genres)}</Description>
                    </InfoBox>
                </MovieBox>
                
        </div>
                <div className="container">
                    <SubTitle>Additional information</SubTitle>
            <InfoList>
                    <InfoItem>
                            <InfoLink to={'cast'}>Cast</InfoLink>   
                    </InfoItem> 
                    <InfoItem>
                            <InfoLink to={'reviews'}>Reviews</InfoLink>   
                    </InfoItem>       
            </InfoList>

                </div>
                <div className="container">
                    <Suspense>
                        <Outlet />
                    </Suspense>
        </div>
            </>}    
       
        </>



    )
}

export default Movie;