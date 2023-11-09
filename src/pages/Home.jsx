import {useEffect,useState} from "react"
import axios from "axios"
import Header from "../assets/components/Header"
import Hero from "../assets/components/Hero";

const Home = ()=>{

const [data,setData]= useState()
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

<main>
    <div className="container description">
       {data.offers.map((elem)=>{
            return <article key={elem._id}>       
                <div className="author">
                  <img src={elem.owner.account.avatar.secure_url} alt="" />
                  <span>{elem.owner.account.username}</span>
                </div>
                <img src={elem.product_image.secure_url} alt="" className="main-pic"/>
                <div className="details">
                    <p>{elem.product_price} €</p>
                    {elem.product_details.map((item)=>{
                        // console.log(item);
                        return <div className="more-details" key={item._id}>
                            <p>{item.MARQUE}</p>
                            <p>{item.TAILLE}</p>                           
                        </div>
                    })}
                </div>              
            </article>
       })}
    </div>
</main>


</>

)};

export default Home