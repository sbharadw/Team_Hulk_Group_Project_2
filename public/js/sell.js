
  const sellBtn = $("#sell");
  console.log(sellBtn);


sellBtn.on("click", event => {


event.preventDefault();

console.log("in sell js")

  const username = $("#user-name").val().trim();
  console.log("username"+username);

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
    username: username,
    itemName: itemName,
    itemDescription: itemDescription,
    itemType: itemType,
    itemCategoryId: itemCategoryId,
    price: price,

  };

  console.log(sellItemData);


  if (!sellItemData.price) {
  console.log('no price')
    return;
  }
  if(!itemName){
  console.log('enter item name');
    return;
  }
  // If we have an price and item name, run the sell function
  sellItem(sellItemData.username, sellItemData.itemName,  sellItemData.itemDescription, sellItemData.itemType, sellItemData.itemCategoryId, sellItemData.price);

});


function sellItem(username, itemName, itemDescription, itemType, itemCategoryId, price) {
  $.post("/api/sell", {
    username: username,
    title: itemName,
    description: itemDescription,
    item_type: itemType,
    item_category_id: itemCategoryId,
    price: price,

  })
    .then(() => {
      window.location.replace("/homepage");
  })

}

