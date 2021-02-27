
$(document).ready(() => {
    getItems();

});

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
      
       
    
        const itemCard = document.createElement('div');
        const userName = document.createElement('p');
        const price = document.createElement('p');
        const name = document.createElement('p');
        const type = document.createElement('p');
        const description = document.createElement('p');
