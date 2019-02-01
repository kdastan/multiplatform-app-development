// Playground link
// https://playcode.io/244026?tabs=console&script.js&output

// Have a fun, to play with code

const fruits = [
    { fruit: 'Apple', price: 120 },
    { fruit: 'Banana', price: 20 },
    { fruit: 'Orange', price: 145 },
    { fruit: 'Cherries', price: 200 },
    { fruit: 'Grapefruit', price: 100 },
  ];
  
  // map is going to go through every object and update price`s value by minus 5
  const updatePrice = fruits.map((item) => { 
    return { fruit: item.fruit, price: item.price - 5 } 
  })
  
  console.log(updatePrice)
  
  // filter is going to return object which meets the condition, price more than 120
  const filterPrice = fruits.filter((item) => {
    return item.price > 120
  })
  
  console.log(filterPrice)