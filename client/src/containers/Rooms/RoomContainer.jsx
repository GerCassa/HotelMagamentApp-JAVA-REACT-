import React from 'react';

class RoomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      currentRoom: null
    };
  }

  render() {
    return(
      <h2>This will be a pretty grid with all the rooms. Coming soon</h2>
    )
  }
}

export default RoomContainer; 