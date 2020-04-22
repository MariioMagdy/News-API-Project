var list = ["General", "Entertainment", "Health", "Science", "Sports", "Technology"];

function getw() {

    var lines = "";

    for (var i = 0; i < list.length; i++) {
        lines += `<li>
                <a class='nav-link' href='#'>` + list[i] + `</a>
                </li>`
    }

    document.getElementById("line").innerHTML = lines;
} getw()



getdata("general")

var links = document.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        var currentCat = e.target.text;
        getdata(currentCat.toLowerCase())
    })

}

var data;

function getdata(category) {
    var httpReq = new XMLHttpRequest();
    httpReq.open("GET", "http://newsapi.org/v2/top-headlines?country=us&category=" + category + "&apiKey=d4f87946d7fc4322be9c2089316d5625");

    httpReq.send();

    data = [];

    httpReq.addEventListener("readystatechange", function () {


        if (httpReq.readyState == 4) {
            data = JSON.parse(httpReq.response).articles;
            Display();

        }

    })
}



function Display() {

    var temp = "";

    for (var i = 0; i < data.length; i++) {

        temp += `<div class ='col-md-4'>
                <div>
                <img src=`+ data[i].urlToImage + ` class='img-fluid'>
                <h4>`+ data[i].title + `</h4>
                <p>`+ data[i].description + `</p>
                    </div>
                </div>`
    }
    document.getElementById("posts-row").innerHTML = temp;
}

