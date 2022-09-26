const hesapla = () => {
    const sayi = document.querySelector("#txtSayi").value;

    if(!sayi || isNaN(sayi) || sayi<0){
       alert("Pozitif bir tam sayi giriniz")
       return; 

    }

    let carpim = 1;
    for(let i=1; i<=sayi; i++){
       carpim = carpim*i;
    }
    document.querySelector("#sonuc").innerHTML = carpim;

}