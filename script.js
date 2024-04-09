let fetched;

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };
  
//   fetch("https://www.lostarkmarket.online/api/export-market-live/North%20America%20East?items=solar-blessing-2", requestOptions)
//     .then(response => response.json())
//     .then(result =>{
//       fetched=result
//       console.log(fetched)
//     })
//     .catch(error => console.log('error', error));

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://www.lostarkmarket.online/api/export-market-live/North%20America%20East?items=solar-blessing-2", requestOptions)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const itemInfoContainer = document.getElementById('itemInfo');
        const item = result; // Assuming 'result' contains the fetched data
        result.id;
        // Create a paragraph element to display the name
        const nameElement = document.createElement('p');
        nameElement.textContent = `Name: ${item.name}`;
        
        // Create a paragraph element to display the average price
        const avgPriceElement = document.createElement('p');
        avgPriceElement.textContent = `Average Price: ${item.avgPrice}`;
        
        // Append the created elements to the container
        itemInfoContainer.appendChild(nameElement);
        itemInfoContainer.appendChild(avgPriceElement);
    })
    .catch(error => console.log('error', error));
