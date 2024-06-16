
let Container = document.getElementById("container");

async function getdata() {
    try {
        let res = await fetch("https://www.themealdb.com/api.php?ref=apilist.fun")
        console.log(res);

        let data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log(error)
    }
}

getdata();

