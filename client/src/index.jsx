import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import $ from 'jquery';

import Title from './components/Title.jsx';
import ContentBox from './components/ContentBox.jsx';

class App extends React.Component {
  //initial set up for Parent Level React Component
  constructor(props) {
    super(props);
    this.state = {
      //cat holds the database information for a given cat, url must be an array
      cat: {
        url: []
      },
      //currentImage holds the index of the current image url to be displayed
      currentImage: 0,
      //likes array that will remember if each image has been liked
      likes: [false],
      //cart will track items bought when the user adds them to cart (array of objects)
      cart: [],
      //currentQuantity stores the value displayed in the quantity <select> element
      currentQuantity: 1,
      //displayImprove tracks which version of the improvement link/form should be displayed
      displayImprove: false,
      //renderCarousel tracks the window inner width. A carousel is only rendered when innerWidth is below 992px
      renderCarousel: window.innerWidth < 992,
      //tracks the number of questions in the About component
      questionCount: 0,
      //tracks the numner of reviews from the Reviews component
      reviewCount: 0
    }

    //functon binding for prop functions
    this.getCat = this.getCat.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.toggleImprove = this.toggleImprove.bind(this);
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  componentDidMount() {
    //get default cat on load
    this.getCat('Luna');

    //listens to the search bar for submit and gets the requested cat
    $('body').on('submit', '.form', (e) => {
      //formatted uses RegEx to make ever word all lowercase except the First letter (matches current db format)
      let formatted = e.target[0].value.replace(/(^\w|\s\w)(\S*)/g, (_,m1,m2) => m1.toUpperCase()+m2.toLowerCase());
      this.getCat(formatted);
    });

    //listens to the search bar for click on a suggested cat
    $('body').on('click', '.catRows', (e) => {
      this.getCat(e.currentTarget.value);
    })

    //listens to the recommended links for click and gets suggested cat
    $('body').on('click', '.catLink', (e) => {
      this.getCat(e.currentTarget.id);
    });

    //changes the current image when using the carousel
    $('body').on('click', '.BrainhubCarousel__dot', (e) => {
      this.setState({
        currentImage: parseInt(e.target.innerText) - 1
      })
    })

    //listen for widow resize to know when to switch to carousel
    window.addEventListener('resize', this.onWindowResize);

    //listens to the Q&A header from about service to pull # of questions.
    $('body').on('DOMSubtreeModified', '.tabHeader', (e) => {
      this.setState({
        questionCount: window.questions
      });
    })

    //listens to the Reviews Header from reveiw service to pull # of questions.
    $('body').on('DOMSubtreeModified', '.matching-reveiws', (e) => {
      this.setState({
        reviewCount: winodw.totalReviews
      });
    })
  }

  //when the window resizes, change the state based on larger than or smaller than 992px
  onWindowResize() {
    this.setState({
      renderCarousel: window.innerWidth < 992
    });
  }

  //given a catName, request the cat object from the server/db
  getCat(catName) {
    Axios
      .get('/main', {
        params: {
          catName
        }
      })
      .then(results => {
        //create a new likes object to keep track of the image urls
        let liked = {};
        results.data.url.forEach((url, index) => {
          liked[index] = false;
        })
        //reset the current cat and likes, reset the displayed image to 0, and retrieve the correct question quantity
        this.setState({
          cat: results.data,
          likes: liked,
          currentImage: 0,
          questionCount: window.quantity,
          reviewCount:window.totalReviews
        });
      })
      .catch(err => {
        //if error, render no such cat image
        this.setState({
          cat: {
            catName: 'No Such Cat Exists',
            url: ['https://http.cat/204'],
            currentImage: 0,
            questionCount: 0,
            reviewCount:window.totalReviews
          }
        })
      })
  }

  //when the image changes, update the current image (number of index)
  changeImage(e) {
    this.setState({
      currentImage: e.target.id
    });
  }

  //set likes for current picture to !likes[i] when the button is clicked
  toggleLike() {
    let newLikes = Object.create(this.state.likes);
    newLikes[this.state.currentImage] = !newLikes[this.state.currentImage];
    this.setState({
      likes: newLikes
    });
  }

  //when either of the purchase puttons are clicked add the cat, quantity, and price to the cart
  //if cart is currently 'No Such Cat Exists', don't do anything
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

    //use global cart variable to interact with search bar compontent
    window.cart = cart;

    this.setState({
      cart
    })
  }

  //When the quantity select dropdown changes, track the value (necessary for car operations)
  handleQuantityChange(e) {
    this.setState({
      currentQuantity: parseInt(e.target.value)
    })
  }

  //Switches between the "submit feedback" and "feedback submit displays"
  toggleImprove(e) {
    e.preventDefault();
    //if submitting the form, store the data
    if(e.type === 'submit') {
      let children = Array.from(e.target.children)
      //children.forEach(child => console.log(child));
      console.log('feedback logged:', children[6].children[1].value)
    }
    this.setState({
      displayImprove: !this.state.displayImprove
    })
  }

  render() {
    return(
    <div>
      {/* Main Title Header / Display */}
      <Title
      category={this.state.cat.categoryName}
      name={this.state.cat.catName}
      />
      {/* Main Content Flex Box with images, prices, and purchase components */}
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
      renderCarousel={this.state.renderCarousel}
      questionCount={this.state.questionCount}
      reviewCount={this.state.reveiwCount}
      />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));