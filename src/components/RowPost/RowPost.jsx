import React,{useState,useEffect} from 'react';
import youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';
const RowPost = (props) => {
const [movies,setMovies]=useState([]);
const [urlId,setUrlId]=useState('')

    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            // alert("Network Error")
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      const handleMovieTrailer=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?language=en-US';&api_key=${API_KEY}`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Array empty');
                
            }
            
        })
      }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
               {movies.map((obj)=>
                    <img onClick={()=>handleMovieTrailer(obj.id)} className={props.isSmall ?'smallPoster': 'poster'} alt="poster" src={`${imageUrl+obj.backdrop_path}`}/>
               )}
            </div>
           {urlId && <YouTube opts={opts} videoId={urlId.key}/>} 
        </div>
    );
}

export default RowPost;
