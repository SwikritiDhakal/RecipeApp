import { useState } from "react"
import Search from "./components/Search"
import FoodList from "./components/FoodList"
import Nav from "./components/Nav"
import './App.css'
import Container from "./components/Container"
import InnerContainer from "./components/InnerContainer"
import FoodDetail from "./components/FoodDetail"


function App() {
  const [foodData, setFoodData]= useState([])
  const [foodId, setFoodId]= useState("")


  return (
    <div className="App">
      <Nav/>
      <Search foodData={foodData} setFoodData={setFoodData}/>

      {/* this is the nested comp and when we have to access childern wecan  use children to renderdata*/}
      <Container>
        <InnerContainer> 
          <FoodList foodData={foodData} setFoodId={setFoodId} />
          </InnerContainer>
        <InnerContainer> 
          <FoodDetail foodId={foodId}/>
          </InnerContainer>
      
      </Container>
    </div>
  )
}

export default App
