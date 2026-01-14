/***********************
 * PRODUCT DATA
 ***********************/
const PRODUCTS = {
  necklace1: {
    id: "necklace1",
    name: "Pearl Drop Necklace",
    price: 120,
    image: "assets/necklace1.jpg",
    description:
      "An elegant pearl drop necklace designed for timeless sophistication and everyday luxury."
  },
  necklace2: {
    id: "necklace2",
    name: "Minimal Gold Chain",
    price: 95,
    image: "assets/necklace2.jpg",
    description:
      "A sleek gold chain necklace that blends minimalism with modern elegance."
  },
  necklace3: {
    id: "necklace3",
    name: "Classic Pearl Strand",
    price: 150,
    image: "assets/necklace3.jpg",
    description:
      "A classic pearl strand necklace crafted for refined and graceful styling."
  },

  earring1: {
    id: "earring1",
    name: "Pearl Stud Earrings",
    price: 60,
    image: "assets/earring1.jpg",
    description:
      "Delicate pearl stud earrings perfect for daily wear or special occasions."
  },
  earring2: {
    id: "earring2",
    name: "Gold Hoop Earrings",
    price: 75,
    image: "assets/earring2.jpg",
    description:
      "Modern gold hoop earrings with a lightweight and elegant finish."
  },
  earring3: {
    id: "earring3",
    name: "Drop Pearl Earrings",
    price: 90,
    image: "assets/earring3.jpg",
    description:
      "Sophisticated drop pearl earrings designed to elevate your look."
  },

  bracelet1: {
    id: "bracelet1",
    name: "Minimal Gold Bracelet",
    price: 85,
    image: "assets/bracelet1.jpg",
    description:
      "A minimal gold bracelet with a refined finish for effortless elegance."
  },
  bracelet2: {
    id: "bracelet2",
    name: "Pearl Charm Bracelet",
    price: 95,
    image: "assets/bracelet2.jpg",
    description:
      "A pearl charm bracelet that blends modern style with classic beauty."
  },
  bracelet3: {
    id: "bracelet3",
    name: "Classic Chain Bracelet",
    price: 70,
    image: "assets/bracelet3.jpg",
    description:
      "A timeless chain bracelet designed for versatile everyday wear."
  }
};

/***********************
 * LOAD PRODUCT
 ***********************/
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = PRODUCTS[productId];

if (!product) {
  document.body.innerHTML = "<h2 style='padding:40px'>Product not found</h2>";
}

/***********************
 * RENDER PRODUCT
 ***********************/
document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent = product.price;
document.getElementById("productImg").src = product.image;
document.getElementById("productDesc").textContent = product.description;

/***********************
 * QUANTITY CONTROL
 ***********************/
let quantity = 1;

function changeQty(change) {
  quantity += change;
  if (quantity < 1) quantity = 1;
  document.getElementById("qty").textContent = quantity;
}

/***********************
 * CART LOGIC
 ***********************/
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  // Optional: reset quantity
  quantity = 1;
  document.getElementById("qty").textContent = quantity;

  // Optional UI feedback
  alert("Item added to cart");
}
