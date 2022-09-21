import { Box,Grid, Typography, Stack, Avatar} from '@mui/material'
import React from 'react'
import classes from './storysupport.module.css'
import TextEditor from './TextEditor';

const Story_support = () => {
  let a= 100;
  return (

    <Box sx={{ width: '100%', mt: '50px' ,ml:'37px'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} >
        <Box className={classes.broderline}>
          <Box  className={classes.textbox}>
            <Typography className={classes.text}>
            "When I look at my child's innocent face, I feel guilty. He is so little even to understand anything, and all he has experienced in these two months is intense pain. I can't even feed my child any milk! Why has Allah punished me this way? I wish there were a way for me to my child's pain away
 these two months is intense pain. I can't even feed my child any milk! Why has Allah punished me ...
            </Typography>
          </Box>
          <Box  component= 'button' className={classes.readmoreButton}>
          <Typography >
            Read more
          </Typography>
          </Box>

        </Box>
        </Grid>
        <Grid item xs={6} >
          <Box className={classes.broderline}>
            <Box component='div' className={classes.grid2div} direcction='column' spacing={2} >
              <Box component='div' className={classes.grid2div1}>

                <Avatar className={classes.avatardiv}>A</Avatar>
                <Typography className={classes.nametypo} >Abhijit</Typography>
                <Box component='div' className={classes.boxtypo1}>
                <Typography className={classes.nametypo1}> INR {a} </Typography>
                </Box>
                
                
              </Box>
              <Box component='div' className={classes.grid2div1}>

                <Avatar className={classes.avatardiv}>A</Avatar>
                <Typography className={classes.nametypo} >Abhijit</Typography>
                <Box component='div' className={classes.boxtypo1}>
                <Typography className={classes.nametypo1}> INR {a} </Typography>
                </Box>
                
                
              </Box>
              <Box component='div' className={classes.grid2div1} >

                <Avatar className={classes.avatardiv}>A</Avatar>
                <Typography className={classes.nametypo} >Abhijit</Typography>
                <Box component='div' className={classes.boxtypo1}>
                <Typography className={classes.nametypo1}> INR {a} </Typography>
                </Box>
                
                
              </Box>
              <Box component='button' className={classes.showmore} >

             <Typography variant='h6' className={classes.shomoretypo} >View all supporters</Typography>
                
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.griditem2box}>
          <Box className={classes.griditem2typosdiv}>
            <Typography className={classes.griditem2typos1}>
              Post and Updates
            </Typography>
            <Typography className={classes.griditem2typos2}>
              Updates
            </Typography>
            <Typography className={classes.griditem2typos3}>2</Typography>
          </Box>
          <Box className={classes.editorline}>
            
          </Box>
          <Box className={classes.texteditor}>
          <TextEditor/>
          </Box>
          <Box className={classes.supportingDocs}>
            <Typography variant='h4'>
            Supporting Documents
            </Typography>
          
          </Box>
          <Box className={classes.editorline}>
            
          </Box>
          <Box className={classes.inntro}>
            <Typography className={classes.inntrotype}>
            Add Supporting documents (e. g medical estimate,hospital letters, bills invoices etc) to make fund more trustworrthy.
            </Typography>

          </Box>

        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box>2</Box>
        </Grid>
      </Grid>
    </Box>

  )
}

export default Story_support