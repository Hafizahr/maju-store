const DEFAULT_SETTINGS = {
  storeName: "MAJU",
  whatsapp: "27820000000",
  currency: "R",
  tagline: "Online Style & Tech Hub"
};

const DEFAULT_PRODUCTS = [
  {id:1,name:"Classic MAJU T-Shirt",category:"Clothing",price:299,stock:10,description:"Comfortable everyday T-shirt.",image:""},
  {id:2,name:"Premium Hoodie",category:"Clothing",price:599,stock:8,description:"Modern hoodie for everyday wear.",image:""},
  {id:3,name:"Wireless Headphones",category:"Electronics",price:899,stock:6,description:"Wireless audio for work and travel.",image:""},
  {id:4,name:"Smart Watch",category:"Electronics",price:1299,stock:5,description:"Modern smartwatch with useful features.",image:""},
  {id:5,name:"Everyday Backpack",category:"Accessories",price:449,stock:9,description:"Practical backpack for daily use.",image:""},
  {id:6,name:"Classic Sunglasses",category:"Accessories",price:249,stock:12,description:"Simple and stylish everyday sunglasses.",image:""}
];

function getProducts(){
  try {
    const saved = localStorage.getItem("maju_products");
    if(saved) return JSON.parse(saved);
  } catch(e){}
  localStorage.setItem("maju_products", JSON.stringify(DEFAULT_PRODUCTS));
  return DEFAULT_PRODUCTS;
}
function saveProducts(products){ localStorage.setItem("maju_products", JSON.stringify(products)); }
function getSettings(){
  try { return {...DEFAULT_SETTINGS, ...(JSON.parse(localStorage.getItem("maju_settings"))||{})}; }
  catch(e){ return {...DEFAULT_SETTINGS}; }
}
function saveSettings(settings){ localStorage.setItem("maju_settings", JSON.stringify(settings)); }
function getOrders(){
  try { return JSON.parse(localStorage.getItem("maju_orders")) || []; }
  catch(e){ return []; }
}
function saveOrders(orders){ localStorage.setItem("maju_orders", JSON.stringify(orders)); }
function money(n){ return Number(n||0).toLocaleString("en-ZA",{minimumFractionDigits:0,maximumFractionDigits:2}); }
function esc(s=""){ return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m])); }
