 async function w(){
    const city=document.querySelector('#search>input').value
    if(city=="")
    {
        alert("please enter city name:");
    }
    else{
        const apikey="d68bfa47e8784278d1edcd4775ffb876";
        const url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
        let res= await fetch(url);
       // console.log(res);
        let data=await res.json();
        //console.log(data);
        temp.innerHTML = Math.round(data.main.temp)+"℃";
        document.getElementById('city').innerHTML = data.name;
        wind.innerHTML= data.wind.speed +"km/h";
        humidity.innerHTML= data.main.humidity+"%";
    }
}