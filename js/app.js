const catagorys = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
        .then(res => res.json())
        .then(data => getCategoryNews(data.data.news_category))
}
const getCategoryNews = (categorys) => {
    // console.log(categorys)
    const divcatagory = document.getElementById('catagory-ul-id');
    categorys.forEach(category => {
        // console.log(category)
        const newUl = document.createElement("ul");
        newUl.classList.add('navbar-nav')
        newUl.innerHTML = `
        <li class="nav-item">
                <a class="nav-link active" aria-current="page" onclick="showCategoryNews('${category.category_id}')" href="#">${category.category_name}</a>
              </li>
        `
        divcatagory.appendChild(newUl)
    });
    
}

const showCategoryNews = async category_id => {
    const url =` https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await  fetch(url)
    const data = await res.json();
    displayCategoryNews(data.data)
}
const displayCategoryNews = (newss) => {
    const newsCaed = document.getElementById('display-news');
    
    newss.forEach(news => {
    console.log(news)

    })
//   const detalce = document.getElementById('detalce');
//   detalce.innerHTML = `
//     <p>${titel.releaseDate ? titel.releaseDate : 'No releaseDate' }</p>
//     <p >${titel.mainFeatures.chipSet ? titel.mainFeatures.chipSet : 'not'}</p>
//     <p >${titel.mainFeatures.displaySize ? titel.mainFeatures.displaySize : 'not'}</p>
//     <p >${titel.mainFeatures.memory ? titel.mainFeatures.memory : 'memory not found' }</p>
//     <p >${titel.others.Bluetooth ? titel.others.Bluetooth : 'not found others'}</p>
//   ` 
}
catagorys()