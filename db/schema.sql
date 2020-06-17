drop database if exists purrget;

create database purrget;

use purrget;

create table cats (
  id int not null auto_increment primary key,
  catName varChar(255) not null,
  price decimal(10,2) not null default 99.99,
  rating decimal(10,2) null default 0.00,
  unique key (catName)
);

create table categories (
  id int not null auto_increment primary key,
  categoryName varChar(255) not null unique key
);

create table cats_categories (
  id int not null auto_increment primary key,
  cat_id int not null,
  category_id int not null,
  INDEX cat_ind (cat_id),
    FOREIGN KEY (cat_id)
      REFERENCES cats(id)
      ON DELETE CASCADE,
  INDEX categ_ind (category_id),
    FOREIGN KEY (category_id)
      REFERENCES categories(id)
      ON DELETE CASCADE
);

create table images (
  id int not null auto_increment primary key,
  url varChar(510) not null unique key,
  cat_id int not null,
  INDEX cat_ind (cat_id),
    FOREIGN KEY (cat_id)
      REFERENCES cats(id)
      ON DELETE CASCADE
);