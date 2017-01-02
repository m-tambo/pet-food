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
   for (let i=0; i < brands.pet_brands.length; i++) {
      for (let j=0; j < brands.pet_brands[i].types.length; j++) {
         for ( let k=0; k < brands.pet_brands[i].types[j].volumes.length; k++) {
            document.querySelector('#foodTable').innerHTML +=
            (`
               <tr>
                  <td>${brands.pet_brands[i].name}</td>
                  <td>${brands.pet_brands[i].breed}</td>
                  <td>
                     <ul>
                        <li>${brands.pet_brands[i].types[j].type}
                        |
                        ${brands.pet_brands[i].types[j].volumes[k].name}
                        |
                        ${brands.pet_brands[i].types[j].volumes[k].price}
                        </li>
                     </ul>
                  </td>
               </tr>
         `)
         }
      }
   }
}
