const products = [
    {
        id: 101,
        name: "Amala Squash",
        image: "https://image1.jdomni.in/product/16122022/F6/D0/D1/D72443FA085F3C2B9C1520F5E8_1671131846499.jpg",
        price: 100,
        description: "1000 ml"
    },
    {
        id: 102,
        name: "Pachak",
        image: "https://image1.jdomni.in/product/21042020/A2/B5/39/F3480CF3A39F6E80851ACD7E37_1587448739821.jpeg",
        price: 100,
        description: "200 ml"
    },
    {
        id: 103,
        name: "Kokam Juice",
        image: "https://image1.jdomni.in/product/21042020/AE/18/F9/014B82806D64C642B8896A5160_1587448663585.jpeg",
        price: 115,
        description: "500 ml"
    },
    {
        id: 104,
        name: "Kokam Aagal",
        image: "https://image1.jdomni.in/product/15122022/50/C2/8C/F4788AFCE364813706F14BBEA2_1671045988704.jpg?fit=around|250:250",
        price: 125,
        description: "500 ml"
    },
    {
        id: 105,
        name: "Jamun Juice",
        image: "https://image1.jdomni.in/product/21042020/D6/7E/AF/67280DE870710F4352F9BEFC27_1587448634206.jpeg?fit=around|250:250",
        price: 280,
        description: "500 ml"
    },
    {
        id: 106,
        name: "Amla Pickle",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/amla-pickle-500gm-2217057342-tblj2lwt.jpg",
        price: 65,
        description: "200 gms"
    },
    {
        id: 107,
        name: "Chilly Pickle",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/chilly-pickle-200-gm-2010000289-wcaasju0.jpg",
        price: 65,
        description: "200 gms"
    },
    {
        id: 108,
        name: "Lime Pickle",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/lime-pickle-200-gm-2010000274-3742j59j.jpg",
        price: 65,
        description: "200 gms"
    },
    {
        id: 109,
        name: "Sweet Mango Pickle",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/sweet-mango-pickle-500-gm-2010000283-d5o3zmg6.jpg",
        price: 70,
        description: "200 gms"
    },
    {
        id: 110,
        name: "Sweet Lime Pickle",
        image: "https://image1.jdomni.in/product/16122022/89/A7/BC/0CC15715599B25939F55588BDA_1671133396725.jpg?fit=around|250:250",
        price: 70,
        description: "200 gms"
    },
    {
        id: 111,
        name: "Alphonso Mango Pulp",
        image: "https://image1.jdomni.in/product/21042020/99/53/E8/C38B8BEFEE272C0C57BFCA56CB_1587449125574.jpeg?fit=around|250:250",
        price: 105,
        description: "200 gms"
    },
    {
        id: 112,
        name: "Sandagi Mirachi",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/sandagi-mirachi-100-gm-375983387-v9sug.jpg",
        price: 70,
        description: "100 gms"
    },
    {
        id: 113,
        name: "Tak Mirachi ( Curd Chilli )",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/tak-mirachi-curd-chilli-50-gm-2022510837-v838z56f.jpg",
        price: 50,
        description: "100 gms"
    },
    {
        id: 114,
        name: "Chicken / Mutton Masala ",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/chicken-mutton-masala-250-gm-363563136-9sh7a.jpg",
        price: 85,
        description: "100 gms"
    },
    {
        id: 115,
        name: "Fish Curry Masala",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/fish-masala-machchi-masala-250gm-363563121-wgg0o.jpg",
        price: 85,
        description: "100 gms"
    },
    {
        id: 116,
        name: "Malvani Masala",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/malvani-masala-100-gm-2217057267-e3aseoz5.jpg",
        price: 85,
        description: "100 gms"
    },
    {
        id: 117,
        name: "Special Garam Masala",
        image: "https://image1.jdomni.in/product/09122020/42/CF/4E/7F76D3A90859D4FC72DC940C80_1607532621898.jpg?fit=around|250:250",
        price: 85,
        description: "100 gms"
    },
    {
        id: 118,
        name: "Shengdana (Peanut) Chutney",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/shengdana-peanut-chutney-100gm-2217057372-xd2fyeq2.jpg",
        price: 65,
        description: "100 gms"
    },
    {
        id: 119,
        name: "Sweet Kokam ",
        image: "https://image1.jdomni.in/product/16122022/7F/F2/0E/F4C5DA204FCA26E4D014DD2474_1671201004037.jpg?fit=around|250:250",
        price: 30,
        description: "50 gms"
    },
    {
        id: 120,
        name: "Jackfruit Poli ",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/jackfruit-poli-100gm-2217057515-2uz3w65r.jpg",
        price: 100,
        description: "100 gms"
    },
    {
        id: 121,
        name: "Mango Poli",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/mango-poli-100gm-2217057511-08zr86d1.jpg",
        price: 100,
        description: "100 gms"
    },
    {
        id: 122,
        name: "Jackfruit Chips",
        image: "https://content.jdmagicbox.com/quickquotes/images_main/jackfruit-chips-talalele-gare-100gm-2226464418-7druv5v3.jpg",
        price: 80,
        description: "100 gms"
    },
    {
        id: 123,
        name: "Kulith Pithi",
        image: "https://image1.jdomni.in/product/16122022/F1/E0/35/C2B6855CC6A1AD67DAB566DBBB_1671201018756.jpg?fit=around|250:250",
        price: 65,
        description: "100 gms"
    },
    {
        id: 124,
        name: "Dangar Pith",
        image: "https://chandrarajfoods.com/wp-content/uploads/2025/06/Dangar-Pith.jpg",
        price: 45,
        description: "100 gms"
    },
    {
        id: 125,
        name: "Modak Pith",
        image: "https://chandrarajfoods.com/wp-content/uploads/2025/06/Modak-Pith-Front.jpg",
        price: 90,
        description: "500 gms"
    },
    {
        id: 126,
        name: "Vada Pith",
        image: "https://chandrarajfoods.com/wp-content/uploads/2025/06/Vada-Pith-Front.jpg",
        price: 100,
        description: "500 gms"
    },
     {
        id: 127,
        name: "Cashew",
        image: "https://tse1.mm.bing.net/th/id/OIP.kW1mqwz2WJ7zu1DRozs1FwHaFU?r=0&pid=Api&h=220&P=0",
        price: 115,
        description: "100 gms"
     },
      {
        id: 127,
        name: "Raw Cashew",
        image: "https://tse1.mm.bing.net/th/id/OIP.Ki3zLiaRZ8wuYPdmXom_uwHaFc?r=0&pid=Api&h=220&P=0",
        price: 105,
        description: "100 gms"
     },
     
];
let cart = [];
showProducts(products);



function showProducts(productList){
    const productcontainer = document.getElementById("product_container");
    productcontainer.innerHTML="";
productList.forEach(function (product) {

    const card = document.createElement("div");
    card.classList.add("card");
    const section1 = document.createElement("section");
    section1.classList.add("product_logo");
    const product_image = document.createElement("img");
    product_image.src = product.image;
    section1.appendChild(product_image);
    const section2 = document.createElement("section");
    section2.classList.add("product_detail");
    const productname = document.createElement("p");
    productname.textContent = product.name;
    const productprice = document.createElement("p");
    productprice.textContent = product.price;
    const addcart = document.createElement("button");
    addcart.textContent = "Add";
    addcart.addEventListener("click", addBasketItem);
    function addBasketItem() {
        // alert(product.name);
        const existingproduct = cart.find(function (prod) {
            return prod.id === product.id;
        });
        if (existingproduct) {
            existingproduct.quantity++;
        }
        else {
            const items = {
                id: product.id,
                name: product.name,       
                price: product.price,
                quantity: 1
            };
            cart.push(items);
            document.getElementById("qty").firstChild.textContent=cart.length;
        }  
        console.log(cart);

    };
    section2.appendChild(productname);
    section2.appendChild(productprice);
    section2.appendChild(addcart);
    card.appendChild(section1);
    card.appendChild(section2);
    
    productcontainer.appendChild(card);
    const Search= document.getElementById("search");
    
    Search.addEventListener("input",searchProduct);
});
}



const cartLink = document.getElementById("cartModal");
cartLink.addEventListener("click",showCart);
function showCart(){
    let subTotal=0;
    const billTable = document.getElementById("billing");
    let tableCode = "";
    tableCode+=`<table class="table table-bordered table-striped">
<tr>
<th>Product Id</th>
<th>Product Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
<th>Action</th>
</tr>`;

cart.forEach(function(item){
let total = item.price*item.quantity;
subTotal=subTotal+total;

let x =`<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.price}</td>
<td>
<button class="btn btn-danger btn-sm" onclick="decreaseQty(${item.id})">-</button>
<span>${item.quantity}</span>
<button class="btn btn-success btn-sm" onclick="increaseQty(${item.id})">+</button>
</td>
<td>${total}</td>
<td class="text-center">
<button class="btn btn-outline-danger btn-sm" onClick="removeItem(${item.id})">
<i class="bi bi-trash"></i>
</button>
</td>
</tr>`;
tableCode+=x;
})
 tableCode+= `<tr class="text-end">
        <td colspan="4">Total Billing</td>
        <td colspan="2">${subTotal}</td>
    </tr>`;

tableCode+=`</table>`;
billTable.innerHTML=tableCode;
}

function increaseQty(productId){
     const existingproduct = cart.find(function (prod) {
            return prod.id === productId;
        });
        existingproduct.quantity++;
        showCart();

}
function decreaseQty(productId){
     const existingproduct = cart.find(function (prod) {
            return prod.id === productId;
        });
        let checkqty=existingproduct.quantity-1;
        if(checkqty>1){
         existingproduct.quantity--;
        }
        else{
            if(existingproduct.quantity==1){
                alert("Do you really want to remove this item? use remove button")

            }
            existingproduct.quantity=1;
            
        }
        showCart();
    }
    function removeItem(productid){
    cart = cart.filter(function(prod){
            return prod.id!==productid;
        })
        showCart();
        document.getElementById("qty").firstChild.textContent=cart.length;0
    }
  function searchProduct(){
    console.log("hello");

   let  searchedText= document.getElementById("search").value;
 
   const filterProducts= products.filter(function(prod){
       return prod.name.toLowerCase().includes(searchedText.toLowerCase()) ;
    });
    console.log(filterProducts);
    showProducts(filterProducts);
}
function buyNow() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Save cart details
    localStorage.setItem(
        "kokanmewaCart",
        JSON.stringify(cart)
    );

    // Open checkout page
    window.location.href = "checkout.html";
}
    

