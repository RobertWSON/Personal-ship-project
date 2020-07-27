import React from 'react'
import {Link} from 'react-router-dom'


class ClassicShips extends React.Component  {
    constructor(props)  {
        super(props)
}

render()    {

    const   {
        ship_name,
        img,
        img_title,
    } = this.props

    // Commented constant below, because we want to see how it works without encoding to start with
    //The ClassicShips constant is used to get to the link for the classic ship. 
    // encodedClassicShips = ship_name.replace(/\s/g, '_')

    return  (
        <React.Fragment>

            {/* <div className = "evoships"> */}
                <h3>{ship_name}</h3>

                {/* Commented encoded constant below, because we want to see how it works without encoding to start with  */}
                {/* <Link to = {`/evolutionpart1/${encodedClassicShips}`}> */}
                <Link to = {`/evolutionpart1/${ship_name}`}>
                    <img src = {img} 
                        title = {img_title} />
                </Link> 

                <p>Find out more on {ship_name} , Click on image
                <br/><br/>
                {/* </p> 
                <p> */}
                    {ship_name} Ship Horn</p>    
            {/* </div> */}

        </React.Fragment>
    )
}
}

export default ClassicShips