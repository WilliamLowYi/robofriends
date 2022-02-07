import React from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import Scroll from "../component/Scroll"
import "./App.css";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ""
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({ robots: users })});
  }

  // Trigger on any changes. Event Handdling https://reactjs.org/docs/handling-events.html
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (!this.state.robots.length){
      return <h1>Loading</h1>
    } else {
      return(
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          {/* <Scroll> */}
            <CardList robots={ filteredRobot } />
          {/* </Scroll> */}
        </div>
      );    
    }
  }
}

export default App;