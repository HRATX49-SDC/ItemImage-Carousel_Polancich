import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getCat('Xito');
    this.getCat('Luna');
    this.getCat('Ash');
    this.getCat('Batman');
    this.getCat('Mr. Snuffles');
    this.getCat('Garfield');
    this.getCat('Oscar');
  }

  getCat(catName) {
    Axios
      .get('/purrget', {
        params: {
          catName
        }
      })
      .then(results => {
        console.log(results.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
    <div>
      <h1>Hello from React</h1>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));