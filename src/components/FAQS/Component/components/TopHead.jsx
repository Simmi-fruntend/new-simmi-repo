import React from 'react'
import classes from '../CSS/Tophead.module.css';
import {Box,IconButton,TextField} from '@mui/material';
import pic1 from '../../Assest/pic1.png'
import SearchIcon from "@mui/icons-material/Search";
const TopHead = () => {
  return (
   <div className = {classes.topdiv}>
    <div className = {classes.imagediv}>
      <img src = {pic1} alt = 'pic1' className = {classes.image}/>
    </div>
    <div className={classes.searchboxtypo}>
      <div className = {classes.typo}>
      How can we help you?
      </div>
      <div className={classes.searchBox}>
        <button className={classes.search_button}>
      <IconButton type="submit" aria-label="search" className={classes.iconsearch}>
      <SearchIcon style={{ width:"28px",height:"28px",color:"#FF8C21" }} />
    </IconButton>
    <input type="text" placeholder="Search.." name="search" className={classes.textfieldserarch}/></button>
      </div>
    </div>
   </div>
    
  )
}

export default TopHead