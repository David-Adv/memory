import React from 'react'
import "./Cards.css"
import hide from "../assets/pregunta.webp"
import {useState} from 'react'

// import reactLogo from '../assets/react.svg'

export const CreateCard = ({obj,ind,func}) => {

  const [select,setSelect] = useState(false)

  const [cardsSelected,setcardsSelected] = useState([])

    const {id,value,img} = obj
    obj.hideImg = hide

    // console.log(ind)

  return (
    <div className='card' value={value} onClick={
      e=>{
        setSelect(!select)
       func(e)
                                                 
                                        
    }
    }>

        <img src={select ? img : hide} className='logo' alt={value} />

   </div>
  )
}
