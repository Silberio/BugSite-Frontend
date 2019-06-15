import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>BUG SITE</h4>
      </header>
      <div className="App-content">
        <h1>CONTENT</h1>
        <APIFetchTest />
      </div>
    </div>
  );
}



class MyComponent extends React.Component {
  handleClick(e) {
    e.preventDefault()

    fetch('http://localhost:8080/bugs/')
      .then(function(response) {
      return response.json();
        })
        .then(function(myJson) {
    console.log(myJson);
    });
  }

  render() {
    return(
      <div>
        <p>MOTH</p>
        <img src={ require("./media/mothsample.png")} />
        <button onClick={this.handleClick}> Log </button>
      </div>
      );
  }
}

class APIFetchTest extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      bugs: []
    };
  }

  componentDidMount() {
        fetch('http://localhost:8080/bugs/')
      .then(response => response.json())
      .then((result) => {

        this.setState({
          bugs: result.bug
        });
      });

  }




  render() {

    const baseURL = "./media/"
    return(
      <div>
        <h3>API Fetch Test</h3>
        <ul>
          {this.state.bugs.map(bug => 
            (
              <li key={bug.id}> 
              {bug.title} 
              <p>{bug.description}</p>
              <img src={require(`${baseURL + bug.imageURL}`)} />
              </li>
              ))}
        </ul>
      </div>)
  }

}

export default App;
