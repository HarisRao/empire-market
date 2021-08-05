import React from 'react'
import coin1 from '../../images/coin1.png'
import coin2 from '../../images/coin2.png'
import coin3 from '../../images/coin3.png'
import coin4 from '../../images/coin4.png'
import coin5 from '../../images/coin5.png'

const coins=[coin1,coin2,coin3,coin4,coin5]

class Coins extends React.Component{
    render(){
        return(
            <div className="my-5 pt-3">
                <ul className="p-0 mx-5" id="ul-slider">
                    {coins.map((coinImg,index)=>{
                        return(
                            <li key={index} className="d-inline li-margin">
                                <img src={coinImg} alt="..."></img>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Coins