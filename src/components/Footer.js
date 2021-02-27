import React, { Component } from 'react' 

class Footer extends Component {
    render() {
        return (
            <>
            <div className="footer" style={{padding:'20px' , margin:'10px' , height:'auto'}}>

                <div className="col-sm-12 col-md-6 col-lg-6" >
                    <div style={{width:'80%' , margin:'0 auto' , fontSize:'20px'}}>
                        <h1 style={{fontFamily: 'Dancing Script, cursive'}}>Feel free to contact </h1>
                        <p className="glyphicon glyphicon-home"> : Lohardaga Jharkhand 835308 </p> <br/>
                        <p className="glyphicon glyphicon-envelope"> : ritikadey7890@gmail.com</p> <br/>
                        <p className="glyphicon glyphicon-phone-alt"> : 0000000000</p>
                    
                        <div style={{ width:'80%' , margin:'10px auto', fontSize:'28px' , display:'inline-block'}}>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-instagram" style={{marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fa fa-github" style={{marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fa fa-google" style={{marginLeft:'10px'}}></i></a>
                            <a href="#"><i className="fa fa-twitter" style={{marginLeft:'10px'}}></i></a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6" style={{backgroundColor:'rgba(0,0,0,0.7)' , color:'white' , marginBottom:'10px'}}>
                    <form style={{padding:'20px' , margin:'10px'}}>
                        <label htmlFor ="name"> Name : </label>
                        <input className="form-control" id="name" type="text" name="name" placeholder="Enter Your Name Here" />

                        <label htmlFor ="email"> E-mail : </label>
                        <input className="form-control" id="email" name="email" type="text" placeholder="Enter Your Email here" />

                        <label htmlFor ="text"> Message :</label> <br/>
                        <textarea className="form-control" id="text" name="contactus" style={{marginBottom:'10px'}}></textarea>

                        <button type="submit" className="btn btn-primary">Send</button>
                    </form>
                </div>
            </div>
 
            </>
        )
    }
}

export default Footer
