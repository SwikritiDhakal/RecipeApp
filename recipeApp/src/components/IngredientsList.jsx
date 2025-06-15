import Item from "./Item";

export default function IngredientsList({food , isLoading}){
    return (
        <div>
                {isLoading?
(<p>"Loading data...."</p>) :
( food.extendedIngredients.map((item)=>
            <Item item={item}/>
            
            ))}
    
             
            
        </div>
    )
}