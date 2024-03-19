let allCartGadgets = [];
let allGadgets = []; // we have moved this JS object array to db.json file as json object array

function loadGadgets() {
  // the purpose of this function is to fetch the json data from db.json file
  //- to do this we need to use fetch API
  //- whenever we perform any crud operation on db.json file use fetch API
  // and convert to JS object array
  //- to do this Json.parse() function
  // and store it in allGadgets array
  fetch("http://localhost:3000/gadgets")
    .then((res) => res.json())
    .then((data1) => {
      console.log(data1);
      allGadgets = data1;
      let data = "";
      for (let eachGadget of allGadgets) {
        data += `<div class='flex-item'>
                    <img src='${eachGadget.gadgetImageUrl}'>
                    <div><button type='button' id='add-cart' onclick='addToCart(${eachGadget.id})'>Add to Cart</button></div>
                    <h4>Gadget Name: ${eachGadget.gadgetName}</h4>
                    <p>Gadget Category: ${eachGadget.gadgetCategory}</p>
                    <p>Gadget Cost: Rs.${eachGadget.gadgetCost}</p>
                    
                </div>`;
      }
      document.getElementById("flex-container").innerHTML = data;
    })
    .catch((error) => console.log(error));
  // and call this function in displayGadgets()
}

function displayGadgets() {
  loadGadgets();

  // traverse through the allGadgets array and display them
}

function addToCart(gadgetId) {
  //alert(gadgetId);
  // traverse the allGadgets array and findout the gadget with the id gadgetId
  for (let eachGadget of allGadgets) {
    if (eachGadget.id == gadgetId) {
      // then add this gadget object to the array of allCartGadgets
      allCartGadgets.push(eachGadget);
      break;
    }
  }
  //console.log(allCartGadgets);
  // then display the allCartGadgets array in a table
  displayCart();
}

function displayCart() {
  let totalCost = 0;
  let data = `<h3 class="cart-head">CART ITEMS</h3>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>COST</th>
                            <th></th>
                        </tr>
                    <thead>
                    <tbody>`;
  for (let eachCartItem of allCartGadgets) {
    totalCost += eachCartItem.gadgetCost;
    data += `<tr>
                    <td>${eachCartItem.id}</td>
                    <td>${eachCartItem.gadgetName}</td>
                    <td>Rs.${eachCartItem.gadgetCost}</td>
                    <td><button type='button' onclick='removeFromCart(${eachCartItem.id})'><span class="material-symbols-outlined trash">
                    delete
                    </span></button></td>
                </tr>`;
  }
  data += `</tbody></table>`;
  data += `<h4>TOTAL COST : Rs. ${totalCost}</h4>`;
  document.getElementById("div1").innerHTML = data;
}

function removeFromCart(gadgetId) {
  for (let i = 0; i < allCartGadgets.length; i++) {
    if (allCartGadgets[i].id == gadgetId) {
      allCartGadgets.splice(i, 1);
      break;
    }
  }
  displayCart();
}
