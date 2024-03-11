// Struktur Code
  //* Menampilkan Alert
function tampilkanAlert() {
    return alert('Hello😘')
}

console.log('statemaent 1 baris')

// alert('Hallo World'); 
// console.log('statement baris kedua');
// console.log('statement 1 baris')


// * Javascript Variable //

// Variabel

function AlertVar() {

  var fullName = 'Azizul' 
     alert('' + fullName)
  var  fullName1 = 'Aan'
     alert('' + fullName1)
  var  fullName2 = 'Lionel Messi'
     alert('' + fullName2)
  var fullName3 = 'Chistiano Ronaldo'
     alert('' + fullName3)

}


// * Kode: Mengubah Value Variable //
// var fullName = "Aan"
// fullName = "Lionel Messi"
// fullName = "Christiano Ronaldo"
// document.write(fullName)


// * Kode: Menggunakan Value Variable //
// var fullName = "Aan"

// fullName = "Lionel Messi"

// fullName = "Christiano Ronaldo"

// document.writeln(fullName)
// document.writeln('<br>')
// document.writeln(fullName)
// document.writeln('<br>')
// document.writeln(fullName)
// document.writeln('<br>')
// document.writeln(fullName)
// document.writeln('<br>')
// document.writeln(fullName)
// document.writeln('<br>')

// * Var vs Let vs Const
// let
function AlertLet(){

  let fullName4 = 'joko'
      fullName4 = 'azizul fichri' 
      alert(fullName4) // Output Azizul Fichri
}
 

//const 
function AlertConst(){

  const fullName6= "azizul fichri"
        fullName6 = "Joko"
        alert(fullName6) // Output Joko
}



// Masalah Variable Var
  // menggunakan var
  // var x = 10
  // if (true) {
  //   var x = 20;
  //   console.log("Nilai x di dalam blok:", x); // Output:20
  // }
  // console.log("Nilai x di luar blok:", x); // Output:20

// menggunakan let
// let y = 10
// if (true) {
//   let y = 20;
//   console.log("Nilai x di dalam blok:", y); // Output:20
// }
// console.log("Nilai x di luar blok:", y); // Output:20




// Tipe Data //
//* Tipe Data Number
function integer(){
  let bulat = 25;
  let desimal = 25.2;

  alert('Hasil penjumlahan = ' + (bulat + desimal));

}

// * Tipe Data Bigint
function bigint(){
  let bulat = 12312131213123123123123n
  alert(bulat)
}

// * Tipe Data String
function string(){
  let text = 'Arkatama'
  alert(text)

}




// * Tipe Data Boolean
function boolean(){
  let admin = true
  let perbandingan = 15 > 5
  alert(perbandingan)
}

// * Tipe Data Undifined
function undifined(){
  let admin
  document.writeln(admin)
}


// * Tipe Data Null
// let admin = null
// document.writeln(admin)

// * Tipe Data Symbol
// let employee = symbol('joko')
// console.log(employee)
// console.log(employee.description)

// * Type Data Object
// let employee = {
//   nama: "Jhon",
//   age: 30,
//   job: "Web Devloper",
//   isMarried: false,
// }
// document.write(`My name is ${employee.nama} and he is ${employee.age} years old`)



// Type Conversion //

// *Conversion String
function ConevertionAlert() {
  let value = false; //boolean
  let text = String(value);
    alert(typeof text);
  let string = String(value) //string

}

function  ConevertionAlert1(){
  let num = '123';
  let num2 = parseInt(num);
  alert(typeof num2);

}


// document.write(string)

// *Conversion Numeric
// let str = "123"
// let nbr = Number("123")

// alert(typeof nbr)

// *Conversion Boolean
// alert(Boolean(0))
// alert(Boolean(7))


// Java script Operator//


function jsOperators() {
  let a = 3;
  let b = 5;

  alert('a + b = ' + (a + b));
  alert('a - b = ' + (a - b));
  alert('a * b = ' + a * b);
  alert('a ** b = ' + a ** b);
  alert('a / b = ' + a / b);
  alert('a % b = ' + (a % b));
}


// * Aritmatika
// let a = 10
// let b = 5

// console.log(a+b);
// console.log(a-b);
// console.log(a*b); 
// console.log(a ** b);
// console.log(a / b);
// console.log(a % b);


// * Comparation
// let a = 3
// let b = 5

// console.log(a == b);
// console.log(a < b);
// console.log(a > b);
// console.log(a != b);

// * Logika
// let a = 4
// let b = 5

// console.log(a && b);
// console.log(a || b);
// console.log(!a);

// * Bitwise
// let a = 3
// let b = 6

// console.log(a & b);
// console.log(a | b);
// console.log(a ^ b);


// * Ternary
// let c = 90
// let d = 90

// console.log(c == d ? 'sama' : 'tidak sama');


// POP UP //

function popUp() {
  let string = confirm('Apakah kamu mau bekerja denganku?');

  string ? alert('Jawaban Anda Mau') : alert('Jawaban anda tidak mau');
}

// * Alert
// alert('Hallo Selamat Datang di Arkatama')

// // * Prompt
function PromptAlert(){
  let string = prompt("Apakah kamu mau makan malam denganku")
  alert('' + string)
}

// // * Confirm
function ConfirmAlert(){
  let string = confirm("Apakah kamu bersedia bekerja disini?")

  string ? alert('Bersedia') : alert('Tidak Bersedia')
}




// Percabangan //



// * IF
// * IF-ELSE
// * ELSE-IF
// * Switch



// Perulangan atau Loop//
// * For
// * While
// * Do..,While
// * Break
// * Continue




 




