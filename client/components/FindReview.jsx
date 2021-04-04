import React from 'react'

import InitialReview from './InitialReview'
import AddReview from './AddReview'

class FindReview extends React.Component    {

    constructor(props)  {
        super(props)

        this.state = {
            Review: false
        }
        this.setUpReview = this.setUpReview.bind(this)
    }

    componentDidMount() {

    }

    setUpReview()   {
        
    }

    render()    {
        if (this.state.Review == true)
        return
            
            <InitialReview/>
        
            return 
                <AddReview/>        
    }

}

export default FindReview