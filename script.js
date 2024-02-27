const formInput = document.getElementById("item-form");
const button = document.getElementById(".btn");
const textInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function onSubmit(e){
    e.preventDefault();
    const newInputValue = textInput.value
    if(newInputValue === ''){
        alert('Please add an item');
        return;
    }
    const form = new FormData(formInput);
    const newList = document.createElement('li');
    newList.appendChild(document.createTextNode(newInputValue));
    const newButton = createButton("remove-item btn-link text-red");
    newList.appendChild(newButton);
    itemList.appendChild(newList)
    textInput = '';
    console.log('success');
}

function createButton(classes){
   const newButton = document.createElement('button');
   newButton.className = classes;
   newButton.appendChild(createIcon('fa-solid fa-xmark'));
   return newButton;
}

function createIcon(classes){
    const v = document.createElement('i');
    v.className = classes;
    return v;
}
// Event Listeners
formInput.addEventListener('submit', onSubmit);


