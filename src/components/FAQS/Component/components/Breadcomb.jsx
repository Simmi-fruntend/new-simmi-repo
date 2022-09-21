import React from 'react'
import { Stack,Typography,Breadcrumbs ,Link} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcomb = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/register" >
          MUI
        </Link>,
        <Link
          underline="hover"
          key="2"
          color="inherit"
          href="/login"
         
        >
          Core
        </Link>,
        <Typography key="3" color="text.primary">
          Breadcrumb
        </Typography>,
      ];
  return (
   <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
   </Stack>
  )
}


 {/* <div key={faqdata.id}>{
          for(let i =0;i<10;i++)
            <QuestionAnswer answer = {faqdata[i].answer}/>
          // while(faqdata.id){

          // }
          // faqdata.map((data) => {
          //   return (
          //     <>

          //        {data.id && <div  key={data.id}>
          //     <QuestionAnswer question={data.question} answer={data.answer} />
          //   </div>} 
          //   {(data.id === 3) && (
          //    <Box component='button'>Read all articles</Box>
          //   )}
            
               
          //     </>
          //   )
          // })
        
        }
        </div> */}
export default Breadcomb