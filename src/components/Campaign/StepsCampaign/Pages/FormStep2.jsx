import { React, useState } from 'react'
import { convertToHTML } from 'draft-convert';
import '../../TextEditor.css'
import axios from 'axios'
// import { Markup } from 'interweave';
import DOMPurify from 'dompurify';
import { EditorState ,ContentState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import MUIRichTextEditor from "mui-rte";
import { Box, TextField, Autocomplete, Typography, FormControlLabel, Checkbox, ToggleButtonGroup, ToggleButton } from '@mui/material'
import classes from '../CSS/step1.module.css';
import individual from '../Images/individual.png'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { FileUploader } from "react-drag-drop-files";
import TextEditor from '../../TextEditor'
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';
const fileTypes = ["JPG", "PNG"];
const FormStep2 = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const [file1, setFile1] = useState(null);
  const handleChange1 = (file1) => {
    setFile1(file1);
  };
// console.log(file)
// console.log(file1)
  
  const save = (data) => {
    console.log(data);
  };
  const [value, setValue] = useState('');
 
  const handleChangeEditor = (data)=>{
    setValue(data);
  }
  const myTheme = createTheme({
    // Set up your custom MUI theme here
  });
  const headers = { 
    'Content-Type':'multipart/form-data',
    'Authorization': 'Bearer ' + localStorage.getItem('apitoken') 
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('button is clicked');
    let ActualData = localStorage.getItem('ActualData')
    let ActualDataObj = JSON.parse(ActualData, undefined, 4)
    // console.log(ActualDataObj);
    const data = new FormData(e.currentTarget);
    const ActualData1 = {
      title: data.get('title'),
      aim: data.get('aim'),
      end_date : data.get('date'),
      main_pic:data.get('file1'),
      cover_photo:data.get('file2'),
      story: storyE,
      checkbox : data.get('checkbox'),
      //current_amount_raised
    }

  const actualAllData = {...ActualDataObj,...ActualData1}
  // console.log(data)
console.log(actualAllData);
// console.log(actualAllData.main_pic);
// console.log(actualAllData.cover_pic);
if(actualAllData){
  axios.post('http://127.0.0.1:8000/api/campaigns/create/',actualAllData,{headers})
  .then(res =>{
    alert(res.data.msg);
    navigate('/campaign',{state:{formData:actualAllData}});
  }).catch(err=>{
    console.log(err);
  })
}
localStorage.clear();
  }
 
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  var realcontent = createMarkup(convertedContent)
  // console.log(realcontent.__html);
  // const raw = convertToRaw(realcontent);
  // console.log(realcontent);
// var divv = document.querySelector('.preview p')
//   console.log(divv);
  // const dd = document.getElementById('editor');
  // console.log(dd);

  const  convertToPlain = (html)=>{

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element 
    return tempDivElement.textContent || tempDivElement.innerText || "";
}

const storyE = convertToPlain(realcontent.__html);

// var cont = document.getElementById('content')
// console.log(cont);

  return (
    <Box component='form' className={classes.formBox} onSubmit={handleSubmit} >


      <TextField required fullWidth id='title' name='title' label='Title of Fundraiser' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />

      <TextField required fullWidth id='aim' name='aim' label='Aim in rupees' type='number' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />
      <TextField required fullWidth id='date' name='date' label='' type='date' className={classes.textfield} sx={{ mt: 1, mb: 1 }} />


     
      <Box component='div' className={classes.mainpicdiv}>
        <Box component='div' className={classes.subpic1}>
          <Typography variant='h5' className={classes.sub1pic}>
            Main Picture
          </Typography>
          <Typography variant='h6' className={classes.sub1pic}>
            Max size 200px and file type jpg/png
          </Typography>
          <Box component='div' className={classes.upload}>
            <Box component='div' >

              <FileUploader
                multiple={true}
                handleChange={handleChange}
                name="file1"
                types={fileTypes}
              />
              {/* <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    multiple
                /> */}
              <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
            </Box>

          </Box>

        </Box>
        <Box component='div' className={classes.subpic}>
          <Typography variant='h5' className={classes.sub1pic}>
            Main Picture
          </Typography>
          <Typography variant='h6' className={classes.sub1pic}>
            Max size 200px and file type jpg/png
          </Typography>
          <Box component='div' className={classes.upload}>
            <Box component='div' >

              <FileUploader
                multiple={true}
                handleChange={handleChange1}
                name="file2"
                types={fileTypes}

              />
              <p>{file1 ? `File name: ${file1[0].name}` : "no files uploaded yet"}</p>
            </Box>

          </Box>

        </Box>

      </Box>
      <Box component='div' className={classes.texteditor}>
      <div className="App">
      <header className="App-header">
     Wrtite Your Short Story
      </header>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        id='editor'
      />
      {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)} id='content'></div> */}
    </div>
    {/* <Markup content={realcontent.__html}  id ="content"/> */}
    {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)} id='content'></div> */}
        </Box>
      <Box component='div' className={classes.checkBox}>
        <FormControlLabel name='checkbox' control={<Checkbox />} label="I agree with the Terms of Use,  thereby the authenticity, usage, and safety of information shared with & by ImpactGuru" />
      </Box>
      <Box component='button' className={classes.button} type='submit' >
        <Typography variant='h5'>
          Submit 
        </Typography>

      </Box>

    </Box>
  )
}



export default FormStep2;