let allCartGadgets = [];
let allGadgets = [
    {
        gadgetId: 1001,
        gadgetName: "Dell Inspiron 14 5000",
        gadgetCategory: "Laptop",
        gadgetCost: 60000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1002,
        gadgetName: "iPad Air2",
        gadgetCategory: "Tablet",
        gadgetCost: 80000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
        gadgetId: 1003,
        gadgetName: "Galaxy S23",
        gadgetCategory: "Mobile",
        gadgetCost: 70000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1004,
        gadgetName: "iPhone 14",
        gadgetCategory: "Mobile",
        gadgetCost: 65000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1005,
        gadgetName: "Dell Inspiron 14 5000",
        gadgetCategory: "Laptop",
        gadgetCost: 60000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1006,
        gadgetName: "iPad Air2",
        gadgetCategory: "Tablet",
        gadgetCost: 80000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
        gadgetId: 1007,
        gadgetName: "Galaxy S23",
        gadgetCategory: "Mobile",
        gadgetCost: 70000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1008,
        gadgetName: "iPhone 14",
        gadgetCategory: "Mobile",
        gadgetCost: 65000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1009,
        gadgetName: "Dell Inspiron 14 5000",
        gadgetCategory: "Laptop",
        gadgetCost: 60000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1010,
        gadgetName: "iPad Air2",
        gadgetCategory: "Tablet",
        gadgetCost: 80000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
        gadgetId: 1011,
        gadgetName: "Galaxy S23",
        gadgetCategory: "Mobile",
        gadgetCost: 70000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1012,
        gadgetName: "iPhone 14",
        gadgetCategory: "Mobile",
        gadgetCost: 65000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1013,
        gadgetName: "Dell Inspiron 14 5000",
        gadgetCategory: "Laptop",
        gadgetCost: 60000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1014,
        gadgetName: "iPad Air2",
        gadgetCategory: "Tablet",
        gadgetCost: 80000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1590252973599-bb37fb327a55?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }, 
    {
        gadgetId: 1015,
        gadgetName: "Galaxy S23",
        gadgetCategory: "Mobile",
        gadgetCost: 70000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1706832608032-61cced969d6a?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        gadgetId: 1016,
        gadgetName: "iPhone 14",
        gadgetCategory: "Mobile",
        gadgetCost: 65000,
        gadgetImageUrl: "https://images.unsplash.com/photo-1697898706719-bce6e007c817?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];


function displayGadgets(){
    
    // traverse through the allGadgets array and display them
    let data = '';
    for(let eachGadget of allGadgets){
        data += `<div class='flex-item'>
                    <img src='${eachGadget.gadgetImageUrl}'>
                    <div><a href='cart-gadgets.html' target='iframe-cart' id='add-cart' onclick='addToCart(${eachGadget.gadgetId})'>Add to Cart</a></div>
                    <h4>Gadget Name: ${eachGadget.gadgetName}</h4>
                    <p>Gadget Category: ${eachGadget.gadgetCategory}</p>
                    <p>Gadget Cost: ${eachGadget.gadgetCost}</p>
                    
                </div>`;
    }
    document.getElementById("flex-container").innerHTML = data;
}


function addToCart(gadgetId){
    //alert(gadgetId);
    // traverse the allGadgets array and findout the gadget with the id gadgetId
    for(let eachGadget of allGadgets){
        if(eachGadget.gadgetId == gadgetId){
            // then add this gadget object to the array of allCartGadgets
            allCartGadgets.push(eachGadget);
            break;
        }
    }
    //console.log(allCartGadgets);
    // then display the allCartGadgets array in a table
    //displayCart();
}

function displayCart(){
    let data = `<table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>COST</th>
                            <th></th>
                        </tr>
                    <thead>
                    <tbody>`
    for(let eachCartItem of allCartGadgets){
        data += `<tr>
                    <td>${eachCartItem.gadgetId}</td>
                    <td>${eachCartItem.gadgetName}</td>
                    <td>${eachCartItem.gadgetCost}</td>
                    <td><button type='button'>Remove</button></td>
                </tr>`;
    }
    data += `</tbody></table>`;
    document.getElementById("div1").innerHTML = data;
}
   