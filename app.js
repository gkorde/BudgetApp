//Budget Controller
var budgetController = (function() {

  //some code

})();

//UI Controller
var UIController = (function()  {

  //some code

})();

//Global App Controller
var controller = (function(budgetCtrl, UICtrl)  {

  //some code
  var ctrlAddItem = function()  {
    // TODO: Get input field data
    // TODO: Add item to budget controller
    // TODO: add item to UI
    // TODO: Calculate budget
    // TODO: Display budget on UI

    console.log('CtrlAddItem was called');
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event)  {

    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
