import React from 'react' 

class CruiseListHeader extends React.Component {
    constructor(props)  {
        super(props)

         
        this.state.shipsList = {isOpen: false}
        
        }
        this.handleClick = this.handleClick.bind(this)
    }  

    handleClick(event)    {
        {/* There will be Headings for all the Cruise Lines.
        When a Cruise Line Heading is clicked, the Ships List opens up for that Heading.
        When user clicks on a Cruise Line Heading, when a Ships List is open, the Ships List Collapses.*/}

    //   this.props.shipsLists(this.prsops.cruise_line)
    //   this.setState = ({})
        const openList = {shipsList}
    
        const shipsList {{
            state: {openList}
        }

        this.setState( {
            isOpen: true
        }))
        }   
    
        const isOpen = !!openList

        this.setState({
            isOpen:false
        })
         
    }

    render()    {
        return  (

            <React.Fragment>

                     <h3><button onClick = "this.handleClick">{ship.cruise_line}</button></h3>    
              
            </React.Fragment>    
        )
    }
}

export default CruiseListHeader