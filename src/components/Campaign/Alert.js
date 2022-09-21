import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import{Box,CssBaseline} from '@mui/material'
const Alertcmp = () => {
  return (
    <>


    <Box sx={{ width: '100%',height:'75px', }} >
      <Alert onClose={() => {}} sx={{backgroundColor:'#FFFACB', height:'73px' }} >Your Found is Raised!!</Alert>
    </Box>
  
    </>
  )
}

export default Alertcmp;