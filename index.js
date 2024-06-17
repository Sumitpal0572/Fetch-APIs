
let Btn_one = document.getElementById("get-category-data");
let Btn_two = document.getElementById("get-ingredient-data");


Btn_one.addEventListener("click", function () {
    getCategoryData();
})

async function getCategoryData() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        console.log(res);

        let data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log("something went wrong")
    }
}

getCategoryData()


Btn_two.addEventListener("click", function () {
    getIngredientData()
})


async function getIngredientData() {
    try {
        let res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
        console.log(res);

        let data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log("something went wrong")
    }
}

getIngredientData()