import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import $ from 'jquery';

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
      currentQuantity: 1,
      displayImprove: false
    }

    this.getCat = this.getCat.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.toggleImprove = this.toggleImprove.bind(this);
  }

  componentDidMount() {
    this.getCat('Luna');
    $('body').on('click', '.catLink', (e) => {
      this.getCat(e.currentTarget.id);
    });
    $('body').on('submit', '.form', (e) => {
      let formatted = e.target[0].rawValue.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());
      this.getCat(formatted);
    });
  }

  getCat(catName) {
    Axios
      .get('/main', {
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
          likes: liked,
          currentImage: 0
        });
      })
      .catch(err => {
        this.setState({
          cat: {
            catName: 'No Such Cat Exists',
            url: ['https://http.cat/204']
          }
        })
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
    if(this.state.cat.catName === 'No Such Cat Exists') {
      return;
    }
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

  toggleImprove(e) {
    e.preventDefault();
    this.setState({
      displayImprove: !this.state.displayImprove
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
      displayImprove={this.state.displayImprove}
      toggleImprove={this.toggleImprove}
      />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));