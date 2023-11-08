import {useEffect,useState} from "react"
import axios from "axios"
import Header from "../assets/components/Header"
import Hero from "../assets/components/Hero";

const Home = ()=>{

const [data,setData]= useState({})
const[isLoading, setIsLoading]= useState(true)

useEffect(()=>{
    const fetchData = async ()=>{
        
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers")
            // console.log(response.data);
            setData(response.data)
            setIsLoading(false)
       
    };
    fetchData()
},[])

return isLoading? <p>Chargement en cours</p> : (

<>

<Header/>
<Hero/>

<main></main>


</>

)};

export default Home