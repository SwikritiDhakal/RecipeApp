import { useEffect, useState } from "react"
import styles from "./search.module.css"

const URL="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY= "83d04b585c99420da81fdb931ba58623"

export default function Search({foodData, setFoodData}){

    //useeffect is used to fetch data from api and make real time changes

    const [query, setQuery]= useState("pizza");

    //syntax of use-effect
    useEffect(()=>{
        async function fetchFood(){
              const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)

            const data= await res.json();
            console.log(data.results)
            setFoodData(data.results)

        }
        fetchFood();
    },[query])
    return(
<div className={styles.searchContainer}>
    <input   value={ query} onChange={(e)=>setQuery(e.target.value)}  type="text" />
</div>

    )
}