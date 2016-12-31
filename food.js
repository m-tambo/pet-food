let foodData = {};




// load json
function loadBrands () {
   var foodData = new XMLHttpRequest();
   foodData.addEventListener("load", populatePage);
   foodData.open("GET", 'brands.json');
   foodData.send();
   console.log("data:", foodData)
}

loadBrands()

function populatePage () {


}
