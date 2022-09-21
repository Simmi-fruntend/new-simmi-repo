import React from 'react'
import Card1 from './Card1'
import classes from '../CSS/Cards.module.css';
import {CardImage} from './CardImages'
const Cards = () => {
  return (
    <div className={classes.cards}>
        <Card1 img = {CardImage[0].img} head = {CardImage[0].heading}/>
        <Card1 img = {CardImage[1].img} head = {CardImage[1].heading}/>
        <Card1 img = {CardImage[2].img} head = {CardImage[2].heading}/>
        <Card1 img = {CardImage[3].img} head = {CardImage[3].heading}/>
    </div>
  )
}

export default Cards