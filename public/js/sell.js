const sellBtn = $("#sell");
console.log(sellBtn);

sellBtn.on("click", event => {


event.preventDefault();

console.log("in sell js")

  const userId = $("#user-id").val().trim();
  console.log("username:" + userId);

  const itemName = $("#title").val().trim();
  console.log("itemName"+itemName);

  const itemDescription = $("#description").val().trim();
  console.log("itemDescription"+itemDescription);

  const itemType = $("#item-type").val().trim();
  console.log("itemType"+itemType);

  const itemCategoryId = $("#item-category-id").val().trim();
  console.log("itemCategoryId"+itemCategoryId);

  const price = $("#price").val().trim();
  console.log("price"+price);

  const sellItemData = {
    userId: userId,
    itemName: itemName,
    itemDescription: itemDescription,
    itemType: itemType,
    itemCategoryName: itemCategoryId,
   // price: price
  };

  const order = {
  userId: userId,
  price: price
  }

  console.log(sellItemData);
  console.log(order);


  if (!order.price) {
  console.log('no price')
    return;
  }
  if(!sellItemData.itemName){
  console.log('enter item name');
    return;
  }
  // If we have an price and item name, run the sell function
  sellItem(sellItemData.userId, sellItemData.itemName,  sellItemData.itemDescription, sellItemData.itemType, sellItemData.itemCategoryName);
  addToOrder(order.price);

});


function sellItem(userId, itemName, itemDescription, itemType, itemCategoryName) {
  $.post("/api/sell", {
    user_id: userId,
    title: itemName,
    description: itemDescription,
    item_type: itemType,
    item_category_id: itemCategoryName
   // price: price
  })
    .then(() => {
      window.location.replace("/homepage");
  })

}

//Not working ---- Currently working on this please do not change

function addToOrder(price) {
  $.post("/api/order", {
    //user_id: userId,
    price: price
  })
    .then(() => {
      window.location.replace("/homepage");
  })

}

