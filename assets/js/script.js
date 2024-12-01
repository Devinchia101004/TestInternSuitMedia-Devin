let lastScrollY = 0;
const header = document.getElementById('header');

let currentPage = 1;
let postsPerPage = 10;
const totalPosts = 100;

const posts = [
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-20"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-18"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-15"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-10"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-20"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-18"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-15"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-10"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-20"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-18"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-15"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-10"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-20"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-18"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-15"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-10"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-20"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-18"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-15"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-10"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-20"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-18"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-15"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-10"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-20"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-18"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-15"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-10"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-20"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-18"},
    {title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer Yang Bagus", image: "/assets/img/thumbnail-post2.jpg", date: "2024-11-15"},
    {title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers", image: "/assets/img/thumbnail-post1.jpg", date: "2024-11-10"}
];

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        header.classList.add('hidden');
        header.classList.add('transparent');
    } else {
        header.classList.remove('hidden');
        header.classList.add('transparent');
    }
    if (currentScrollY === 0) {
        header.classList.remove('transparent');
    }
    lastScrollY = currentScrollY;
});

const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
};

function updatePagination() {
    postsPerPage = document.getElementById("show-per-page").value;
    const sortBy = document.getElementById("sort-by").value;

    renderPosts(sortBy);
    generatePaginationButtons();
}

function renderPosts(sortBy) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = '';

    const sortedPosts = posts.sort((a, b) => {
        if (sortBy === "newest") {
            return new Date(b.date) - new Date(a.date);
        } else {
            return new Date(a.date) - new Date(b.date);
        }
    });

    const start = (currentPage - 1) * postsPerPage;
    const end = Math.min(currentPage * postsPerPage, posts.length);

    for (let i = start; i < end; i++) {
        const post = sortedPosts[i];
        const postCard = document.createElement('div');
        postCard.classList.add('post-card');

        postCard.innerHTML = `
            <img src="${post.image}" alt="Post Thumbnail">
            <div class="post-content">
                <div class="post-date">${formatDate(post.date)}</div>
                <div class="post-title">${post.title}</div>
            </div>
        `;
        postList.appendChild(postCard);
    }

    const postRangeText = document.getElementById('post-range-text');
    const postCount = posts.length;
    const startIdx = start + 1;
    const endIdx = end;
    postRangeText.innerText = `Showing ${startIdx} - ${endIdx} of ${postCount} posts`;
}

function generatePaginationButtons() {
    const paginationButtonsContainer = document.getElementById('pagination-buttons');
    paginationButtonsContainer.innerHTML = '';

    const totalPages = Math.ceil(posts.length / postsPerPage);

    const firstPageButton = document.createElement('button');
    firstPageButton.innerText = "<<";
    firstPageButton.onclick = () => changePage(1);
    paginationButtonsContainer.appendChild(firstPageButton);

    const prevPageButton = document.createElement('button');
    prevPageButton.innerText = "<";
    prevPageButton.onclick = () => changePage(currentPage - 1);
    paginationButtonsContainer.appendChild(prevPageButton);

    for (let page = 1; page <= totalPages; page++) {
        const pageButton = document.createElement('button');
        pageButton.innerText = page;
        pageButton.onclick = () => changePage(page);

        if (page === currentPage) {
            pageButton.classList.add('active');
        }

        paginationButtonsContainer.appendChild(pageButton);
    }

    const nextPageButton = document.createElement('button');
    nextPageButton.innerText = ">";
    nextPageButton.onclick = () => changePage(currentPage + 1);
    paginationButtonsContainer.appendChild(nextPageButton);

    const lastPageButton = document.createElement('button');
    lastPageButton.innerText = ">>";
    lastPageButton.onclick = () => changePage(totalPages);
    paginationButtonsContainer.appendChild(lastPageButton);

    firstPageButton.disabled = currentPage === 1;
    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;
    lastPageButton.disabled = currentPage === totalPages;
}

function changePage(pageNumber) {
    const totalPages = Math.ceil(posts.length / postsPerPage);
    if (pageNumber < 1) pageNumber = 1;
    if (pageNumber > totalPages) pageNumber = totalPages;
    currentPage = pageNumber;
    renderPosts(document.getElementById("sort-by").value);
    generatePaginationButtons();
}

fetch("https://suitmedia-backend.suitdev.com/api/ideas") //error code = 405
    .then(response =>console.log(response))
    .catch(error => console.error(error))

document.addEventListener("DOMContentLoaded", () => {
    updatePagination();
});
