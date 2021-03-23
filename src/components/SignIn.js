import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Navbar from './Navbar'
import './style/signup.css'

export class SignIn extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    changeemail(e){
        this.setState({
            email:e.target.value
        })
    }

    changepassword(e){
        this.setState({
            password:e.target.value
        })
    }

    
    render() {
        return (
            <div>
                <div className="main">
                    <Navbar/>
                    <div className="fluid-container"> 
                        <form className="container signup" onSubmit={this.onSubmit}>
                        <label htmlFor="email">Email : </label>
                            < input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email" 
                                onChange={this.changeemail} 
                                value={this.state.email} 
                                required
                                style={{width:"85%" , marginBottom:"10px"}}
                             />

                        <label htmlFor="password">PassWord : </label>
                            < input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enter password" 
                                onChange={this.changepassword} 
                                value={this.state.password} 
                                required
                                style={{width:"85%" , marginBottom:"10px"}} 
                            />

                            <input type="submit" className="register btn btn-primary" value="LogIn"/>
                        <p>New User ? <NavLink to="/signup">SignUp</NavLink></p>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
