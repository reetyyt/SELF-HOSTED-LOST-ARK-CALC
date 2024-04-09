"use strict";

var fetched; // var requestOptions = {
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

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
fetch("https://www.lostarkmarket.online/api/export-market-live/North%20America%20East?items=solar-blessing-2", requestOptions).then(function (response) {
  return response.json();
}).then(function (result) {
  console.log(result);
  var itemInfoContainer = document.getElementById('itemInfo');
  var item = result; // Assuming 'result' contains the fetched data

  result.id; // Create a paragraph element to display the name

  var nameElement = document.createElement('p');
  nameElement.textContent = "Name: ".concat(item.name); // Create a paragraph element to display the average price

  var avgPriceElement = document.createElement('p');
  avgPriceElement.textContent = "Average Price: ".concat(item.avgPrice); // Append the created elements to the container

  itemInfoContainer.appendChild(nameElement);
  itemInfoContainer.appendChild(avgPriceElement);
})["catch"](function (error) {
  return console.log('error', error);
});