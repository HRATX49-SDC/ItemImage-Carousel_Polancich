# Main Item Display Service

This service is part of a larger project that implements a site with similar appearance to Target. The site utilizes service oritented architecture to increase flexibility, scalability, and reliablility. The final project consists of 5 standalone services, which can be easily combined utilizing a reverse Proxy. The five services are Main Item Display, Search/Header/Footer, About This Item, Recommended / Featured Items, and Reviews.

## Installation & Startup

Use npm to install required packages

```zsh
npm install
```

This service is configured to run locally on port 5000 or at its deployed location on AWS Elastic Beanstalk
URL: http://purrgetmainitemdisplay-env.eba-upicdvwk.us-east-2.elasticbeanstalk.com/

If running locally, use npm start to run start running the server

```zsh
npm start
```

## Service Overview

This Service is in charge of rendering the Main Item Display to the screen. The Service includes the Title Header (which inlcludes the product category), The Image Carousel, the Purchase Price/Quantity Selector, and the Purchase Options.

The Tech Stack consists of React for the client side, Node/Express for the server, and MySQL for the database.