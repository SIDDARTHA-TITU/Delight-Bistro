document.addEventListener('DOMContentLoaded', () => {
  const menuData = {
    veg: [
      { name: 'Paneer Tikka', price: 12, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
      { name: 'Vegetable Biryani', price: 10, img: 'https://images.unsplash.com/photo-1604152135912-04c66e377c8c' },
      { name: 'Aloo Gobi', price: 8, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Dal Tadka', price: 7, img: 'https://images.unsplash.com/photo-1626500146191-0e51a058a7df' },
      { name: 'Palak Paneer', price: 11, img: 'https://images.unsplash.com/photo-1589744960834-4e6490b3d146' },
      { name: 'Chana Masala', price: 9, img: 'https://images.unsplash.com/photo-1626500146191-0e51a058a7df' },
      { name: 'Veg Korma', price: 10, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Mushroom Masala', price: 9, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Baingan Bharta', price: 8, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Veg Jalfrezi', price: 10, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
      { name: 'Malai Kofta', price: 12, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Rajma Masala', price: 8, img: 'https://images.unsplash.com/photo-1626500146191-0e51a058a7df' },
      { name: 'Gobi Manchurian', price: 9, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Veg Pulao', price: 10, img: 'https://images.unsplash.com/photo-1604152135912-04c66e377c8c' },
      { name: 'Paneer Butter Masala', price: 13, img: 'https://images.unsplash.com/photo-1589744960834-4e6490b3d146' },
      { name: 'Veg Curry', price: 9, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
    ],
    nonVeg: [
      { name: 'Butter Chicken', price: 14, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Biryani', price: 12, img: 'https://images.unsplash.com/photo-1604152135912-04c66e377c8c' },
      { name: 'Fish Curry', price: 13, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Mutton Rogan Josh', price: 15, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Tikka', price: 12, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
      { name: 'Prawn Masala', price: 14, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Lamb Korma', price: 15, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Vindaloo', price: 13, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Tandoori Chicken', price: 12, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
      { name: 'Fish Fry', price: 11, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Mutton Biryani', price: 14, img: 'https://images.unsplash.com/photo-1604152135912-04c66e377c8c' },
      { name: 'Chicken Korma', price: 13, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Prawn Biryani', price: 15, img: 'https://images.unsplash.com/photo-1604152135912-04c66e377c8c' },
      { name: 'Egg Curry', price: 10, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Chettinad', price: 13, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Grilled Chicken', price: 12, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
    ],
    breads: [
      { name: 'Naan', price: 3, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Garlic Naan', price: 4, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Roti', price: 2, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Paratha', price: 3, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Stuffed Kulcha', price: 5, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Puri', price: 3, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Aloo Paratha', price: 4, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Paneer Kulcha', price: 5, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Laccha Paratha', price: 4, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Missi Roti', price: 3, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Tandoori Roti', price: 2, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Butter Naan', price: 4, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Onion Kulcha', price: 5, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Methi Paratha', price: 4, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Plain Kulcha', price: 3, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
      { name: 'Cheese Naan', price: 5, img: 'https://images.unsplash.com/photo-1615716175182-8a5935a15989' },
    ],
    healthyBowls: [
      { name: 'Quinoa Salad Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Grilled Veggie Bowl', price: 9, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Chickpea Buddha Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Kale & Avocado Bowl', price: 11, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Tofu Power Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Brown Rice Veggie Bowl', price: 9, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Sprout Salad Bowl', price: 8, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Lentil & Veggie Bowl', price: 9, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Quinoa & Chicken Bowl', price: 12, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Salmon Poke Bowl', price: 13, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Greek Salad Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Avocado & Egg Bowl', price: 11, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Hummus Veggie Bowl', price: 9, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Tuna Salad Bowl', price: 12, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Falafel Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
      { name: 'Veggie Power Bowl', price: 10, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd' },
    ],
    softDrinks: [
      { name: 'Coca Cola', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Sprite', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Fanta', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Lemonade', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Iced Tea', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Ginger Ale', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Tonic Water', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Soda Water', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Orange Juice', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Apple Juice', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Mango Lassi', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Pineapple Juice', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Cranberry Juice', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Virgin Mojito', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Sparkling Water', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Coconut Water', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
    ],
    beverages: [
      { name: 'Masala Chai', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1576092768241-d468eadb127f' },
      { name: 'Green Tea', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1576092768241-d468eadb127f' },
      { name: 'Coffee', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1494314675222-991f0b6c995c' },
      { name: 'Hot Chocolate', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1511381468606-f996e8b1e5d3' },
      { name: 'Lassi', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Buttermilk', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Fresh Lime Soda', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1622483767028-3f66f32b44ed' },
      { name: 'Coconut Water', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Herbal Tea', price: 3, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1576092768241-d468eadb127f' },
      { name: 'Milkshake', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Smoothie', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1600271886742-f049b390a7e8' },
      { name: 'Espresso', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1494314675222-991f0b6c995c' },
      { name: 'Cappuccino', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1494314675222-991f0b6c995c' },
      { name: 'Matcha Latte', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1576092768241-d468eadb127f' },
      { name: 'Turmeric Latte', price: 5, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1576092768241-d468eadb127f' },
      { name: 'Iced Coffee', price: 4, type: 'non-alcoholic', img: 'https://images.unsplash.com/photo-1494314675222-991f0b6c995c' },
    ],
    wine: [
      { name: 'Red Wine (Cabernet)', price: 8, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'White Wine (Chardonnay)', price: 8, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Rosé Wine', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Sparkling Wine', price: 9, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Merlot', price: 8, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Pinot Noir', price: 8, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Sauvignon Blanc', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Prosecco', price: 9, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Sangria', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Mojito', price: 6, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Margarita', price: 6, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Martini', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Whiskey Sour', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Cosmopolitan', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Gin Tonic', price: 6, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
      { name: 'Old Fashioned', price: 7, type: 'alcoholic', img: 'https://images.unsplash.com/photo-1597905296937-7b7ab8747c2a' },
    ],
    mainCourse: [
      { name: 'Grilled Salmon', price: 16, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2' },
      { name: 'Paneer Makhani', price: 13, img: 'https://images.unsplash.com/photo-1589744960834-4e6490b3d146' },
      { name: 'Chicken Alfredo', price: 14, img: 'https://images.unsplash.com/photo-1555949258-eb67b1e5d9b1' },
      { name: 'Vegetable Lasagna', price: 12, img: 'https://images.unsplash.com/photo-1574894709920-11c84329d079' },
      { name: 'Beef Steak', price: 18, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
      { name: 'Prawn Curry', price: 15, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Mutton Kheema', price: 14, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Veg Thai Curry', price: 12, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Parmesan', price: 14, img: 'https://images.unsplash.com/photo-1555949258-eb67b1e5d9b1' },
      { name: 'Lamb Shank', price: 17, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
      { name: 'Fish Tikka Masala', price: 15, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Veg Stroganoff', price: 12, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Chicken Satay', price: 13, img: 'https://images.unsplash.com/photo-1596797038530-2c1076b313d3' },
      { name: 'Pork Ribs', price: 16, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
      { name: 'Mushroom Risotto', price: 13, img: 'https://images.unsplash.com/photo-1603894584373-2d7f2f7e4f6e' },
      { name: 'Beef Wellington', price: 18, img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092' },
    ],
    desserts: [
      { name: 'Tiramisu (Italy)', price: 6, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9' },
      { name: 'Gulab Jamun (India)', price: 5, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Crème Brûlée (France)', price: 6, img: 'https://images.unsplash.com/photo-1559622214-f8a9850965d3' },
      { name: 'Baklava (Turkey)', price: 5, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Mango Sticky Rice (Thailand)', price: 6, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Churros (Spain)', price: 5, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Pavlova (Australia)', price: 6, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Mochi (Japan)', price: 5, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
      { name: 'Fruit Salad', price: 4, img: 'https://images.unsplash.com/photo-1564093497595-593b96b9daef' },
      { name: 'Mango Sorbet', price: 4, img: 'https://images.unsplash.com/photo-1564093497595-593b96b9daef' },
      { name: 'Pineapple Tart', price: 5, img: 'https://images.unsplash.com/photo-1564093497595-593b96b9daef' },
      { name: 'Apple Pie (USA)', price: 6, img: 'https://images.unsplash.com/photo-1568572933382-1d683d5e9f0a' },
      { name: 'Strawberry Cheesecake', price: 6, img: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187' },
      { name: 'Dragon Fruit Sorbet', price: 5, img: 'https://images.unsplash.com/photo-1564093497595-593b96b9daef' },
      { name: 'Kiwi Pavlova', price: 6, img: 'https://images.unsplash.com/photo-1564093497595-593b96b9daef' },
      { name: 'Chocolate Lava Cake', price: 6, img: 'https://images.unsplash.com/photo-1606755456206-11ece26e808c' },
    ],
    snacks: [
      { name: 'French Fries', price: 4, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Onion Rings', price: 4, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Veg Pakora', price: 5, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Chicken Nuggets', price: 6, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb32' },
      { name: 'Samosa', price: 4, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Spring Rolls', price: 5, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Nachos', price: 6, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Mozzarella Sticks', price: 5, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Pani Puri', price: 4, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Bruschetta', price: 5, img: 'https://images.unsplash.com/photo-1600586916328-1f8c3c5f2b2a' },
      { name: 'Chicken Wings', price: 6, img: 'https://images.unsplash.com/photo-1562967916-eb82221dfb32' },
      { name: 'Vada Pav', price: 4, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
      { name: 'Fish Fingers', price: 6, img: 'https://images.unsplash.com/photo-1598971458494-8d7b9b87e5b8' },
      { name: 'Potato Wedges', price: 4, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Cheese Balls', price: 5, img: 'https://images.unsplash.com/photo-1518013431117-eb146820e53b' },
      { name: 'Veg Cutlet', price: 4, img: 'https://images.unsplash.com/photo-1618449840665-9ed0b86c8769' },
    ],
  };

  const menuSection = document.querySelector('.menu');
  Object.keys(menuData).forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = `menu-category ${category}`;
    const categoryTitle = document.createElement('h3');
    categoryTitle.className = 'menu-category-title';
    categoryTitle.textContent = category.replace(/([A-Z])/g, ' $1').trim();
    const menuList = document.createElement('ul');
    menuList.className = 'menu-list';

    menuData[category].forEach(item => {
      const li = document.createElement('li');
      li.className = 'menu-item';
      li.innerHTML = `
        <img src="${item.img}" alt="${item.name}" class="menu-item-img">
        <span class="menu-item-name">${item.name}</span>
        ${item.type ? `<span class="menu-item-type">(${item.type})</span>` : ''}
        <span class="menu-item-price">$${item.price}</span>
      `;
      menuList.appendChild(li);
    });

    categoryDiv.appendChild(categoryTitle);
    categoryDiv.appendChild(menuList);
    menuSection.appendChild(categoryDiv);
  });

  const form = document.getElementById('reservation-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const people = document.getElementById('people').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const complimentaryDrink = document.getElementById('complimentary-drink').checked;

    if (name && email && people && date && time) {
      const message = `🌮 Reservation Confirmed! 🌟\n\nName: ${name}\nEmail: ${email}\nPeople: ${people}\nDate: ${date}\nTime: ${time}\nComplimentary Drink: ${complimentaryDrink ? 'Yes 🍹' : 'No'}\n\nThank you for choosing Delight Bistro!`;
      alert(message);
      status.textContent = 'Reservation successful! Check your alert for details.';
      form.reset();
    } else {
      status.textContent = 'Please fill out all fields!';
    }
  });
});