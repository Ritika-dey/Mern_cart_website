import React, { Component } from 'react'
import './style/card.css'
import data from '../data'
 
class Card extends Component {
    render() {
        let result = []
        for (let i = 0; i < data.store.length; i++) {
             if(data.store[i].category == this.props.category){
                result = data.store[i].books
                break;
             }
        }
        return (
           <>
           {  
              result.map(item => 
                <div className="card" key={item.id}>
                <img src={item.image} alt="card image"/>
                <h3>{item.name}</h3>
                <p><i>{item.author}</i></p>
                <p style={{fontWeight:'bold'}}>Price: 000</p>
                <button className="btn btn-primary bttn">Add to Cart</button>
              </div> ) 
           }
           </>
        )
    }
}

export default Card

  // <>
            // {
            //   data.store.map(item => 
            //     {   
            //             item.books.map(details => {  
            //                if(item.category == this.props.category){
            //                     <div className="card" key={details.id}>
            //                         <img src={details.image} alt="card image"/>
            //                         <h3>{details.name}</h3>
            //                         <p><i>{details.author}</i></p>
            //                         <p style={{fontWeight:'bold'}}>Price: 000</p>
            //                         <button className="btn btn-primary bttn">Add to Cart</button>
            //                     </div>
            //            }
            //         })
            //    })
            // }
            // </>