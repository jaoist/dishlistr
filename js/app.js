// Nav behavior.

function expandMenu() {
    var x = document.getElementById("main-nav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}


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

    var fragment = createFrag('<div class="stack">'+
                            '<input type="text" class="ingredient" name="ingredients" placeholder="Ingredient:">'+
                            '<input type="number" class="amount" name="ingredient-amount" placeholder="Amount:" onchange="checkVal(this);">'+
                            '<div class="del-container">'+
                            '<button type="button" class="btn remove" onclick ="delIngredient(this)">Remove Ingredient</button>'+
                            '</div>'+
                            '</div>');
    
    var div = document.createElement("div")
    div.classList.add("ingredient-input")
    div.appendChild(fragment)
    document.getElementsByClassName('ingredients')[0].appendChild(div);
}

function delIngredient(target){
    target.parentNode.parentNode.parentNode.remove();
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
