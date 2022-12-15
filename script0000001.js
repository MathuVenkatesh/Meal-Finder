// let count_data = data.meals.length;

function fetchMeal() {
  let inputText = document.getElementById("meal").value;

  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
  console.log(apiUrl);
  let response = fetch(apiUrl)
    .then(function (res) {
      if (res.status === 200) return res.json();
      else throw new Error("something failed");
    })
    .then(function (data) {
      // console.log("type of data", typeof data);
      console.log("data.meal is", data.meals.length);
      // console.log("type of data.meal", typeof data.meals);
      createTable(data.meals);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

let input_el = document.getElementById("meal");

input_el.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    fetchMeal();
  }
});

function createTable(arr) {
  let table_div_el = document.getElementById("tbl-div");

  let table_head_el = [];
  let td_img_el = [];
  let td_ing_el1 = [];
  let td_ing_el2 = [];
  let td_ing_el3 = [];
  let td_ing_el4 = [];
  let td_ing_el5 = [];
  // console.log("length", data.meals.length);
  // let count = data.meals.length;

  for (let i = 0; i < arr.length; i++) {
    table_head_el += `<th>${arr[i].strMeal}</th>`;

    td_img_el += `<td><img id="mealimg" src=${arr[i].strMealThumb}></td>`;

    td_ing_el1 += `<td>${
      arr[i].strIngredient1 + " " + arr[i].strMeasure1
    }</td>`;
    td_ing_el2 += `<td>${
      arr[i].strIngredient2 + " " + arr[i].strMeasure2
    }</td>`;
    td_ing_el3 += `<td>${
      arr[i].strIngredient3 + " " + arr[i].strMeasure3
    }</td>`;
    td_ing_el4 += `<td>${
      arr[i].strIngredient4 + " " + arr[i].strMeasure4
    }</td>`;
    td_ing_el5 += `<td>${
      arr[i].strIngredient5 + " " + arr[i].strMeasure5
    }</td>`;
  }
  table_div_el.innerHTML = `<table>
<tr>
${table_head_el}
</tr>
<tr>
${td_img_el}
</tr>
<tr>
${td_ing_el1}
</tr>
<tr>
${td_ing_el2}
</tr>
<tr>
${td_ing_el3}
</tr>
<tr>
${td_ing_el4}
</tr>
<tr>
${td_ing_el5}
</tr>

</table>`;
}
