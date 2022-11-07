// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];
////////====================///////////////////////=====================///////////////////////



// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

//1A [X]-----------------------------------
const typeTV = inventory.map((inventory) => {
  return inventory.type;
});
console.log(typeTV);


//1B [X]
let soldOut = inventory.filter((inventory) => {
  if(inventory.sold === inventory.originalStock){
    return inventory;
  }
});
console.log(soldOut);


// //1C  [X]
const hasAmbilight = inventory.filter((inventory) => {
  return inventory.options.ambiLight;
});
console.log(hasAmbilight);


// 1D [X]
// inventory.sort((a,b) => a.price - b.price);
// console.log(inventory);


//------------------------------------------------------------------------------------//




// Opdracht 2 - Elementen in de DOM plaatsen
// Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon een oude vertrouwde for-loop voor!
//
//     Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

//2A [x]
let amountSold = 0;
for (let i = 0; i <inventory.length ; i++) {
  amountSold += inventory[i].sold
}
console.log(amountSold);


//2B [X]
document.getElementById("verkocht");
verkocht.textContent = amountSold;
verkocht.style.color = "green";


// 2C + 2D [X]
let amountStock = 0;
for (let i = 0; i <inventory.length ; i++) {
  amountStock += inventory[i].originalStock
  document.getElementById("gekocht");
  gekocht.textContent = amountStock;
  gekocht.style.color = "blue";
}


//2E [X]
let amountRemaining = 0;
  amountRemaining = amountStock - amountSold
  document.getElementById("beschikbaar");
  beschikbaar.textContent = amountRemaining;
  beschikbaar.style.color = "red";





// Opdracht 3a: Gebruik een array-methode om alle tv-merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
//
//3A + B [X]
 function tvBrandName(array){
   const tvBrands = array.map((array) => {
   return array.brand;
 });
   const listOfBrands = document.createDocumentFragment();
   for (let tvBrand of tvBrands){
     const li = document.createElement("li");
     li.textContent = tvBrand;
     listOfBrands.appendChild(li);
   }
   const container = document.getElementById("naamlijst");
   container.appendChild(listOfBrands);
}
tvBrandName(inventory);






// Opdracht 4 -Functies
// Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//-------------------------------------------------------------------------------------------------------//
// Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart-TV
//---------------------------------------------------------------//
function brandTypeName(tv){
   return tv.brand + " " + tv.type + " - " + tv.name;
 }
 console.log(brandTypeName(inventory[0]));


//-----------------------------------------------------------------//
//     Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format 379,- of €159,-.
//-----------------------------------------------------------------//
function priceTv(tv){
  return "€" + tv.price + ",-"
}
console.log(priceTv(inventory[0]))

//----------------------------------------------------------------//
// Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
//
//4C
function stringOfSize(tv){
   let container = ""
  for (let i = 0; i < tv.availableSizes.length; i++) {
    const inch = tv.availableSizes[i]
    const cm = tv.availableSizes[i] * 2.54;
    container = `${container}${inch} inch (${cm}) cm |`
  }return container;
}
console.log(stringOfSize(inventory[3]))


//-------------------------------------------------------------------//
//     Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//
//     Philips 43PUS6504/12 - 4K TV
// €379,-
//     43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm)
//------------------------------------------------------------------//
//------------------------------------------------------------------//
// Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//------------------------------------------------------------//
//4D EN E
function print(arr){
let display = "";
  arr.map((input) =>
  {
    const tvName = brandTypeName(input);
    const tvPrice = priceTv(input);
    const tvSize = stringOfSize(input);
    display += tvName + "\n" + tvPrice + "\n" + tvSize + "\n";
  });
  return display
 }

console.log(print(inventory));









//--------------------------------------------------------------//
// Bonusopdracht
// 1A Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren. Gebruik de code die je in opdracht 1b, 1c en 1d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden. Zorg ervoor dat de functies de uitkomsten in de console loggen als de gebruiker op de bijbehorende knop klikt. Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
// 1B Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven aan jouw functie uit 4e zodat de resultaten daadwerkelijk op de pagina weergegeven worden!

//---------------------------------------------------------------///
//1B
function giveTvName(arr) {
  ClearTableFirst()
  const soldOut = arr.filter((inventory) => {
    return inventory.sold === inventory.originalStock;
  });
  let tableField = document.getElementById("table-field")
  soldOut.map((inventory) => {
    return tableField.innerHTML +=
        ` <tr class="overWrite">
        <td>${inventory.name}</td>
        <td>${inventory.brand}</td>
        <td>${inventory.type}</td>
        <td>${inventory.availableSizes}</td>
        <td id="soldOut">${inventory.sold}</td>
        <td id="hasAmbilight">${inventory.options.ambiLight}</td>
        <td id="sortPrice">${inventory.price}</td>
      </tr>
      `
  });

}
//1C
function giveAmbilight(arr) {
  ClearTableFirst()
  const hasAmbilight = arr.filter((inventory) => {
    return inventory.options.ambiLight;
  });
  let tableField = document.getElementById("table-field")
  hasAmbilight.map((inventory) => {
    return tableField.innerHTML +=
        ` <tr class="overWrite">
        <td>${inventory.name}</td>
        <td>${inventory.brand}</td>
        <td>${inventory.type}</td>
        <td>${inventory.availableSizes}</td>
        <td id="soldOut">${inventory.sold}</td>
        <td id="hasAmbilight">${inventory.options.ambiLight}</td>
        <td id="sortPrice">${inventory.price}</td>
      </tr>
      `
  });
}
// 1D
 function sortOnPrice(arr) {
  ClearTableFirst()
   inventory.toString = arr.sort((a, b) => a.price - b.price)
   let tableField = document.getElementById("table-field")
   arr.map((inventory) => {
    return tableField.innerHTML +=
        ` <tr class="overWrite" >
        <td>${inventory.name}</td>
        <td>${inventory.brand}</td>
        <td>${inventory.type}</td>
        <td>${inventory.availableSizes}</td>
        <td id="soldOut">${inventory.sold}</td>
        <td id="hasAmbilight">${inventory.options.ambiLight}</td>
        <td id="sortPrice">${inventory.price}</td>
      </tr>
      `

  });
}
function ClearTableFirst(){
  const elements = document.querySelectorAll(".overWrite");
  elements.forEach(element => {element.remove();});

}









