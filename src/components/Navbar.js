import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">MyBookStore</a>
                  </div>
                  <form className="navbar-form navbar-left" action="#">
                     <div className="input-group">
                       <input type="text" className="form-control" placeholder="Search" /> 
                       <div className="input-group-btn">
                         <button type="submit" className="btn btn-default">
                           <i className="glyphicon glyphicon-search"></i>
                         </button>
                       </div>
                     </div>
                  </form>
                  <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#" className="glyphicon glyphicon-home"> Home</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-user"> SignIn </span></a></li>
                        <li><a href="#"><span className="glyphicon"> &#xe116; Cart</span></a></li>
                    </ul>
                  </div>
                  
              </div>
            </nav>
        </div>
    )
}

export default Navbar
