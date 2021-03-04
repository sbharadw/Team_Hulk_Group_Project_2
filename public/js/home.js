$(document).ready(() => {
    let items;
    let user;
    let price;
    let userString;
    


    
    const getItems = () => {
        // main api call starts

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
                    var itemDescription = arr[index].description;
                    var itemType = arr[index].item_type;
                    var userId = arr[index].user_id;
                    console.log(userId);
                    var itemId = arr[index].id;

                    // getUser(userId)
                    fetch(`api/users/${userId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then((response) => response.json())
                        .then((userData) => {
                            console.log('Success in getting users:', data);
                            user = userData.first_name + " " + userData.last_name;
                            console.log(user);
                            userString = user;
                        
                            fetch(`/api/orders/${itemId}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            }).then((response) => response.json())
                            .then((orderData) => {
                                   //Create HTML elements which contain and display some of the selected API info. from the API response
                    price = orderData.price;
                    var section = document.querySelector('.carousel-inner');
                    // var carouselDiv = document.createElement('div');
                    // carouselDiv.setAttribute('class', 'carousel-item active'); 
                    var card = document.createElement('div');
                    card.setAttribute('class', 'card bg-primary mb-3 carousel-item');
                    card.classList.add('results-card-width');
                    var cardImage = document.createElement('img');
                    cardImage.setAttribute('class', 'img-fluid');
                    cardImage.setAttribute('alt', 'Responsive image');
                    cardImage.setAttribute('src', '');


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
                    var userInfo = document.createElement('p');
                    userInfo.setAttribute('class', 'card-text');
                    var priceInfo = document.createElement('p');
                    priceInfo.setAttribute('class', 'card-text');
                    var purchaseBtn = document.createElement('button');
                    purchaseBtn.setAttribute('type', 'button');
                    purchaseBtn.setAttribute('class', 'btn btn-danger');
                    purchaseBtn.textContent = 'Purchase';
                   
                    hTitle.innerHTML = '<b>' + "Item name: " + itemName + '</b>';
                    // pCategory.innerHTML = itemCategory;
                    pType.innerHTML = "Type: " + itemType;
                    p2Description.innerHTML = "Item description: " + itemDescription;
                    userInfo.innerHTML = "Seller: " + userString;
                    priceInfo.innerHTML = "Price: $" + price;
                    // carouselDiv.append(card);
                    card.append(cardBody);
                    cardBody.append(hTitle, pCategory, pType, p2Description, userInfo, priceInfo, purchaseBtn);
                    section.append(card);
                    console.log("created card");
                                
                            });
            
                        });
                });

            }).then().catch((error) => console.error("Error:", error));

            // main api call ends
    };


     getItems();

    // const getImages = (itemId) => {

    //     fetch(`api/images/${itemId}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
        
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Success in getting images for items:', data);

    //         }).catch((error) => console.error("Error:", error));
            
    // }



});


