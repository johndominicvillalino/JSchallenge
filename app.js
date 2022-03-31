const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon']
const fridge = []

//Challenge: Please fill the fridge array with 5 items of your choice. 
fridge.push('Ice')
fridge.push('Beer')
fridge.push('Chicken')
fridge.push('BBQ Sauce')
fridge.push('Water')

//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.
const [chicharon] = buyList;
buyList.shift()
fridge.push(chicharon)

//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveUp() {

    const moveThis = fridge[0];

    if(moveThis.length < 1) {
        return;
    }

    buyList.unshift(moveThis)
    fridge.shift()
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.

function moveDown() {

    const listLen = buyList.length
    const lastPos = listLen - 1;
    if(buyList[lastPos].length < 1){
        return
    }
    fridge.push(buyList[lastPos])
    buyList.pop()
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge

}


downButton.addEventListener('click', moveDown)

buyListDisplay.innerHTML = buyList
fridgeListDisplay.innerHTML = fridge