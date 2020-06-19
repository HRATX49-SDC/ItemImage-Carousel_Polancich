import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import Title from './components/Title.jsx';
import ContentBox from './components/ContentBox.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: {
        url: []
      },
      currentImage: 0,
      likes: [false]
    }

    this.getCat = this.getCat.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  componentDidMount() {
    this.getCat('Midnyght');
  }

  getCat(catName) {
    Axios
      .get('/purrget', {
        params: {
          catName
        }
      })
      .then(results => {
        let liked = {};
        results.data.url.forEach((url, index) => {
          liked[index] = false;
        })
        this.setState({
          cat: results.data,
          likes: liked
        });
      })
      .catch(err => {
        console.log(err);
      })
  }

  changeImage(e) {
    this.setState({
      currentImage: e.target.id
    });
  }

  toggleLike() {
  }

  render() {
    return(
    <div>
      <Title category={this.state.cat.categoryName} name={this.state.cat.catName}/>
      <ContentBox cat={this.state.cat} mainImage={this.state.currentImage} changeImage={this.changeImage} likes={this.state.likes}/>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));