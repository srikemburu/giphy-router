import axios from "axios"

const RANDOM_URL = `https://api.giphy.com/v1/gifs/random?api_key=jUpWYSLvhqkkjw71MskI7bb9Y2UHAYkG`

export function getRandom(){
    const response = axios.get(RANDOM_URL)
    console.log(response)
    return response

}

const TRENDING_URL = `https://api.giphy.com/v1/gifs/trending?api_key=jUpWYSLvhqkkjw71MskI7bb9Y2UHAYkG`

export function getTrending(){
    const response = axios.get(TRENDING_URL)
    console.log(response)
    return response

}