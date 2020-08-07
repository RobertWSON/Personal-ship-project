import React from 'react'
import {Link} from 'react-router-dom'


class ClassicShips extends React.Component  {

    render()    {

    const   {
        ship_name,
        img,
        img_title, 
        ship_horn
    } = this.props   

    return  (
        <React.Fragment>

            <h3>{ship_name}</h3> 

            {/* Please note, we have pass this.props as state into the Link individually for ship_name, because 
            it is a property of the Link.*/}
            <Link to={{ 
                    pathname: `/evolutionpart1/${ship_name}`,
                    state: this.props
                    }}>                    
                <img src = {img} title = {img_title} />
            </Link> 
            <p> Find out more on {ship_name} , Click on Image
            <br/><br/>
                Experience {ship_name}</p>

            {/* Trying to get Text ship Horn Link to open a mp4 file for the ship horn.     */}
            <Link to={{ 
                    source: {ship_horn},
                    // pathname: `/${ship_horn}`,
                    // pathname: `/evolutionpart1/${ship_horn}`,
                    state: this.props 
                    }}>Ship Horn
            </Link>    

        </React.Fragment>                
    )
}
}

export default ClassicShips