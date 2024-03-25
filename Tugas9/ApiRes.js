let endpoint = 'https://reqres.in/api/users'
let content = document.getElementById('content')

fetch(endpoint)
  .then((res) => res.json())
  .then((response) => {

    console.log(response);

    response.data.forEach(element => {

      content.innerHTML += `
      <div class="menu-card">
      <img src="${element.avatar}"</img>
      <h3 class="menu-card-title">${element.first_name} ${element.last_name}</h3>
      <span class="menu-card-price">${element.email}</span>
      </div>
      `
    //  console.log(element)
    });
  })


  // // GET METHOD
// const ambil = fetch(endpoint)
// .then((res) => res.json())
// .then((response) => {
//     // response.forEach(element => {
//     //     console.log(element);
//     // });
//     // console.log(response.data);
//     response.data.forEach(element => {
//         // console.log(element.data);
//         content.innerHTML += `
//         <div class="menu-card">
//         <img src="${element.avatar}"</img>
//         <h3 class="menu-card-title">${element.first_name} ${element.last_name}</h3>
//         <span class="menu-card-price">${element.email}</span>
//     </div>
//         `
//     });
// })
// // GET




  // function updateData(id, newData) 
  // const url = 'https://crudcrud.com/api/ac68c971d375489290f410b9b7a37943';

  // const options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(newData),
  // };

// function getData() {
//   const url = 'https://crudcrud.com/api/ac68c971d375489290f410b9b7a37943';

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => newData)
//     .catch((error) => {
//       console.error('There was a problem retrieving the data:', error);
//     });
// }

// const newData = {
//    id : 2,
//    nama_produk: "Batik Pekalongan",
//    jumlah: 10,
//    deskripsi: "Batik ini bagus",
//    foto: "batik1.jpg"
// }

// function updateData(id, newData) {
//   const url = 'https://crudcrud.com/api/ac68c971d375489290f410b9b7a37943';

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(newData),
//   };



//   fetch(url, options)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log('Data updated successfully:', data);
//     })
//     .catch((error) => {
//       console.error('There was a problem updating the data:', error);
//     });
// }

// function deleteData(id) {
//   const url = 'https://crudcrud.com/api/ac68c971d375489290f410b9b7a37943'
//   const options = {
//     method: 'DELETE',
//   };

//   fetch(url, options)
//     .then((res) => {
//       console.log('Data deleted successfully');
//     })
//     .catch((error) => {
//       console.error('There was a problem deleting the data:', error);
//     });
// }



  


// // function getData() {
// //   const url = '';

// //   fetch(url)
// //   .then((res) => res.json())
// //   .then((data) => {
// //     const productTable = document.getElementById('product-table');

// //     data.forEach(product => {
// //       const row = productTable.insertRow();
// //       const nameCell = productTable.insertRow();
// //       const priceCell = productTable.insertRow();
// //       const actionCell = productTable.insertRow();
    
// //     // Tombol Edit
// //     const editButton = document.createElement('button');
// //     editButton.textContent = 'Edit';
// //     editButton.addEventListener('click', () => editProduct(product._id)); //menggunakan ID sebagai Parameter

// //       // Tombol Edit
// //       const deleteButton = document.createElement('button');
// //       deleteButton;eButton.textContent = 'Delete';
// //       deleteButton.addEventListener('click', () => deleteProduct(product._id)); //menggunakan ID sebagai Parameter

// //       actionCell.appendChild(editButton);
// //       actionCell.appendChild(deleteButton);
    
// //     })
// //   })
// //   .catch((error)=> {
// //     console.error('There was a problem retrieving the data', error);
// //   });
// // }

// // //Panggil Fungsi Get Data() untuk mengambil dan menampilkan data saat halaman dimuat
// // getData();

// // // Fungsi untuk mengEdit Produk
// // function editProduct(productId) {
// //   // implementasi Operasi edit sesuai kebutuhan 
// //   console.log('Edit product with ID:', productId);
// // }

// // // Fungsi untuk menghapus Produk
// // function deleteProduct(productId) {
// //   // implementasi Operasi edit sesuai kebutuhan 
// //   console.log('Delete product with ID:', productId);
// // }
