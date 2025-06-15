import { useEffect } from "react";
import { useState } from "react";
import styles from './fooddetails.module.css'


export default function FoodDetails({ foodId }) {
  const API_KEY = "83d04b585c99420da81fdb931ba58623";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;

  const [food, setFood] = useState({})
    const [isLoading, setIsLoading]= useState(true);

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setFood(data)
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }

    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.mainContainer}>
      <div className="foodTitle">
         <h1 className={styles.foodName}>{food.title}</h1>
         <img className={styles.recipeImage} src={food.image} alt="" />
    <div className={styles.recipeDetails}>
      <span>
        <strong> Prep Time: {food.readyInMinutes} min 🕛</strong>
      </span>
      <span>
        {food.vegetarian?"vegetarian 🫛🥕🍄‍🟫": "Non-vegetarian 🥩🍗"}
      </span>
      <span>
         👩‍👧‍👦 serves :  {food.servings} people
      </span>
      </div>
      <div>
      <span>
        💵💳 Price per serving: NRS. {food.pricePerServing} 
      </span>
</div>
<h2>REquired Ingredients 
{food.extendedIngredients.map((item)=>
<div>

<img src={`https://spoonacular.com/cdn/ingredients_100x100/`+item.image} alt="" />
<h3>{item.name}</h3>
  <h3>{item.amount}  {item.unit} </h3>

</div>

)}

</h2>



<h2>  Instructions:</h2>

<div className={styles.recipeInstruction}>
      <ol>
    {isLoading?( <p> Loading...</p> ): (food.analyzedInstructions[0].steps.map ((step)=>
 <li>{step.step} </li>
    ))

   }'</ol>'
</div>
  </div>

    </div>
  );
}
