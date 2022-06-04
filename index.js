


let baseUrl = 'https://gnews.io/api/v4/top-headlines?token=f03cb9e1a1d9dde10962daea6d037441&lang=en';

var newsSectionArr = document.getElementsByClassName('news-section');
var newsSection = newsSectionArr[0];

async function topHeadlines() {


newsSection.innerHTML = `<h1>Articles</h1>`;

await fetch(baseUrl, {
    method: 'GET'
}).then((result) => result.json())
.then((data) => {
    let dataArr = data.articles;

    dataArr.forEach((news) => {
        console.log(news);
    newsSection.innerHTML += `<div class="news-content">
    <img src=${news.image} alt="">
    <div class="news-information">
        <h4>${news.title}</h4>
        <h5>${news.description}</h5>
        <button class="btn btn-primary"><a href="${news.url}" target="_blank">Read More</a></button>
    </div>
    </div>`;
    });


}).catch((error) => {
    console.log(error);
});
}

// topHeadlines();

// for searching news




function search() {

// windows.location.reload();

    let searchUrl = 'https://gnews.io/api/v4/search?q=&token=f03cb9e1a1d9dde10962daea6d037441&lang=en';
   
    let searchValArr = document.getElementsByClassName('searchInput'); 
    let searchValue = searchValArr[0].value;
    // console.log(searchValue);

    searchUrl = `https://gnews.io/api/v4/search?q=${searchValue}&token=f03cb9e1a1d9dde10962daea6d037441&lang=en`;

    newsSection.innerHTML = `<h1>Articles</h1>`;


fetch(searchUrl, {
    method: 'GET',
}).then((result) => result.json())
.then((data) => {
    let dataArr = data.articles;

    dataArr.forEach((news) => {
    newsSection.innerHTML += `<div class="news-content">
    <img src=${news.image} alt="">
    <div class="news-information">
        <h4>${news.title}</h4>
        <h5>${news.description}</h5>
        <button class="btn btn-primary"><a href="${news.url}" target="_blank">Read More</a></button>
    </div>
    </div>`;
    });


}).catch((error) => {
    console.log(error);
}); 

}