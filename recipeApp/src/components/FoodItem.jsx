import styles from "./foodItem.module.css";

export default function FoodItem({food, setFoodId})
{
    return (
        <div className={styles.item_container}>
            <img  className={styles.item_image} src={food.image} alt="" />
            <h1 className={styles.item_title}>{food.title}</h1>
            
            <div className={styles.bottomContainer}>
            <button onClick={()=>{
                console.log(food.id)
                setFoodId(food.id);

            }} className={styles.item_button}>View Recipe</button>
            </div>
        </div>
    )
}