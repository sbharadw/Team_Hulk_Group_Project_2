

$(document).ready(() => {
    let items;

    const getItems = () => {

        fetch('api/items', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                items = data;
                console.log('Success in getting items on buy page:', data);

                items.forEach((item, index, arr) => {
                    var itemName = arr[index].title;
                    //  TODO - var itemCategory= arr[index].ItemCategoryId;
                    //  TODO - var user= read from other table;
                    var itemDescription = arr[index].description;
                    var itemType = arr[index].item_type;

                    //Create HTML elements which contain and display some of the selected API info. from the API response
                    var section = document.querySelector('#section');
                    var card = document.createElement('div');
                    card.setAttribute('class', 'card text-white bg-primary mb-3');
                    card.classList.add('results-card-width');
                    //var cardImage = document.createElement('div');
                    //cardImage.setAttribute('class', 'image-pro');
                    var cardBody = document.createElement('div');
                    cardBody.setAttribute('class', 'card-body');
                    var hTitle = document.createElement('h5');
                    hTitle.setAttribute('class', 'card-title');
                    var pCategory = document.createElement('p');
                    pCategory.setAttribute('class', 'card-text');
                    var pType = document.createElement('p');
                    pType.setAttribute('class', 'card-text');
                    var p2Description = document.createElement('p');
                    p2Description.setAttribute('class', 'card-text');

                    hTitle.innerHTML = '<b>' + itemName + '</b>';
                    // pCategory.innerHTML = itemCategory;
                    pType.innerHTML = itemType;
                    p2Description.innerHTML = itemDescription;
                    card.append(cardBody);
                    cardBody.append(hTitle, pCategory, pType, p2Description);
                    section.append(card);
                    console.log("created card");


                });

            }).catch((error) => console.error("Error:", error));


    };


    getItems();


});











