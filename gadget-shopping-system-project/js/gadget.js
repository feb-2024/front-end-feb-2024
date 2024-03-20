let allCartGadgets = [];
let allGadgets = []; // we have moved this JS object array to db.json file as json object array

function loadGadgets() {
  // the purpose of this function is to load the gadgets data from the backend application
  // but the backend application is not ready yet
  // so we use a json-server which serves as the backend application
  // the json-server works on db.json file for data
  // the json-server automatically exposes endpoints based on the data that you have in db.json file.
  // how do I get the json-server?
  //        - we will install json-server using npm
  //        - npm is available if we install nodejs
  //        - steps
  //             - open the terminal in vscode ( ctrl + ` )
  //             - move into the gadget-shopping-project folder ( cd gadget-shopping-project )
  //             - use npm and install json server locally ( npm install json-server)
  //             - by running the above command we will get a node-modules folder and a package.json file
  //             - now start the json server and provide the db.json file input to the server (npx json-server --watch db.json)
  //             - the above command starts the json server and the endpoints are exposed based on the data in db.json file
  // next use fetch api and consume the endpoint "http://localhost:3000/gadgets"
  // the fetch api returns a Promise object

  fetch("http://localhost:3000/gadgets")
    .then((res) => res.json())
    .then((response) => {
      //console.log(data1);
      allGadgets = response;
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
  //        - the code here has been moved to loadGadgets()
}

function addToCart(gadgetId) {
  // traverse the allGadgets array and findout the gadget with the id gadgetId
  for (let eachGadget of allGadgets) {
    if (eachGadget.id == gadgetId) {
      // then add this gadget object to the array of allCartGadgets
      //allCartGadgets.push(eachGadget);
      // above line commented because we have the array to db.json file
      // so we will use fetch api to post the data to json server
      fetch("http://localhost:3000/cart", {
        method: "POST", // get, post, put, delete
        headers: { "Content-Type": "application/json" }, // fixed this
        body: JSON.stringify(eachGadget),
      })
        .then((resp) => resp.json())
        .then((response) => displayCart())
        .catch((error) => console.log(error));
      break;
    }
  }
}

function loadCart() {
  fetch("http://localhost:3000/cart")
    .then((res) => res.json())
    .then((response) => {
      allCartGadgets = response;
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
    });
}

function displayCart() {
  loadCart();
}

function removeFromCart(gadgetId) {
  for (let i = 0; i < allCartGadgets.length; i++) {
    if (allCartGadgets[i].id == gadgetId) {
      fetch("http://localhost:3000/cart/"+gadgetId, {
        method: "DELETE", // get, post, put, delete
        headers: { "Content-Type": "application/json" },
      })
        .then((resp) => resp.json())
        .then((response) => displayCart())
        .catch((error) => console.log(error));
      break;
    }
  }
}
