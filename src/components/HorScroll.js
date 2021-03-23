import React, { Component } from 'react'
import data from '../data'
import Card from './Card' 
import './style/horscroll.css'
 
class HorScroll extends Component {
    render() {
        return (
            <>
                {
                    data.store.map(info =>
                        <div className="horScroll" key={info.category}>
                            <h2>Genre : {info.category}</h2>
                            <div className="scroll-wrapper"> 
                                <Card category={info.category} />
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
}

export default HorScroll
