import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import java from "../assets/java.svg"
import { CreateCard } from "./CreateCard";
import {Shuffle} from "./Shuffle"
import postman from "../assets/postman.svg"
import Vue from "../assets/vuejs-icon.svg"

import "./tablero.css"


const ArrayInfoCards = [
    {
    value:"React",
   img:reactLogo
   },
   {
    value:"Java",
    img:java
   },{
    
    value:"postman",
    img:postman
   },{
    
    value:"Vue",
    img:Vue
   }

]



export const Tablero = () => {

  const[ cards,setCards] = useState(Shuffle(ArrayInfoCards))

  const [comparar,setComparar] = useState([])

  const handleClick = (ind)=>{
    // console.log(ArrayInfoCards[ind].value)
    // console.log(`indice: ${ind} / valor de card: ${cards[ind].value}`)

// debugger
 if(comparar.length <1) {setComparar([{
    indice:ind,
    valor:cards[ind].value
  }])
 }
// console.log(comparar)

 if( comparar.length == 1 && ind != comparar.indice){
 console.log("gabbi")
  console.log(comparar.valor)
  console.log(cards[ind].value)


    if(comparar.valor == cards[ind].value){
      alert ("bien pibe")
    }else{
      alert("le pifiaste")
    }

 }
    // if(comparar.length < 2 ) {
    //   console.log(ind)
    //   setComparar([...comparar,cards[ind].value])

    // }
    
    

  }

  console.log(comparar)
  return (
    <div className='Tablero'>
            {cards.map((info,ind)=>(
               <CreateCard obj={info} ind={ind} func={ ()=> handleClick(ind)} ></CreateCard> 
            ))}
            
    </div>
  )
}
