const buyBtn = $("#buyBtn");
console.log(buyBtn);
let items;

buyBtn.on("click", event =>{
  event.preventDefault();
  console.log("working click buy button");
  window.location.replace("/buy");

});

   


  
  


  