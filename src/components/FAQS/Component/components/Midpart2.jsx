import { React, useState } from 'react'
import classes from '../CSS/Midpart2.module.css';
import { faqdata } from './faqdata';
import { CardContent, CardActions, Collapse } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import QuestionAnswer from './QuestionAnswer';
import { Box } from '@mui/system';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';




// const ReadMore = ({ children }) => {
//   const text = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <div className="text">

//       {isReadMore ? text.slice(0, 4) : text}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </div>
//   );
// };

// console.log(faqdata)

const Midpart2 = () => {
 const [isReadMore, setIsReadMore] = useState(true);
 const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
 const  [limit , setLimit]  = useState(5)
 const onClickhandle =()=>{
  setLimit(9);
  toggleReadMore();
  if(!isReadMore){
    setLimit(5)
  }

 }

//  const handleShowLess =()={
//   setLimit(5);
//  }
  return (
    <div >
     {
      faqdata.map((data,ind)=>{
        
        if(ind < limit){
        return(
          <div key = {data.id}> 
          <QuestionAnswer answer = {data.answer} question ={data.question} />
        </div>
        ) 
        }else if(ind === limit){
          return(
            <Box component ='button' onClick={onClickhandle}> {isReadMore ? "...read more" : " show less"}</Box>
          )
        }
        // else if(ind === limit){
        //   return <Box component ='button' onClick={handleShowLess}>See All Articles</Box> 
        // }
      })
     }
    </div>
  )
}

export default Midpart2