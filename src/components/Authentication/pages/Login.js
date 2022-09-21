import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import { Grid, Box, Typography, TextField, Button, Alert, Link, FormControlLabel, Checkbox } from '@mui/material';
import logo from '../Assets/logo.png'
import coverImage from '../Assets/coverImage.jpg'
import classes from '../css/Login.module.css';
import googleIcon from '../Assets/google.svg';
import Cookies from 'js-cookie';



const clientId = "101154564786-02909v6m0f2tnoj4dppi901mpbl5oikp.apps.googleusercontent.com";
export const Login = () => {


    const onSuccess = (res) => {
        console.log("success", res.profileObj);
        localStorage.setItem('gemail', res.profileObj.email);
        localStorage.setItem('gname', res.profileObj.name);
        localStorage.setItem('gimg', res.profileObj.imageUrl);
        navigate('/');
        window.location.reload(true);
    }

    const onFailure = (res) => {
        console.log("FAIL", res);
    }

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    localStorage.setItem('islogin', login);
    // Cookies.set('islogin',login);
    console.log(login)


    // const functionnavigate = () =>{
    //     navigate('/home', {state:})
    // }
    const [error, setError] = useState({
        status: false,
        msg: '',
        type: '',
        // islogin: false,
    })
    const headers = {
        // 'Content-Type':'multipart/form-data',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('apitoken')
    };
    // console.log(localStorage.getItem('apitoken'));
    const [data, setData] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // console.log()
        const actualData = {

            email: data.get('email'),

            password: data.get('password'),

            tc: true

        }

        if (actualData.email && actualData.password && actualData.tc && login === false) {
            console.log(actualData)
            axios.post('http://127.0.0.1:8000/api/login/', actualData, { headers }).then(res => {
                console.log(res);
                console.log(res.data.id);
                if (res.data.id) {
                    localStorage.setItem("id", res.data.id)
                    // Cookies.set('id', res.data.id, { expires: 7 });
                }

                setLogin(true);
                setError({
                    status: true,
                    msg: res.data.msg,
                    type: 'success',
                    // islogin: true
                })

                setTimeout(() => {

                    navigate('/', { state: { user: res.data } })
                }, 3000)
                // localStorage.setItem('token',res.data.token);
                // localStorage.setItem('user',res.data.user_data)

            }).catch(err => {
                console.log(err);
                setError({
                    status: true,
                    msg: err.response.data.errors.non_field_errors[0],
                    type: 'error'
                })
            })
        } else {
            setError({
                status: true,
                msg: 'Please fill all the fields',
                type: 'error'

            })

        }

    }
    console.log(login);
    return (

        <Box sx={{ flexGrow: 1 }} className={classes.mainBox} >
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Box className={classes.grid1}>
                        <Box>
                            <img src={logo} alt='logo' className={classes.logo} />
                        </Box>
                        <Box className={classes.typobox1}>
                            <Typography component='h2'>
                                Welcome back
                            </Typography>
                        </Box>
                        <Box className={classes.typobox2}>

                            <Typography className={classes.typo2}>
                                Sign up & manage fundraisers, donations & more
                            </Typography>
                        </Box>
                        <Box className={classes.errorClass}>
                            {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ''}

                        </Box>
                        <Box component='form' noValidate className={classes.regform} id='register-form' sx={{ ml: '122px' }} onSubmit={handleSubmit}>

                            <Typography varient='h6' component='h5' className={classes.formtypos} >
                                Email/Phone-number
                            </Typography>
                            <TextField required fullWidth id='email' name='email' label='Your email address' className={classes.textfield} sx={{ mt: 2, mb: 2, width: '512px' }} />

                            <Typography varient='h6' component='h5' className={classes.formtypos}>
                                Password
                            </Typography>
                            <TextField required fullWidth id='password' name='password' label='Your password' className={classes.textfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />
                            <Box className={classes.checkboxlink}>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                                <Typography sx={{ mt: '10px', ml: '100px' }}>Forgot password? <Link href='/send-email-link'>reset password</Link></Typography>
                            </Box>

                            <Box component='button' type='submit' className={classes.submitButton} sx={{ mt: 3 }}>
                                <Typography className={classes.typoButton}> Login </Typography>
                            </Box>
                            {/* <Box component='button' className={classes.googleButton}  sx={{mt:3}}>
                                <img src={googleIcon} alt='' />
                                <Typography className={classes.googleTypo}>Sign up with Google </Typography>
                            </Box> */}
                            {/* <div className={classes.submitButton}> */}
                            {/* { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    // onSuccess={onLoginSuccess}
                    // onFailure={onLoginFailure}
                    // cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null} */}


                            <Box component='button' className={classes.googleButton} sx={{ mt: 3 }}>
                                {/* <Typography className={classes.googleTypo}>Sign up with Google </Typography> */}
                                {/* 
//  */}
                                <Typography className={classes.googleTypo}>
                                    <div id='SigninButton'>
                                        <GoogleLogin
                                            clientId={clientId}
                                            buttonText="Login"
                                            onSuccess={onSuccess}
                                            onFailure={onFailure}
                                            cookiePolicy={'single_host_origin'}
                                            isSignedIn={true}

                                        />

                                    </div>

                                    {/*  */}


                                </Typography>
                            </Box>

                            {/* </div> */}
                            <Box component='div' className={classes.googleButton}  >

                                <Typography className={classes.googleTypo}>Don't have account <Link href='/register'> Sign up free </Link></Typography>
                            </Box>


                        </Box>

                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.grid2} >
                        <Box component='div' >
                            <Box component='div' className={classes.grid2_child}>
                                <Box component='div' className={classes.grid_child_intro}>
                                    <Typography className={classes.grid_child_intro_typo}>
                                        “Good health and good sense are two of life’s greatest blessings.”
                                    </Typography>
                                </Box>
                                <Box className={classes.grid_child_intro_main}>

                                </Box>
                            </Box>

                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </Box>

    )
}
