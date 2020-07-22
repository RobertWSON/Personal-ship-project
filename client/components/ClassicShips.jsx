import React from 'react'


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

    return  (
        <React.Fragment>

            {/* <div className = "evoships"> */}
                <h3>{ship_name}</h3>
                <img src = {img} 
                     title = {img_title} />
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