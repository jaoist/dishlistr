



//--- I stole this from Stack Overflow
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

function addIngredient (){

    debugger;
   
    var fragment = create('<label for="ingredients">Enter the ingredients</label>'+
    '<input type="text" id="ingredients" name="ingredients" placeholder="Ingredient:"><br>'
    +'<label for="ingredient-amount">And the amount</label>'
    +'<input type="number" id="ingredient-amount" name="ingredient-amount" placeholder="Amount:" onchange="checkVal(this);">'
    +'<button type="button" class="btn add" onclick="return addIngredient()">Add More Ingredients</button>'
    +'<button type="button" class="btn remove" onclick ="delIngredient()">Remove Ingredient</button><br>');
    document.getElementById('ingredient-form').appendChild(fragment);
}

function delIngredient(){


}

//--- Stop default behavior on add buttons.

var addButtons = document.getElementsByClassName('btn add');

for (var i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', 
        function(event){
            event.preventDefault();
        });
    }