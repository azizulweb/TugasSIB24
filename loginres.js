var attempt = 3; 

function validate(){
    var username = document.getElementById("inputtext").value;
    var password = document.getElementById("inputpassword").value;
    if ( username == "azizulf25@gmail.com" && password == "1234567"){
        alert ("Anda berhasil masuk, Selamat datang");
        window.location = "Tugas9/ProductApiRes.html";
        return false;
    } else{
        attempt --;
        if(attempt >= 1){
            alert("Maaf username yang anda masukkan salah, kesempatanmu tersisa "+attempt+" kali percobaan");
        } else{
            alert("Maaf kesempatan yang anda dapat telah habis")
        }
        
        
        if( attempt == 0){
            document.getElementById("inputtext").disabled = true;
            document.getElementById("inputpassword").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}