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
      likes: [false],
      cart: [],
      currentQuantity: 1
    }

    this.getCat = this.getCat.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  componentDidMount() {
    this.getCat('Luna');
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
    let newLikes = Object.create(this.state.likes);
    newLikes[this.state.currentImage] = !newLikes[this.state.currentImage];
    this.setState({
      likes: newLikes
    });
  }

  handlePurchase() {
    let cart = this.state.cart.slice();
    cart.push({
      quantity: this.state.currentQuantity,
      name: this.state.cat.catName,
      pricePerUnit: this.state.cat.price
    })
    this.setState({
      cart
    })
  }

  handleQuantityChange(e) {
    this.setState({
      currentQuantity: parseInt(e.target.value)
    })
  }

  render() {
    return(
    <div>
      <Title category={this.state.cat.categoryName} name={this.state.cat.catName}/>
      <ContentBox
      cat={this.state.cat}
      mainImage={this.state.currentImage}
      changeImage={this.changeImage}
      likes={this.state.likes}
      currentQuantity={this.state.currentQuantity}
      toggleLike={() => {this.toggleLike()}}
      handleQuantityChange={this.handleQuantityChange}
      handlePurchase={this.handlePurchase}
      />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));