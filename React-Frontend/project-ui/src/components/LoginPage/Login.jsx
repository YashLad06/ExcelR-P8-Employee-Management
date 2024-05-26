import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const user = {
        loginMail: email,
        loginPassword: password
    };

    const navigateToPage = useNavigate();

    const handleLogin = () => {
        // Implement login logic here

        if (email === null || email === "" || password === null || password === "") {
            console.log("Please Enter credentials");
            alert("Please Enter credentials");
        }

        else if (email === "super.user.admin1@yopmail.com" && password != null) {
            console.log('Login clicked:', user);
            navigateToPage("/admin");
        }

        else if (email === "employee1@yopmail.com") {
            console.log('Login clicked:', user);
            navigateToPage("/all-employees");
        }

        else if (email === "hr.user1@yopmail.com") {
            console.log('Login clicked:', user);
            navigateToPage("/hr");
        }

        else if (email === "finance.user1@yopmail.com") {
            console.log('Login clicked:', user);
            navigateToPage("/finance");
        }

        else {
            console.warn("Invalid Username or Password");
            alert(
                "Either your Username or Password is invalid.\nPlease contact Admin");
        }

    };

    // const GoToAdmin = () => {
    //     navigateToPage("/admin");
    // }

    return (
        <>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form action="">
                            <h2>Peacock Pixels</h2>
                            <div className="input-box">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* <ion-icon name="mail-outline"></ion-icon> */}
                            </div>

                            <div className="input-box">
                                <label htmlFor="email">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* <ion-icon name="eye-off-outline"></ion-icon> */}
                            </div>

                            <div className="forget">
                                <label htmlFor="">
                                    <span className='text-light'>
                                        <input type="checkbox" />Remember Me
                                    </span>
                                    <a href="#">Forgot password</a>
                                </label>
                            </div>
                            <div className="center-btn">
                                <Button 
                                    variant="contained"
                                    endIcon={<SendIcon />}
                                    onClick={handleLogin}
                                sx= {{
                                    width: '100%',
                                    height: '40px',
                                    borderRadius: '40px',
                                    background: '#fff',
                                    color: '#242424',
                                    outline: 'none',
                                    border: 'none',
                                    fontSize: '1em',
                                    fontWeight: '600',
                                    cursor: 'pointer',
                                    textTransform: 'capitalize',
                                    '&:hover': {
                                        background: '#d3d3d3', // replace with your desired hover color
                                    },
                                }}
                                >Login</Button>
                            </div>

                            <div className="register">
                                <label htmlFor="">
                                    Don't have an account
                                    <a href="#">Register</a>
                                </label>
                            </div>

                        </form>

                        {/* <button onClick={GoToAdmin}>Admin</button> */}
                    </div>
                </div>
            </section>
            {/* Working Code ends here ============== */}

        </>
    );
}

export default Login;
