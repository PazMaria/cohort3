CREATE TABLE product
(
    prod_id serial PRIMARY KEY,
    prod_name VARCHAR (50) UNIQUE NOT NULL,
    prod_desc VARCHAR (250) NOT NULL,
    price INTEGER NOT NULL
)
,

CREATE TABLE customer
(
    cust_id serial PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    cust_address VARCHAR (250) NOT NULL,
    email_address VARCHAR (250) UNIQUE NOT NULL,
    phone INTEGER NOT NULL
)
,

CREATE TABLE invoice
(
    inv_id serial PRIMARY KEY,
    cust_id INTEGER NOT NULL,
    CONSTRAINT invoice_fkey FOREIGN KEY (cust_id)
      REFERENCES customer (cust_id),
    MATCH SIMPLE,
    date_inv DATE NOT NULL
)

CREATE TABLE invoiceDetail
(
    inv_id INTEGER NOT NULL,
    CONSTRAINT invoiceDetail_fkey FOREIGN KEY (inv_id)
      REFERENCES invoice(inv_id),
    MATCH SIMPLE,
    prod_id INTEGER NOT NULL,
    CONSTRAINT productDetail_fkey FOREIGN KEY
        (prod_id)
      REFERENCES product
        (prod_id),
    MATCH SIMPLE,
    quantity INTEGER NOT NULL,
)

INSERT INTO product
    (prod_name, prod_desc, price)
VALUES
    ('Pod', 'mp3 player', 50),
    ('Samsung Smart TV', 'Smart TV', 400),
    ('Tim Hortons Coffee', 'Coffee can 500 gm', 10),
    ('Scotties Tissues', 'Facial tissues 100s', 2),
    ('Thermos bottle', 'Water bottle - hot & cold', 10),
    ('Logitech mouse', 'Optical mouse', 15),
    ('Macbook Pro', 'Laptop', 550),
    ('Rayban Aviators', 'Sunglasses', 70),
    ('Casio APBX', 'Waterproof watch - gents', 50),
    ('Colgate Mint Fresh', 'Toothpaste - 100 gms', 4)

INSERT INTO customer
    (first_name, last_name, cust_address, email_address, phone)
VALUES
    ('Darth', 'Vader', '22 lane s', 'email1@email.com', 2345678),
    ('Luke', 'Skywalker', '22 lane s', 'email2@email.com', 2345678),
    ('Grand Moff', 'Tarkin', '22 lane s', 'email3@email.com', 2345678),
    ('Han', 'Solo', '22 lane s', 'email4@email.com', 2345678),
    ('Tuscan', 'Raider', '22 lane s', 'email5@email.com', 2345678),
    ('Leia', 'Organa', '22 lane s', 'email6@email.com', 2345678),
    ('Admiral', 'Ozzel', '22 lane s', 'email7@email.com', 2345678),
    ('Nien', 'Nunb', '22 lane s', 'email8@email.com', 2345678),
    ('Emperor', 'Palpatine', '22 lane s', 'email9@email.com', 2345678),
    ('Ben', 'Kenobi', '22 lane s', 'email10@email.com', 2345678);

INSERT INTO invoice
    (cust_id, date_inv)
VALUES
    (1, '2019-1-1'),
    (2, '2019-2-1'),
    (1, '2019-3-1'),
    (2, '2019-4-1'),
    (1, '2019-5-1'),
    (2, '2019-6-1'),
    (1, '2019-7-1'),
    (2, '2019-8-1'),
    (1, '2019-9-1'),
    (2, '2019-10-1'),
    (1, '2019-1-1'),
    (2, '2019-2-1'),
    (1, '2019-3-1'),
    (2, '2019-4-1'),
    (1, '2019-5-1'),
    (2, '2019-6-1'),
    (1, '2019-7-1'),
    (2, '2019-8-1'),
    (1, '2019-9-1'),
    (2, '2019-10-1')

INSERT INTO invoiceDetail
    (inv_id,prod_id,quantity)
VALUES
    (5, 3, 1),
    (2, 6, 2),
    (6, 4, 3),
    (6, 5, 4),
    (2, 1, 5),
    (5, 8, 6),
    (6, 8, 7),
    (2, 4, 8),
    (5, 9, 9),
    (6, 1, 10);
    