var orderHistory = [{
  orderPlaced: 'July 3, 2020',
  total: 138.93,
  shipTo: 'JS Masher',
  orderNumber: '113-28833177-2648248',
  delivered: 'Jul 5, 2020',
  items: [{
    itemName: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    price: 94.95,
    returnWindow: {
      returnWindowOpen: false,
      date: 'Aug 4, 2020'
    }
  },
  {
    itemName: 'The Art of SQL',
    price: 33.99,
    author: 'Faroult, Stephane',
    returnWindow: {
      returnWindowOpen: false,
      date: 'Aug 4, 2020'
    }
  }]
},
{
  orderPlaced: 'July 4, 2020',
  total: 17.22,
  shipTo: 'JS Masher',
  orderNumber: '114-2875557-9059409',
  delivered: 'Jul 7, 2020',
  items: [{
    itemName: 'GameCube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC, Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    price: 15.98,
    returnWindow: {
      returnWindowOpen: false,
      date: 'Aug 5, 2020'
    }
  }]
},
{
  orderPlaced: 'July 19, 2020',
  total: 44.53,
  shipTo: 'JS Masher',
  orderNumber: '113-9984268-1280257',
  delivered: 'Jul 20, 2020',
  items: [{
    itemName: 'The Timeless Way of Building',
    author: 'Alexander, Christopher',
    price: 41.53,
    returnWindow: {
      returnWindowOpen: false,
      date: 'Aug 19, 2020'
    }
  }]
},
{
  orderPlaced: 'Aug 4, 2020',
  total: 34.00,
  shipTo: 'JS Masher',
  orderNumber: '114-3941689-8772232',
  delivered: 'Aug 8, 2020',
  items: [{
    itemName: 'Javascript for impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    price: 31.55,
    returnWindow: {
      returnWindowOpen: false,
      date: 'Sep 7, 2020'
    }
  }]
}

];

console.log('Test Order:', 'Order Placed: ' + orderHistory[0].orderPlaced + ' Delivered: ' + orderHistory[0].delivered + ' Item: ' + orderHistory[0].items[1].itemName);
console.log('Full History:', orderHistory);
