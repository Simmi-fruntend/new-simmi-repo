import React from 'react'
import { Box, TextField, Autocomplete, Typography, FormControlLabel, Checkbox, ToggleButtonGroup, ToggleButton } from '@mui/material'
import classes from '../CSS/step1.module.css';
import individual from '../Images/individual.png'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

const MedicalFromBox = () => {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert('button is clicked');
    const data = new FormData(e.currentTarget);
    // data.append('name',)
    const ActualData = {
      
      category_tag: data.get('row-radio-buttons-group'),
      name: data.get('name'),
      email:data.get('email'),
      phone:data.get('phone'),
      relation: document.getElementById('combo-box').value,
      city: data.get('city'),
      raising_for: document.getElementById('combo-box-demo').value,
      checkbox: data.get('checkbox')


    }
    console.log(data);
    console.log(ActualData)
  let ActualDataJson = JSON.stringify(ActualData,undefined, 4 );
  localStorage.setItem('ActualData', ActualDataJson);
  navigate('./step2')

    
  }
 
  return (
    <Box component='form' className={classes.formBox} onSubmit={handleSubmit} >
    
       <FormControl>
      
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        
        <FormControlLabel value="Medical" control={<Radio />} label="Medical"  />
        
        
        <FormControlLabel value="Education" control={<Radio />} label="Education" />
        <FormControlLabel value="Food" control={<Radio />} label="Food" />
        <FormControlLabel
          value="NGO"
          
          control={<Radio />}
          label="NGO"
        />
        <FormControlLabel
          value="Others"
          
          control={<Radio />}
          label="Others"
        />
      </RadioGroup>
    </FormControl>
      <TextField required fullWidth id='name' name='name' label='Name' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />
      <TextField required fullWidth id='email' name='email' label='Email-id' type = 'email' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />
      <TextField required fullWidth id='phone' name='phone' label='Your phone number' type='number' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />
      <Autocomplete
        disablePortal
        name='relation'
        id="combo-box"
        options={top100Films}
        sx={{ mt: 1, mb: 1 }}
        renderInput={(params) => <TextField {...params} label="Your relation with the NGO" />}
      />
      <TextField required fullWidth id='city' name='city' label='City' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />
      <Box component='div' className={classes.declaration}>

        <Typography variant='h6' className={classes.declarationText}>
          I am raising fund for
        </Typography>


        <Box component='div' className={classes.dropdown}>
          <img src={individual} alt='individual' />
          <Autocomplete
            disablePortal
            name= 'usertype'
            id="combo-box-demo"
            sx={{ width: '600px' }}
            options={top100Films}

            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Box>

      </Box>
     
      <Box component='div' className={classes.checkBox}>
        <FormControlLabel name='checkbox' control={<Checkbox />} label="I agree with the Terms of Use,  thereby the authenticity, usage, and safety of information shared with & by ImpactGuru" />
      </Box>
      <Box component='button' className={classes.button} type='submit' >
        <Typography variant='h5'>
          Submit and Next
        </Typography>
      </Box>

    </Box>
  )
}
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 }
]



export default MedicalFromBox