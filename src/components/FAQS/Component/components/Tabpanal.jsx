import{ React, useState }from 'react'
import Midpart1 from './Midpart1';
import Midpart2 from './Midpart2';
import Midpart3 from './Midpart3';
import {Grid,Card,Typography,Tabs,Tab,Box} from '@mui/material'
const TabPanel = (props)=>{
    const {children,value,index} = props;
    return(
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>

        
    )
}

const Tabpanal = () => {

    const [value,setValue] = useState(0);
    const handleChange = (event,newValue) =>{
        setValue(newValue)
    }
  return (
    <Box >
                <Box sx={{borderBottom:1, borderColor:'divider'}}>
                   <Tabs  value={value} textColor='secondary' indicatorColor='secondary' onChange ={handleChange}>
                    <Tab label="Simmi Foundation" ></Tab>
                  
                    <Tab label="Top Quiries"></Tab>
                    <Tab label="General Quries"></Tab>
                    </Tabs> 
                     
                </Box>
                <TabPanel value={value} index = {0}> <Midpart1/> </TabPanel>
                <TabPanel value={value} index = {1}> <Midpart2/> </TabPanel>
                <TabPanel value={value} index = {2}> <Midpart3/> </TabPanel>
            </Box>
  )
}

export default Tabpanal