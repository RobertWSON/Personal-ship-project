import React from 'react' 

class CruiseHeader extends React.Component {
    constructor(props)  {
        super(props)

        this.state = {isOpen: false}

        }    
    }  

    handleClick() {
        {/* There will be Headings for all the Cruise Lines.
        When a Cruise Line Heading is clicked, the Ships List opens up for that Heading.
        When user clicks on a Cruise Line Heading, when a Ships List is open, the Ships List Collapses.*/}

      //this.props.shipsLists(this.props.cruise_line)
      //this.setState = ({
                


      })
    }

    render()    {
        return  (

                <div>
                     <h3><button onClick = "this.handleClick">{ship.cruise_line}</button></h3>    
                </div>  
        )
    }
}

export default CruiseHeader