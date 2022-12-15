let mealArr = [];
grid_el = document.getElementById("search-result-divimg");
let largepicdiv = document.createElement("div");
let dotteddiv = document.createElement("div");
let instruction = document.createElement("div");
ingredientdiv = document.createElement("div");

function clear() {
  document.querySelector("#search-term").innerHTML = "";
  document.querySelector("#search-result-divimg").innerHTML = "";
  largepicdiv.innerHTML = "";
}

function fetchMeal() {
  clear();
  let inputText = document.getElementById("meal").value;

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;

  let span_el = document.getElementById("search-term");
  span_el.innerHTML += `Search Result for "${inputText}"`;

  let response = fetch(apiUrl)
    .then(function (res) {
      if (res.status === 200) return res.json();
      else throw new Error("something failed");
    })
    .then(function (data) {
      imgSearch(data.meals);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

function imgSearch(arr) {
  mealArr = arr;
  //arr = data.meals
  // let inputText = document.getElementById("meal").value;
  let grid_el = document.getElementById("search-result-divimg");
  grid_el.classList.add("color");

  for (i = 0; i < arr.length; i++) {
    grid_el.innerHTML += `<div class="container" onclick='clickedImg(${arr[i].idMeal})'><img id="mealimg" src=${arr[i].strMealThumb}>
    <div class="middle"><h3 class="text">${arr[i].strMeal}</  h3></div>
    </div>`;
  }
}

function clickedImg(id) {
  let selecteditem = mealArr.filter(
    (mealObj) => mealObj.idMeal === id.toString()
  );
  selecteditem = selecteditem[0];
  let mealName = selecteditem.strMeal;
  let mealCategory = selecteditem.strCategory;
  let mealArea = selecteditem.strArea;
  // console.log("typeof", typeof selecteditem.strMealThumb);
  let mealImage = selecteditem.strMealThumb;
  let mealInstruction = selecteditem.strInstructions;
  let mealIngredients = selecteditem.strIngredient;
  console.log(mealIngredients);
  // document.createElement("div");
  largepicdiv.classList.add("largepicdiv");
  largepicdiv.innerHTML = `<h4 class="largepicname">${mealName}</h4><img class="largepic" src="${mealImage}"/>`;

  dotteddiv.classList.add("dotteddiv");
  dotteddiv.innerHTML = `<p class="dottedtext">${mealCategory}</p>
  <p class="dottedtext">${mealArea}</p>`;

  instruction.classList.add("inst-div");
  instruction.innerHTML = ` <p class='inst-text'>${mealInstruction}</p>`;

  ingredientdiv.classList.add("ingredient");

  // // <p>${mealIngredients[i]}</p>`;

  document.body.appendChild(largepicdiv);
  document.body.appendChild(dotteddiv);
  document.body.appendChild(instruction);
  document.body.appendChild(ingredientdiv);

  // let ing_span_el = "";

  // for (let i = 1; i <= 20; i++) {
  //   let str = "strIngredient" + i;
  //   ing_span_el += `<span>${selecteditem[str]}</span>`;
  // }
  // document.body.innerHTML += ing_span_el;
}
let input_el = document.getElementById("meal");

input_el.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchMeal();
  }
});

//filter

// let img_el = document.getElementById("mealimg");
// img_el.addEventListener("click", function () {
//   strCategory;
//   strArea;
// });

//   <button
//     class="delete-btn"
//     onclick="createdByApi(${
//     transaction.id
//   })"
//   >
//     X
//   </button>;
