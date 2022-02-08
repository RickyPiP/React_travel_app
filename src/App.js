import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Planet from "./components/PlanetLogo"
import data from "./data"



function App() {
  const cards = data.map((item) => {
    return (
      <Card 
      item={item} />
    )
  })
 
  console.log(cards)
  return (
    <>
    <Header> <Planet /> my travel journal. </Header>
    <div className="container-sm max-w-xl mx-auto">
      <div className="py-2">{cards[0]}</div>
      <div className="border-t border-grey-500 py-2">{cards[1]}</div>
      <div className="py-2 border-t border-grey-500">{cards[2]}</div>
    </div>
    </>
  )
}



export default App




