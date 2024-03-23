const cardData = [
    {
        name:'Strawberry Ice Cold',
        price:'IDR 15.000',
        images: '111 (2).jpg'
    },
    {
        name:'Breakfeast',
        price:'IDR 20.000',
        images: '111 (3).jpg'
    },
    {
        name:'Salad Vegetable',
        price:'IDR 20.000',
        images: '111 (4).jpg'
    },
    {
        name:'Ice Cold',
        price:'IDR 15.000',
        images: '111 (5).jpg'
    },
    {
        name:'Coffe',
        price:'IDR 10.000',
        images:'caffe (2).jpg'
     
    },
    {
        name:'Mie Indomie',
        price:'IDR 3000',
        images:'mie.jpg'
    },

    {
        name: 'Ngops',
        price: 'IDR 10.000',
        images: 'kopi.jpg'

    },

    {
        name:'Shrimp Fresh',
        price:'ID R30.000',
        images: 'udng.jpg'
    }, 
]

const postContainer = document.querySelector('.container');
const postMethods = () => {
    cardData.map((postData)=>{
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
