import React, { Component } from 'react'
import axios from 'axios'
import './style/signup.css' 
import Navbar from './Navbar'

export class SignUp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             nameError:'',
             email:'',
             emailError:'',
             phone:'',
             phoneError:'',
             password:'',
             passwordError:'',
        }
        
        this.changename= this.changename.bind(this)
        this.changeemail= this.changeemail.bind(this)
        this.changephone= this.changephone.bind(this)
        this.changepassword= this.changepassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
//  onchange functions
    changename(e){
      this.setState({
          name:e.target.value
      })
    }

    changeemail(e){
        this.setState({
            email:e.target.value
        })
    }

    changephone(e){
    this.setState({
        phone:e.target.value
    })
    }

    changepassword(e){
        this.setState({
            password:e.target.value
        })
    }

// form validation 

    validateUser = () => {
      let setError = false
      const errors ={}
      const phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
      const emailPattern =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

      if(this.state.name.length < 5 || this.state.name.length >20){
          this.state.nameError = "Username must have 5-20 characters..!!"
          setError=true
      }  

      if(!emailPattern.test(this.state.email)){
          this.state.emailError = "Enter valid email address..!!"
          setError = true
      }

      if(!phonePattern.test(this.state.phone)){
          this.state.phoneError = "Enter valid phone number"
          setError = true
      }
      if(!passwordPattern.test(this.state.password)){
          this.state.passwordError = "Password must contain 8-10 characters , at least one uppercase alphabet, one lowercase alphabet, one digit and one special character..!!"
           setError = true
        }
      return setError
    }

// onsubmit handler
    onSubmit(e) {
        e.preventDefault()

        const err = this.validateUser()
        if(!err){
        const dataSubmitted = {
            username : this.state.name,
            email:this.state.email,
            phone: this.state.phone,
            password: this.state.password
        }
 
        axios.post("http://localhost/app/signup", dataSubmitted)
        .then(res => console.log(res))
        .catch(err => console.log(err))

        this.setState({
            name:'',
            email:'',
            phone:'',
            password:''
        })
       }
       else{
           if(this.state.nameError.length>0) alert(`${this.state.nameError}`)
           if(this.state.emailError.length>0) alert(`${this.state.emailError}`)
           if(this.state.phoneError.length>0) alert(`${this.state.phoneError}`)
           if(this.state.passwordError.length>0) alert(`${this.state.passwordError}`)

           this.setState({
               nameError:'',
               passwordError:'',
               emailError:'',
               phoneError:''
           })
       }
    }

    render() {
        return (
            <div className="main">
            <Navbar />
            <div className="fluid-container">
                <form className="container signup" onSubmit={this.onSubmit}>
                <h2>SignUp || SignIn</h2>
                    <label htmlFor="username">UserName : </label>
                    < input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter your name" 
                        onChange={this.changename} 
                        value={this.state.name} 
                        required
                        style={{width:"85%" , marginBottom:"10px"}} /> 

                    <label htmlFor="email">Email : </label>
                    < input 
                        type="text" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter your email" 
                        onChange={this.changeemail} 
                        value={this.state.email} 
                        required
                        style={{width:"85%" , marginBottom:"10px"}} />

                    <label htmlFor="phone">Contact No. : </label>
                    < input 
                       type="text" 
                       className="form-control" 
                       id="phone" 
                       placeholder="Enter your contact number" 
                       onChange={this.changephone} 
                       value={this.state.phone} 
                       required
                       style={{width:"85%" , marginBottom:"10px"}} />

                    <label htmlFor="password">PassWord : </label>
                    < input 
                       type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Enter password" 
                       onChange={this.changepassword} 
                       value={this.state.password} 
                       required
                       style={{width:"85%" , marginBottom:"10px"}} />

                    <input type="submit" className="btn btn-primary" value="submit"/>
                </form>
            </div>
            </div>
        )
    }
}

export default SignUp
