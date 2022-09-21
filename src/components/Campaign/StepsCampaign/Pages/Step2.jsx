
import { Box, Typography, Grid,Tab } from '@mui/material'
import{ React,useState} from 'react'
import classes from '../CSS/step1.module.css';
import logo from '../../../Authentication/Assets/logo.png';
import MedicalFromBox from './MedicalFromBox';
import FormStep2 from './FormStep2';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import grid2image from '../Images/Grid2.png';
const Step2 = () => {
  let ActualData = localStorage.getItem('ActualData')
  let ActualDataObj = JSON.parse(ActualData, undefined, 4)
  console.log(ActualDataObj);
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (

    <Box component='div' className={classes.mainBox} >
      <Box component='div' className={classes.logoBox}>
        <img src={logo} alt='logo' className={classes.logo} />
        <Box component='div' className={classes.titleBox}>
          <Typography variant='h4' className={classes.logoText}>
            Start your fundraiser now with 0% platform charge and help people with SIMMI FOUNDATION
          </Typography>
        </Box>


      </Box>
      <Box component='div' className={classes.typosbox}>
        <Typography variant='h5' className={classes.typo1}>
          Welcome
        </Typography>
        <Typography className={classes.typo2} variant='h5'>
          eVidyaloka Trust
        </Typography>
      </Box>
      <Box component = 'div' className = {classes.introBox} >
        <Typography className ={classes.introText} variant='h4'>
        Totally we are together in this mission, still, kindly fill out
         the form so no one can misuse the people's trust in us (:
        </Typography>
        <Typography className={classes.step} variant = 'h5'>
          Step 2
        </Typography>
      </Box>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Box sx={{ width: '100%', typography: 'body1' ,mt:'50px',ml:'50px'}}>

      <FormStep2 />
    </Box>
  </Grid>
  <Grid item xs={6}>
    <Box>
          <img src={grid2image} alt='cover' className={classes.imagegrid}/>
    </Box>
  </Grid>
 
</Grid>
    

    </Box>

  )
}



export default Step2