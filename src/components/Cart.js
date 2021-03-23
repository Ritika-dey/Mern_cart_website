import React, { Component } from 'react'
import Navbar from './Navbar'
import './style/cart.css'
import {obj} from './Card'  
class Cart extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = {
             item:[]
        }
    }

    // for first time adding the items to cart
    componentDidMount(){
        this.setState({
            item : this.state.item.concat(obj)
        })
    }
    
    removeItem(id){  
        let i=0
        obj.map(item =>{
            if(item.id === id){
                obj.splice(i,1) 
                i+=1
            }
            else{
                i+=1
            }
        })
        // modification of state
        this.setState({
            item : obj
        })
    }

    render() {
        const result = this.state.item.map(item =>{
            return (
             <div className="container cartItem" key={item.id}>
                <div className="itemimg col-md-5 col-lg-5 col-sm-12 col-xs-12"> 
                    <img src={item.image}/>
                </div>
                <div className="itemdetail col-md-7 col-lg-7 col-sm-12 col-xs-12">
                    <h1>Title : {item.name}</h1>
                    <h2>Author : {item.author}</h2> 
                    <h2>Price :  <i className="fa fa-rupee"></i>{item.price}</h2>
                    <button className="btn btn-danger" onClick={this.removeItem.bind(this , item.id)}>Remove</button>
                </div>
             </div>
         )}
        )
        // total amount
        const totalAmount = this.state.item.reduce((prev, item) => {
            return prev + item.price;
        },0)

        return (
             <>
             <Navbar />
             <div className="container" style={{height:'auto'}}>
                 { 
                    this.state.item[0] != null ? result : 
                    <div>  
                        <h1>OOOPPSS...!!! Cart is empty..! :-(</h1>
                    </div>
                 }
             </div>
                {
                   this.state.item[0] != null ?
                    <div className="totalVal container-fluid">
                       <h2>Total Amount : <i className="fa fa-rupee"></i> {totalAmount} </h2>
                       
                   </div> 
                   : null
                } 
             </>
        )
    }
}

export default Cart
