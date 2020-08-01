import React from 'react'
import MakeClassic from './MakeClassic'
import { getClassic } from '../api/api'

class FindClassic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classicship: null
    }
    this.setUpClassic = this.setUpClassic.bind(this)
  }

  componentDidMount() {
    const { location, match } = this.props
    if (location.state) {
      this.setState({ classicship: location.state })
    } else {
      this.setUpClassic(match.params.shipname)
    }
  }

  setUpClassic(shipName) {
    getClassic(shipName)
      .then(ship => {
        this.setState({
          classicship: ship
        })
      })
  }

  render() {
    if (!this.state.classicship) return <div>Loading...</div> //Create your loading component
    return <MakeClassic {...this.state.classicship} />
  }
}

export default FindClassic
