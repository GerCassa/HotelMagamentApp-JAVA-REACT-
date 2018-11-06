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
      <h2>This will be a pretty grid with all the rooms. I need to do it.</h2>
    )
  }
}

export default RoomContainer; 