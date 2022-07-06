const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheesburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheesburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]
cardArray.sort(()=> 0.5 - Math.random());
const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i = 0; i < 10; i++) {
       const card =  document.createElement('img')
       card.setAttribute("scr", "images/blank.png")
       card.setAttribute('data-id', i)
       gridDisplay.appendChild(card)
    }
}
createBoard()
function test() {
    var test =  document.querySelector('.test')
    var test2 = document.createElement('img')
    test.setAttribute('scr', 'images/blank.png')
    test.appendChild(test2)
    e.preventDefault()
}
test()