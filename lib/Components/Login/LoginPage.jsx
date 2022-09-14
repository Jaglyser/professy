import next from 'next'
import classes from './LoginPage.module.css'
import Image from "next/image";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginPage = () => {

    return (
    <div className={classes.main}>
        <div className={classes.loginbox}>
            <div className={classes.logo}><Image height={70} width={210} src="/Images/proffesy.png" /></div>
            <div className={classes.text}>Proffesy delivers a nice text about what we do and and why you should use our product</div>
            <div className={classes.logintext}>LOG IN</div> 
            <div className={classes.input}>
                <TextField className={classes.textfield}
                    id="username-input"
                    label="Username"
                    type="username"
                    autoComplete="current-username"
                    size="small"
                    />
            </div>
            <div className={classes.input}>
                <TextField className={classes.textfield}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    />

            </div>
            <div className={classes.loginbutton}>
                <Button variant="contained" color="success">Login</Button>
            </div>
            <div className={classes.contact}>
                <p>Contact us for more information</p>
                <p>contact@proffesy.com</p>
            </div> 
        </div> 
    </div>
    )
}