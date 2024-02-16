
let totalCount = 1;
let sum = 0;
const cards = document.getElementsByClassName("card");

for (let card of cards) {
  const element = card;
  element.addEventListener("click", function () {
    const title = element.querySelector("h3").innerText;

    const price = parseFloat(
      element.querySelector("span").innerText.split(" ")[1]
    );

    const titleContainer = document.getElementById("title-container");

    const p = document.createElement("p");
    p.innerText = totalCount + ". " + title;
    titleContainer.appendChild(p);
    totalCount++;

    sum += price;
    document.getElementById("totalPrice").innerText = sum;
  });
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  const input = document.getElementById("input-field").value;
  
  const couponeCode = input.split(' ').join('').toUpperCase();
  

    if(sum>=200){
        if(couponeCode === 'SELL200'){
         const discount = sum *20 /100;
         const discountPrice = document.getElementById('discountPrice')
         discountPrice.innerText = discount;

         const remainingAmount = sum - discount;
         const total = document.getElementById('total');
         total.innerText = remainingAmount;
         document.getElementById("input-field").value='';
        }
        else{
            alert('Invalide Coupone Code');
            document.getElementById("input-field").value='';
        }
    }
    else{
        alert('Please bye 200 dolar')
        document.getElementById("input-field").value='';
    }

  
});
