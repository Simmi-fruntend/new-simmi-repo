import React from 'react'
import classes from '../CSS/OurTeam.module.css';
import img1 from '../Assests/pourse.png'
import { TeamData } from './TeamData'; 
import {Grid,Box, Item} from '@mui/material'
const OurTeam = () => {
  return (
    <div className={classes.maindiv}>

      <div className={classes.ourteam}>
        Meat Our <span>Team</span>
      </div>
      <div className={classes.teams}>
        <div className={classes.buttonteam}>
            <div  className={classes.buttonchild}>
              <div className={classes.text}>Core</div>
              <img src={img1}  alt='img'/>

            </div>
         


        </div>
        <div className={classes.teamdata}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {TeamData.map((item, index) =>{
          return (
            <Grid item xs={2} sm={4} md={4} key={index}>
            <div>
              <img src={item.img} alt='img'/>
              <div className={classes.name}>{item.name}</div>
              <div className={classes.designation}>
                <div calssName={classes.text}>{item.designation}
                </div></div>
          </div>
          </Grid>
          )

        })
          // <Grid item xs={2} sm={4} md={4} key={index}>
          //   <Item>xs=2</Item>
          // </Grid>
        }
      </Grid>
    </Box>

        </div>

      </div>
    </div>
  )
}

export default OurTeam