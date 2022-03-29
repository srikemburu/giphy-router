
import {getTrending} from '../services/getRequests'
import {useState, useEffect} from 'react'

export default function Trending(){
    const [trendingGif, setTrendingGif] = useState([])

    useEffect(()=>{
        getTrending()
        .then(res => setTrendingGif(res.data.data))
    },[])

    console.log(trendingGif)

    return (
        <div>           
            <ul>
                {trendingGif.map(tGif => {
                    return <img src={tGif.images.downsized_still.url} alt="" />
                    // return <li key={tGif.images.downsized}>{tGif.images.downsized}</li>
                })}
            </ul>   
        </div>
      )
}