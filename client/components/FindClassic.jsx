import React from 'react'
import MakeClassic from './MakeClassic'

class FindClassic extends React.Component {
  render() {
    return <MakeClassic {...this.props.location.state} />
  }
}

export default FindClassic
