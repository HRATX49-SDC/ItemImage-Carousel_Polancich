import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Title from './components/Title.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {}
    }
  }

  componentDidMount() {
    this.getCat('Xito');
  }

  getCat(catName) {
    Axios
      .get('/purrget', {
        params: {
          catName
        }
      })
      .then(results => {
        this.setState ({
          cat: results.data
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
    <div>
      <Title category={this.state.cat.categoryName} name={this.state.cat.catName}/>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));