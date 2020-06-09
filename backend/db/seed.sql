-- \c yelp_clone_db;

INSERT INTO Stores (name, address) 
    VALUES('john pizza', '43-04 National Street Corona, NY 11368'), 
            ('wong kitchen', '15-25 Flatbush Ave Flatbush, NY 11210'),
            ('red lobster', '88-01 Queens Blvd Elmhurst NY, 11373'),
            ('corona ice king', '52-02 108th Street Corona, NY 11368'), 
            ('chipotle mexican grill', '61-35 Junction Blvd Rego Park, NY 11374'), 
            ('hamburger factory', '134-06 Guy R Brewer Blvd Rochdale, NY 11434'), 
            ('sushi village', '3250 Francis Lewis Blvd Auburndale, NY 11358'), 
            ('halal over rice', '63-75 108th Street Forest Hills, NY 11366');

INSERT INTO Types (name) 
    VALUES('chinese'),
        ('ice cream'),
        ('frozen yogurt'),
        ('italian'),
        ('pizzeria'), 
        ('mexican'),
        ('taco'),
        ('american'),
        ('burgers'),
        ('sandwiches'),
        ('japanese'),
        ('sushi'),
        ('halal');

INSERT INTO Categories (store_id, type_id)
    VALUES (1,5),
        (1,4),
        (2,1),
        (3,8),
        (3,9),
        (3,10),
        (4,2),
        (4,3),
        (5,6),
        (5,7),
        (6,8),
        (6,9),
        (6,10),
        (7,11),
        (7,12),
        (8,13);


INSERT INTO Users (username, email, password)
    VALUES  ('kong','kong@gmail.com','admin123'),
            ('test','test@gmail.com','admin123');

INSERT INTO Posts (user_id, store_id, content)
    VALUES (1, 1, 'love Pizza and Meatball'),
            (1, 2, 'love Chinese Food'),
            (1, 3, 'love Losbter Food'),
            (1, 4, 'love Ice Cream'),
            (1, 5, 'love Meican, Taco'),
            (1, 6, 'love American Food'),
            (1, 7, 'love Sushi'),
            (1, 8, 'love Chicken Over Rice'),
            (1, 1, 'love Pizza Food'),
            (2, 1, 'love Chinese Food');