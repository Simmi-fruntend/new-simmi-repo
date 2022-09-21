import React from 'react'
import classes from '../CSS/Midpart.module.css';
import location from '../Assets/map.png';

const Midpart = () => {
    return (
        <div className={classes.root}>
            <div className={classes.rowchild1}>
                <div className={classes.mapdiv}>
                    <img src={location} alt="location" />
                </div>
                <div className={classes.deatails}>
                    <div className={classes.address}>
                        <div className={classes.addtext}>
                            Address:
                        </div>
                        <div className={classes.completeAdd}>
                            479, Baspadamka, <br />
                            Tehsil Pataudi, Gurugram, <br />
                            Haryana - 122503, <br />
                            India
                        </div>
                    </div>
                    <div className={classes.line}>

                    </div>
                    <div className={classes.contact}>
                        <div className={classes.emaillabel}>
                            Email
                        </div>
                        <div className={classes.email}>
                            support@simmifoundation.org
                        </div>
                        <div className={classes.phonelabel}>
                            Phone:
                        </div>
                        <div className={classes.phonenumber}>
                            (+91) 70152 - 95025
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.rowchild2}>
                <div className={classes.heading}>
                    Get in Touch
                </div>
                <div className={classes.question}>
                    Do you have any questions?<br />Feel free to contact to our team
                </div>
                <div className={classes.form}>
                    <form>
                        <label for="fname">Name:</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                        <label for="email">Email:</label><br />
                        <input type="email" id="email" name="email" /><br />
                        <label for="phone">Phone:</label><br />
                        <input type="number" id="phone" name="phone" /><br />
                        <label for = 'message'>Message</label><br/>
                        <textarea className={classes.quesinput} /><br />
                        <button type='submit'><span>Get in Touch</span></button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Midpart