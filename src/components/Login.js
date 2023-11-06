import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const credentials = {
    username: "sagun",
    password: "shrestha",
    token: "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98"
}

function Login(props) {
    const navigate = useNavigate()
    const [cred, setCred] = useState({
        username: '',
        password: '',
        token: ''
    })
    const [isOpen, setIsOpen] = useState(false)


    const handleChange = e => {
        setCred({
            ...cred,
            [e.target.name]: e.target.value
        })
    }
    const login = e => {
        e.preventDefault()
        if (cred.username === credentials.username && cred.password === credentials.password) {
            localStorage.setItem("token", credentials.token)
            navigate("/search")
        }
        else {
            setIsOpen(true)
        }
    }

    return (
        <div className='center'>

            <div className='login'>
                <h1>Login</h1>

                <form className='loginInputForm' onSubmit={login}>
                    <div className='loginInput'>
                        <input
                            type='text'
                            name='username'
                            placeholder='Username'
                            value={cred.username}
                            onChange={handleChange}
                        />
                        <input
                            type='text'
                            name='password'
                            placeholder='Password'
                            value={cred.password}
                            onChange={handleChange}
                        />
                    </div>
                    {isOpen && (<h4 className="wrong">Wrong Username/Password</h4>)}
                    <button className="loginButton">Login</button>
                    <div className="forgot" >Forgot <p className='forgot2'>Username/Password? </p></div>
                </form>
            </div>
        </div>
    )
}

export default Login;