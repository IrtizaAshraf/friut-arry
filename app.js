
const friutslist =document.querySelector("#friuts");
const p =document.querySelector("p")

const arry =['Apple','Banana','Orange','Grape','Strawberry','Watermelon','Pineapple','Mango','Kiwi','Blueberry','Raspberry','Blackberry','Cherry',
'Peach','Plum']


const friutarry =['- Crisp and refreshing, apples are known for their sweet and slightly tart flavor. They come in various varieties like Granny Smith, Gala, and Fuji.',
' - Creamy and naturally sweet, bananas are a quick and convenient snack, rich in potassium.',
' - Bursting with citrusy goodness, oranges are famous for their juicy, tangy taste and high vitamin C content.',
' - Grapes come in clusters and are small, sweet, and often used for making wine or eaten fresh.',
' - These small red berries are sweet and often used in desserts, salads, or enjoyed on their own.',
' - Perfect for hot summer days, watermelon is incredibly hydrating with its juicy, sweet flesh.',
' - Tropical and tangy, pineapple is used in both savory and sweet dishes, including fruit salads and piña coladas.',
' - Known as the "king of fruits," mangoes are sweet, juicy, and incredibly flavorful.',
' - Kiwis are small, green fruits with tiny black seeds, known for their tart-sweet taste and high vitamin C content.',
' - Small and bursting with antioxidants, blueberries are used in various baked goods and breakfast dishes.',
' - Raspberries are small, red, and tart, often used in jams, desserts, and smoothies.',
' - Similar to raspberries but slightly sweeter, blackberries are enjoyed fresh or in various recipes.',
' - Cherries are sweet, with a slight tartness, and can be enjoyed fresh, in pies, or as a topping.',
' - Peaches are sweet, juicy, and have a fuzzy skin. They are often enjoyed fresh or in cobblers and pies.',
' - Plums have a sweet and slightly tart flavor, making them a great snack or ingredient in jams and sauces.'] 


for(let i = 0; i< arry.length;i++){
      // console.log(fruitesArry[i]);
      friutslist.innerHTML+=`<button onclick="show(${i})">${arry[i]}</button><br>`
  
  
}


function show(i){
      console.log(`${arry[i]} ${friutarry[i]}`)
  
      p.innerHTML+=`<li>${arry[i]} ${friutarry[i]}</li><br>`
  
  
  
}