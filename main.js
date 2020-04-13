function fetchSymbol(){
    const userInput = document.getElementById("uInput").value;
    const cardSelector = document.getElementById("infoCard");
    fetch('https://financialmodelingprep.com/api/v3/company/profile/'+ userInput).then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        //document.getElementsByClassName("infoCard").innerHTML = data.profile.website;
            if(data.profile.changesPercentage[1] == "+"){
                document.getElementById("rightCol").style.backgroundColor="#77d8d8";
                document.getElementById("cardTitle").innerHTML = data.profile.companyName;
                document.getElementById("exchangeName").innerHTML = data.profile.exchange;
                document.getElementById("changePer").innerHTML = data.profile.changesPercentage;
                document.getElementById("aboutSec").innerHTML = data.profile.description;
                document.getElementById("website").innerHTML = data.profile.website;
            }else{
                document.getElementById("rightCol").style.backgroundColor="#c70039";
                document.getElementById("cardTitle").innerHTML = data.profile.companyName;
                document.getElementById("exchangeName").innerHTML = data.profile.exchange;
                document.getElementById("changePer").innerHTML = data.profile.changesPercentage;
                document.getElementById("aboutSec").innerHTML = data.profile.description;
                document.getElementById("website").innerHTML = data.profile.website;  
            }  
    });
}
