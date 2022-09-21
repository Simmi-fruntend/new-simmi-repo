import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid, Box, Typography, TextField, Button, Alert, Link } from '@mui/material';
import logo from '../Assets/logo.png'
import coverImage from '../Assets/coverImage.jpg'
import classes from '../css/Register.module.css';
import googleIcon from '../Assets/google.svg';
import { Login } from './Login.js';



export const Register = () => {


    // const navigate = useNavigate();
    const [error, setError] = useState({
        status: false,
        msg: '',
        type: ''
    })
    const headers = {
        'Content-Type': 'multipart/form-data',
        // Content-Type:'application/json',
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('apitoken')
    }
    console.log(localStorage.getItem('apitoken'));
    const [data, setData] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        // console.log()
        const actualData = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phoneNumber'),
            password: data.get('password'),
            Cpassword: data.get('confirmPassword'),


        }
        console.log(actualData)
        if (actualData.email && actualData.password) {
            axios.post('http://127.0.0.1:8000/api/register/', actualData, { headers }).then(res => {
                console.log(res.data);
                setError({
                    status: true,
                    msg: res.data.msg,
                    type: 'success'

                })

            }).catch(err => {
                console.log(err)
                if (err.response.status === 400) {
                    if (actualData.password !== actualData.Cpassword) {
                        setError({
                            status: true,
                            msg: 'Password does not match',
                            type: 'error'
                        })
                    }
                    setError({
                        status: true,
                        msg: err.response.data.errors.email[0],
                        type: 'error'
                    })
                }
            })
        }

    }
    return (
        <Box sx={{ flexGrow: 1 }} className={classes.mainBox} >
            <Grid container spacing={2} >
                <Grid item xs={6}>
                    <Box className={classes.grid1}>
                        <Box  >
                            <a href='/'>
                                <img src={logo} alt='logo' className={classes.logo} />
                            </a>

                        </Box>
                        <Box className={classes.typobox1}>
                            <Typography className={classes.typo1} variant='h4' component='h2'>
                                Create an account
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
                            <Typography varient='h6' component='h5' className={classes.formtypos} sx={{ mt: '45px' }}>
                                Name
                            </Typography>
                            <TextField required fullWidth id='name' name='name' label='Your name' className={classes.textfield} sx={{ mt: 2, mb: 2, width: '512px' }} />
                            <Typography varient='h6' component='h5' className={classes.formtypos} >
                                Email
                            </Typography>
                            <TextField required fullWidth id='email' name='email' label='Your email address' className={classes.textfield} sx={{ mt: 2, mb: 2, width: '512px' }} />
                            <Typography varient='h6' component='h5' className={classes.formtypos}>
                                Phone number
                            </Typography>
                            <TextField required fullWidth id='phoneNumber' name='phoneNumber' label='Your Phone number' className={classes.textfield} type='number' sx={{ mt: 2, mb: 2, width: '512px' }} />
                            <Typography varient='h6' component='h5' className={classes.formtypos}>
                                Password
                            </Typography>
                            <TextField required fullWidth id='password' name='password' label='Your password' className={classes.textfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />
                            <Typography varient='h6' component='h5' className={classes.formtypos}>
                                Confirm Password
                            </Typography>
                            <TextField required fullWidth id='confirmPassword' name='confirmPassword' label='Confirm Password' className={classes.lasttextfield} type='password' sx={{ mt: 2, mb: 2, width: '512px' }} />

                            <Box component='button' type='submit' className={classes.submitButton} sx={{ mt: 3 }}>
                                <Typography className={classes.typoButton} varient='h4' > Create account </Typography>
                            </Box>
                            <Box component='div' className={classes.googleButton} >

                                <Typography className={classes.googleTypo}>Already have an account? <Link href='./login' >Login</Link> </Typography>
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
