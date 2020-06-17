# Casper-MainItemDisplayService
Main Item Display Service

This Service is in charge of rendering the Main Item Display to the screen. The Service includes the Title Header (which inlcludes the category), The Image Carousel, the Purchase Price/Quantity Selector, and the Purchase Options.

The Tech Stack consists of React for the client side, Node/Express for the server, and MySQL for the database.

Client Summary:

Server Summary: The server is written using Express.
- When a get request is made with a given cat name, the server will get the cooresponding data from the server, refactor the data into a user friendly client object, and send the data back to the client.

Database Summary: The Database consists of three tables: cats, categories, and images.
- The cats table holds data regarding the individual product. Each cat has a unique name, a price, a rating, and a category reference (Foreign Key to categories table).
- The categories table holds the different categories of cats (one to many relationship to cats). It holds an id and a unique category name.
- The images table holds urls to images hosted on amazons S3 cloud storage platform. In addition to this, the table holds a cat_id as a reference (foregin key) to whichever cat the image belongs to.