grid_el = document.getElementById("search-result-divimg");

function clear() {
  document.querySelector("#search-term").innerHTML = "";
  document.querySelector("#search-result-divimg").innerHTML = "";
  // document.querySelector(".largepicdiv").innerHTML = "";
}

function fetchMeal() {
  clear();
  let inputText = document.getElementById("meal").value;

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  console.log(apiUrl);

  let span_el = document.getElementById("search-term");
  span_el.innerHTML += `Search Result for "${inputText}"`;

  let response = fetch(apiUrl)
    .then(function (res) {
      if (res.status === 200) return res.json();
      else throw new Error("something failed");
    })
    .then(function (data) {
      // console.log("type of data", typeof data);
      console.log("data.meal is", data.meals.length);
      console.log("details", data.meals);
      console.log("length", data.meals.length);
      // console.log("type of data.meal", typeof data.meals);
      imgSearch(data.meals);
      // let grid_el = document.getElementById("search-result-divimg");
      // console.log(data.meal);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

function imgSearch(arr) {
  //arr = data.meals
  // let inputText = document.getElementById("meal").value;
  let grid_el = document.getElementById("search-result-divimg");

  for (i = 0; i < arr.length; i++) {
    grid_el.innerHTML += `<div class="container" onclick='clickedImg(${JSON.stringify(
      arr[i]
    )})'><img id="mealimg" src=${arr[i].strMealThumb}>
    <div class="middle"><h3 class="text">${arr[i].strMeal}</h3></div>
    </div>`;
  }
}
function clickedImg(arg) {
  let mealName = arg.strMeal;
  let mealCategory = arg.strCategory;
  let mealArea = arg.strArea;
  console.log("typeof", typeof arg.strMealThumb);
  let mealImage = arg.strMealThumb;
  let mealInstruction = arg.strInstructions;
  // document.createElement("div");
  let middleDiv = `<div class="largepicdiv">
  <h4 class="largepicname">${mealName}</h4>
  <img class="largepic" src="${mealImage}"/>
  </div>`;
  document.body.innerHTML += middleDiv;
  let dotted = `<div class="dotteddiv">
  <p class="dottedtext">${mealCategory}</p>
  <p class="dottedtext">${mealArea}</p>
  </div>`;
  document.body.innerHTML += dotted;
  let instruction = `<div class="inst">
  <p class='inst-text'>${mealInstruction}</p>
  </div>`;
  document.body.innerHTML += instruction;
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
