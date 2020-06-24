/*Yorum satırı*/
DEneme bir ik üç
/*
var a=5; //satır içi yorumlama

alert(a);*/
//değişkenler (variables)

/* Yazım Kuralları
1. birden fazla kelimeden oluşan değişken isimlerini camel casing
2. function isimlerini camel casing
3. kısaltmalar UPPER CASING
4. tek kelime değişken isimleri lower casing
*/
/*
var nameSurname="Özlem Kalender";//string : karakter dizesi
nameSurname='Ahmet Bircan';
alert(nameSurname);

var sayi=100;//number

var kapaliMi=true;//false
*/
/* İsimlendirme kuralları

1. Rakam ile başlamaz   ogrenci1 
2. Rezerve edilmiş kelimeler kullanılamaz
3. İsimlendirmede boşluk karakteri kullanılmaz  
4. Özel karakterler kullanılamaz (çşİığüö,.!)
*/


/************************** HAREKET ET FONKSİYONU****************/

function hareketEt() {
    //butonu disabled et
    var maviKutu = document.getElementById('animasyon');
    //console.log(maviKutu);
    var pos = 0;
    var id = setInterval(frame, 50);
    console.log(id);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;//pos=pos+1;
            //pos+=1;
            maviKutu.style.top = pos + 'px';// 5px
            maviKutu.style.left = pos + 'px';
        }
    }

    //butonu active et
}

/************************** HAREKET ET FONKSİYONU****************/


/* Operatörler

-  
* 
/  
%  
+

= 
+=
*=
-=
%=
/=

&&   (1==1 && 3>9)
||   (1==1 || 3>9)

!  olumsuzluk   !(1==1 && 3>9)

=== (==)
!== (!=)
<
>
=>
=<
*/



/********************Karşılaştırma Örneği **********************/

function karsilastir() {
    var sayi1 = document.getElementById('sayi1').value;
    var sayi2 = document.getElementById('sayi2').value;
    var sonuc = sayi1 > sayi2;
    // alert(sonuc);
    var resultBox = document.getElementById('result');
    if (sayi1 > sayi2) {
        //document.write("Sayı1 , sayı2 den büyük");
        resultBox.innerHTML = "Sayı1 , sayı2 den <strong>büyük</strong>";
    } else {
        //document.write("Sayı2 , sayı1 den büyük");
        resultBox.innerText = "Sayı2 , sayı1 den büyük";

    }
}

/***************SORGULA***************** */

function Sorgula() {
    var puan = document.getElementById('puan').value;
    var message;
    if (puan >= 0 && puan < 45) {
        message = "ZAYIF";
    } else if (puan >= 45 && puan < 55) {
        message = "GEÇER";
    } else if (puan >= 55 && puan < 70) {
        message = "ORTA";
    } else if (puan >= 70 && puan < 85) {
        message = "İYİ";
    } else if (puan >= 85 && puan <= 100) {
        message = "PEKİYİ";
    } else {
        message = "Geçersiz";
    }

    var result = "Öğrenci sınavdan " + message + " notunu almıştır."
    alert(result);
}

/***********SWITCH************************/

function Gun() {
  /*  var deger = document.getElementById('dayBox').value;
    alert(typeof(deger));*/

    var sayfadanAlinan = document.getElementById('dayBox').value;
  var donusturulen=parseInt(sayfadanAlinan);
  /*
    switch (donusturulen) {
        case 1:
            alert("Pazartesi");
            break;
        case 2:
            alert("Salı");
            break;
        case 3:
            alert("Çarşamba");
            break;
        case 4:
            alert("Perşembe");
            break;
        case 5:
            alert("Cuma");
            break;
        case 6:
            alert("Cumartesi");
            break;
        case 7:
            alert("Pazar");
            break;
        default:alert("Geçersiz değer");
            break;
    }*/


    switch (donusturulen) {
        case 1: 
        case 2: 
        case 3: 
        case 4: 
        case 5:
            alert("Hafta içi");
            break;
        case 6: 
        case 7:
            alert("Hafta Sonu");
            break;
        default:
            alert("Geçersiz değer");
            break;
    }
}
