import { Box, Typography, TextField, Alert } from '@mui/material'
import { React, useState } from 'react'
import pic1 from '../Assets/pic1.png'
import pic2 from '../Assets/pic2.png'
import logo from '../Assets/logo.png'
import classes from '../css/ResetPassword.module.css';
import axios from 'axios';
const SendEmailLink = () => {

    const [error, setError] = useState({
        status: false,
        msg: '',
        type: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const actualData = {
            email: data.get('email')
        }
        console.log(actualData);
        if (actualData.email) {
            axios.post('http://127.0.0.1:8000/api/user/send-reset-password-email/', actualData)
                .then(res => {
                    console.log(res);
                    setError({
                        status: true,
                        msg: res.data.msg,
                        type: 'success'
                    })
                }).catch(err => {
                    console.log(err.response.data);
                    setError({
                        status: true,
                        msg: 'Some thing went wrong in server',
                        type: 'error'
                    })
                })
        }else{
                setError({
                    status: true,
                    msg: 'Please enter your email',
                    type: 'error'
                })
        }
     
    }
    return (
        <Box component='div' className={classes.maindiv}>
            <Box component='div' className={classes.pic1div}>
                <img src={pic1} alt='cover' />
            </Box>
            <Box component='div' className={classes.childdiv}>
                <Box component='div' className={classes.logo}>
                    <img src={logo} alt='logo' />
                </Box>
                <Box component='div' className={classes.title}>
                    <Typography variant='h4' className={classes.titletypo}>
                        Forget Password?
                    </Typography>
                </Box>
                <Box component='div' className={classes.subtitle}>
                    <Typography variant='h7' className={classes.subtitletypo}>
                        Fill yur registred Email and reset password <br /> complete access to your account
                    </Typography>
                </Box>
                <Box component='form' id='reset-form' sx={{ mt: '56px' }} onSubmit={handleSubmit}>
                    <Typography varient='h6' component='h5'>
                        Registred Email
                    </Typography>
                    <TextField required fullWidth id='email' name='email' label='Email' className={classes.textfield} type='email' sx={{ mt: 2, mb: 2, width: '512px' }} />

                    <br />
                    <Box component='button' type='submit' className={classes.submitButton} sx={{ mt: 3 }}>
                        <Typography className={classes.typoButton}> Send Email </Typography>
                    </Box>
                    <br />
                    <Box component='div' sx={{ mt: 3 }}>
                        {error.status ? <Alert severity={error.type}>{error.msg} </Alert> : ''}
                    </Box>

                </Box>


            </Box>
            <Box component='div' className={classes.pic2div}>
                <img src={pic2} alt='cover' sx={{ width: '500px', height: '500px' }} />
            </Box>


        </Box>
    )
}

export default SendEmailLink;