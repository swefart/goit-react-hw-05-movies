import { fetchMovies } from "Api/FetchMovies";

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { CastBox, CastImg, CastInfo, CastName, CastList, CastItem } from "./Cast.styled";



const Cast = () => {
    const { movieId } = useParams();
    const [credits, setCredits] = useState([])
    const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';


    useEffect(() => {
        async function getCredits() {
            try {
                const { data: { cast } } = await fetchMovies.getCreditsMovie(movieId);
                setCredits([...cast])
            } catch {
                console.error(new Error())
            }
        }
        getCredits();
    }, [credits])

    const castImgUrl = path => {
        return path ? baseUrlImg + path : 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/46301/bust-in-silhouette-emoji-clipart-xl.png';
    }

    return (
        <div className="container">
            <CastList>
                {credits.map(({ credit_id, name, character, profile_path }) => (
                    <CastItem key={credit_id}>
                        <CastBox>
                            <CastImg src={castImgUrl(profile_path)} alt={name} />
                        </CastBox>
                      
                        <CastName>{name}</CastName>
                        <CastInfo>Character:{character }</CastInfo>
                    </CastItem>
                ))}
            </CastList>
        </div>
    )
}

export default Cast;