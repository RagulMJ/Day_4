let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");

request.send()
request.onload = function(){
    
    let flg = JSON.parse(request.responseText);
    flg.map((i) => console.log(i.subregion))
   
    
    
};

request.onerror = function (){
    console.error("error");
};