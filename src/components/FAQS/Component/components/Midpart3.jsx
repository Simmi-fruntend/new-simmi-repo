import React,{useState} from 'react'
import classes from '../CSS/Midpart3.module.css';
import PropTypes from 'prop-types';
import { faqdata } from './faqdata';
import {Box,  Typography,Tabs,Tab,} from '@mui/material'
import twitter from '../../Assest/twitter.png'
import insta from '../../Assest/insta.png'
import facebook from '../../Assest/facebook.png'
function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.children}>
          <Typography>{children}</Typography>
          <Box sx={{mt:'50px',display:'flex',flexDirection:'column'}}>
            <Box component='div' className={classes.imgicon}>
              <img src={twitter} alt='twitter'/>
              <img src={insta} alt='insta'/>
              <img src={facebook} alt='facebook'/>
            </Box>
            <Box component='div' className={classes.linediv}>

            </Box>
            <Box component='div' className={classes.heading}>
            Hope we can keep you enlighted
            </Box>
            <Box component='div' className={classes.buttons}>
            <Box component='button' className={classes.yes}>
                Yes
              </Box>
              <Box component='button' className={classes.no}>
                No
              </Box>
            </Box>
            <Box component='div' className={classes.details}>
            46 out of 50 found this useful
            </Box>
            <Box component='div' className={classes.detailsline}></Box>
             <Box component='div' className={classes.userhelp}>
             Not found your query? Let us know
             </Box>
             <textarea className={classes.quesinput} />
             <Box component='div' className={classes.responsetime} >
              Your queries will be resolved within 72 hours
              </Box>
              <Box component='button' className={classes.submitButton}>
                Submit
              </Box>
            
          </Box>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Midpart3 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [tabid,setTabid] = useState(0);
  const buttonhandler = (e,ind)=>{
    setTabid(ind);
    console.log(ind)
  }

  return (
    <div className={classes.maindiv}>
      <div className={classes.div1}>
      Articles in this section
      </div>
      <div className={classes.div2}>
      <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex'}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"

        
        sx={{ borderRight: 1, borderColor: 'divider',width:'456px',backGroundColor :'#FFAB40',}}
      >{
        faqdata.map((data,ind)=>{
          return(
            <Tab  label={data.question} {...a11yProps(ind)} key={ind} sx={{mt:2,mb:3}} onClick={e=>{buttonhandler(e,ind)}}  className={tabid === ind?classes.tabBg: ''}/>
          )
        } )
      }
       
      </Tabs>{
        faqdata.map((data,ind)=>{
          return(
            <>
             <TabPanel value={value} index={ind}>
              <div key={ind}  className={classes.chileques}>
                {data.question}
              </div>
           <div key='ind' className={classes.ans}>
            {
              data.answer
            }
           </div>
            </TabPanel>
            
            </>
           
          )
        }
        
        )
        
      }
      <br/>
    
    </Box>
      </div>
    </div>
  )
}

export default Midpart3