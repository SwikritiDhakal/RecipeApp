import { useEffect } from "react";
import { useState } from "react";

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
    <div>
      <div>
         <h1>{food.title}</h1>
         <img src={food.image} alt="" />
      </div>
      <span>
        <strong> Prep Time: {food.readyInMinutes} min 🕛</strong>
      </span>
      <span>
        {food.vegetarian?"vegetarian 🫛🥕🍄‍🟫": "Non-vegetarian 🥩🍗"}
      </span>
      <span>
         👩‍👧‍👦 serves {food.servings}
      </span>
      <div>
      <span>
        💵💳 Price per serving: NRS. {food.pricePerServing} 
      </span>
</div>

<div>
      <h2>  Instructions:</h2>
    {isLoading?( <p> Loading...</p> ): (food.analyzedInstructions[0].steps.map ((step)=>
 <li>{step.step} </li>
    ))

   }
</div>


    </div>
  );
}
