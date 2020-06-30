# Casper-MainItemDisplayService
Main Item Display Service

## Installation & Startup

Use npm to install required packages

```npm install
```

This service is configured to run locally on port 5000 or at its deployed location on AWS Elastic Beanstalk
URL: http://purrgetmainitemdisplay-env.eba-upicdvwk.us-east-2.elasticbeanstalk.com/

If running locally, use npm start to run start running the server

```npm start
```

## Service Overview

This Service is in charge of rendering the Main Item Display to the screen. The Service includes the Title Header (which inlcludes the product category), The Image Carousel, the Purchase Price/Quantity Selector, and the Purchase Options.

The Tech Stack consists of React for the client side, Node/Express for the server, and MySQL for the database.