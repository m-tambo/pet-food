let foodData
let brands



// define funsiton that loads json
function loadBrands () {
   var foodData = new XMLHttpRequest();
   foodData.addEventListener("load", populatePage);
   foodData.open("GET", 'brands.json');
   foodData.send();
}

loadBrands()


// parse json and populate page
function populatePage (e) {
   brands = JSON.parse(e.target.responseText)
   console.log("brands:", brands)

}
