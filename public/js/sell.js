const sellBtn = $("#sell");
console.log(sellBtn);

console.log("sell js is loading")

sellBtn.on("click", event => {


event.preventDefault();

console.log("in sell js")

  const itemTitle = $("#title").val().trim();
  console.log("itemName"+itemTitle);

  const itemDescription = $("#description").val().trim();
  console.log("itemDescription"+itemDescription);

  const itemType = $("#item-type").val().trim();
  console.log("itemType"+itemType);

  const itemCategory = $("#item-category").val().trim();
  console.log("itemCategoryName"+itemCategory);

  const price = $("#price").val().trim();
  console.log("price"+price);

  const sellItemData = {
    itemTitle: itemTitle,
    itemDescription: itemDescription,
    itemType: itemType,
    itemCategory: itemCategory,
    price: price
  };

  

  console.log(sellItemData);
  


  if (!sellItemData.price) {
  console.log('no price')
   return;
  }

  if(!sellItemData.itemTitle){
  console.log('enter item title');
    return;
  }
  // If we have an item name, run the sellItem function
  sellItem(sellItemData.itemTitle,  sellItemData.itemDescription, sellItemData.itemType, sellItemData.itemCategory, sellItemData.price);
   
  
});


function sellItem(itemTitle, itemDescription, itemType, itemCategory, price) {
  $.post("/api/sell", {
    title: itemTitle,
    description: itemDescription,
    item_type: itemType,
    item_category: itemCategory
  })
    .then((data) => {
      console.log(data)
      $.post("/api/orders", {
      price: price,
      item_id: data.id,
      seller_id: data.user_id
  })
  .then(() => {
    window.location.replace("/homepage");
   })
    
   })
    
}









