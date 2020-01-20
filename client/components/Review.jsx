import React from 'react';
import { Ship } from './Ship';
import { getShipsList } from '../api/api';
// import { HashLink as Link } from 'react-router-hash-link'

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cruiseline: props.match.params.cruise_line,
      ships: []
    };
    this.setUpShips = this.setUpShips.bind(this);
  }

  componentDidMount() {
    this.setUpShips();
  }

  setUpShips() {
    getShipsList(this.state.cruiseline).then(res => {
      this.setState({
        ships: res
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>{this.state.cruiseline}</h1>
        {this.state.ships.map(ship => {
          return <Ship key={ship.id} {...ship} />;
        })}
      </React.Fragment>
    );
  } //end bracket for render
} //end bracket for Review Component

export default Review;
