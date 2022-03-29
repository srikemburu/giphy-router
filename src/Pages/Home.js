
import {getRandom} from '../services/getRequests'
import {useState, useEffect} from 'react'

export default function Home() {
    //save api response into state variable
    const [randomGif, setRandomGif] = useState([])

    useEffect(()=>{
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_still.url))
    },[])

    console.log(randomGif)

    function myHandleClick() {
        getRandom()
        .then(res => setRandomGif(res.data.data.images.downsized_still.url))
    }

    return (
    <div>
        <img src={randomGif} alt="" />
        <br/><br/>
        <button onClick={myHandleClick}>
         Get another Gif
        </button>
    </div>
  )
}
