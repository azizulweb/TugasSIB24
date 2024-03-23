const postData = [
    {
        name:'Strawberry Juice',
        price:'IDR 15.000',
        images: '111 (2).JPG'
    },
    {
        name:'Breakfeast',
        price:'IDR 20.000',
        images: '111 (3).JPG'
    },
    {
        name:'Salad Vegetable',
        price:'IDR 20.000',
        images: '111 (4).JPG'
    },
    {
        name:'Ice Cold',
        price:'IDR 15.000',
        images: '111 (5).JPG'
    },
    {
        name:'Coffe',
        price:'IDR 10.000',
        images:'caffe (2).JPG'
     
    },
    {
        name:'Mie',
        price:'IDR 20.000',
        images:'mie.JPG'
    },

    {
        name: 'Kopi',
        price: 'IDR 10.000',
        images: 'kopi.JPG'

    },

    {
        name:'Shrimp Fresh',
        price:'ID R30.000',
        images: 'udng.JPG'
    },
]

const postContainer = document.querySelector('.container');
const postMethods = () => {
    postData.map((postData)=>{
        console.log(postData);
        const postElement = document.createElement('div');
        postElement.classList.add('menu-card');
        postElement.innerHTML = `
        <div class="menu-card">
        <img src="assets/${postData.images}" alt="food1" class="menu-card-img">
        <h3 class="menu-card-title">${postData.name}</h3>
        <p class="menu-card-price">${postData.price}</p>
        </div>
        `
        postContainer.appendChild(postElement)
        
    })
}
    postMethods()
