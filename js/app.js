
function createFrag(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function addIngredient (){

    var fragment = createFrag('<div class="ingredient-input">'+
                            '<div class="stack">'+
                            '<input type="text" id="ingredients" name="ingredients" placeholder="Ingredient:">'+
                            '<input type="number" id="ingredient-amount" name="ingredient-amount" placeholder="Amount:" onchange="checkVal(this);">'+
                            '</div>'+
                            '<div class="stack">'+
                            '<button type="button" class="btn add" onclick="return addIngredient()">Add More Ingredients</button>'+
                            '<button type="button" class="btn remove" onclick ="delIngredient(this)">Remove Ingredient</button>'+
                            '</div>');
    
    var div = document.createElement("div")
    div.classList.add("ingredient-input")
    div.appendChild(fragment)
    document.getElementById('ingredients').appendChild(div);
}

function delIngredient(target){
    target.parentNode.parentNode.remove();
}

//--- Create event listener, stop default behavior on add buttons.

var addButtons = document.getElementsByClassName('btn add');

for (var i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', 
        function(event){
            event.preventDefault();
        });
    }

//--- Create event listener, stop default behavior on del buttons.
var delButtons = document.getElementsByClassName('btn del')

for (var i = 0; i < delButtons.length; i++){
        delButtons[i].addEventListener('click', 
        function(event){
            console.log(this.parentElement.parentElement)
        })    
    }
