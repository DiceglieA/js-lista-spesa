// const arrGroceryList = []

const arrRisoPatateCozz = [
    'aglio',
    'olio',
    'cipolla',
    'przzemolo',
    'pomodori',
    'sale',
    'olio',
    'patate',
    'formaggio',
    'pepe',
    'riso',
    'cozze',
    'zucchine',
    'uova',
    
]

const eleGroceryList = document.querySelector('.lista-spesa');
// const inputGroceryItem = document.querySelector('#input-spesa');
// const eleGroceryForm = document.querySelector('form');

let i = 0
//console.log(arrRisoPatateCozz[i])

while (i < arrRisoPatateCozz.length) {
    eleGroceryList.innerHTML += `<li>${arrRisoPatateCozz[i]}</li>`
    console.log()
    i++    
}


// eleGroceryForm.addEventListener('submit', function(event) {
// 	event.preventDefault();

// 	if (inputGroceryItem.value) {
		
// 		arrGroceryList.push(inputGroceryItem.value);
// 		eleGroceryList.innerHTML += `<li>${inputGroceryItem.value}</li>`;
// 		inputGroceryItem.value = '';
// 	}
// });

//  for (let i = 0; i < arrRisoPatateCozz.length; i++) {
//  	eleGroceryList.innerHTML += `<li>${arrRisoPatateCozz[i]}</li>`;
//  }