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
        <a  class="nav-link active" aria-current="page" onclick="showCategoryNews('${category.category_id}')" href="#">${category.category_name}</a>
        </li>
        `
        divcatagory.appendChild(newUl)
    });

}

const showCategoryNews = async category_id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    const res = await fetch(url)
    const data = await res.json();
    displayCategoryNews(data.data)

}

const displayCategoryNews = (newss) => {
    const itemFound = document.getElementById('item-number');
    itemFound.innerText = newss.length;
    const foundCatagoryName = document.getElementById('catagory-name');



    const newsCaed = document.getElementById('display-news');
    newsCaed.innerHTML = '';
    newss.forEach(news => {
        console.log(news)
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
    <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${news.thumbnail_url}"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0, 300)}...</p>
        <div class="d-flex align-items-center">
          <div class="ms-5">
            <img
              src="${news.author.img}"
              class="rounded-circle faysal"
              height="40"
              alt="Portrait of a Woman"
              loading="lazy"
            />
          </div>

          <div class="fs-6 px-3">
            <h6 class="">${news.author.name ? news.author.name : 'no name'}</h6>
            <small class="text-muted"
              >${news.author.published_date ? news.author.published_date : 'No dete'}</small
            >
          </div >

          <div class="mx-5">
            <small><i class="fa-solid fa-eye"></i> ${news.total_view} </small>
          </div>

          <div class="mx-5">
            <button
              class="btn "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onclick=""
            >
              <i class="fa-solid fa-circle-chevron-right"></i>
            </button>
          </div>
        </div >
      </div >
    </div >
  </div >
</div >
`
        newsCaed.appendChild(cardDiv)
        // creat display

    })
}
catagorys()