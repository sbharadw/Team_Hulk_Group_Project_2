let items;

const getItems = () => {

    console.log('Success in getting items on buy page');
    fetch('api/items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success in getting items on buy page:', data);
            items = data;
        })
        .catch((error) => console.error("Error:", error));

};

$(document).ready(() => {
    getItems();


  

    /**
     * @description for loop to create an individual listening cards to push on DOM of the buy page
     */
    for (var i = 0; i < 2; i++) {
        itemContainer = $("<div>");
        itemContent = $("<span>");
        title = $("<h1>").text(items.title);
        description = $("<h3>").text(items.description);
        type = $("<h4>").text(items.item_type);

        /*TODO
        read data from user table and price from ???
        */
        price = $("<h4>").text("$ " + items.price);
        user = $("<p>").text(items.first_name + " " + items.last_name);

        itemContent.attr("class", "itemContent");
        itemContent.append(type, price, user);
        itemContainer.attr("class", "itemContainer");
        itemContainer.append(title, description,);
        $(".container").append(itemContainer);
    }

});



