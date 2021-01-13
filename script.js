function dropdown() 
{
    document.getElementById('eredmeny').innerHTML="";
    var e = document.getElementById("zaszlok");

    var result = e.options[e.selectedIndex].value;

    if(result == 1)
    {
        document.getElementById('eredmeny').innerHTML += "<a href='https://www.google.com/maps/place/Hungary/@47.1575629,18.3840469,8z/data=!3m1!4b1!4m5!3m4!1s0x4741837bdf37e4c3:0xc4290c1e1010!8m2!3d47.162494!4d19.5033041' target='blank'><img src='kepek/hun.png' id = 'kep' alt='Google Maps'></a>";
    }
    if(result == 2)
    {
        document.getElementById('eredmeny').innerHTML += "<a href='https://www.google.com/maps/place/Uganda/@1.3706401,31.1821542,8z/data=!3m1!4b1!4m5!3m4!1s0x1771a69f6499f945:0x874155ce43014549!8m2!3d1.373333!4d32.290275' target='blank'><img src='kepek/uganda.png' id = 'kep' alt='Google Maps'></a>";
    }
    if(result == 3)
    {
        document.getElementById('eredmeny').innerHTML += "<a href='https://www.google.com/maps/place/United+States/@37.2762042,-104.6487007,5z/data=!3m1!4b1!4m5!3m4!1s0x54eab584e432360b:0x1c3bb99243deb742!8m2!3d37.09024!4d-95.712891' target='blank'><img src='kepek/usa.png' id = 'kep' alt='Google Maps'></a>";
    }
    if(result == 4)
    {
        document.getElementById('eredmeny').innerHTML += "<a href='https://www.google.com/maps/place/Kenya/@0.1599391,35.6649616,7z/data=!3m1!4b1!4m5!3m4!1s0x182780d08350900f:0x403b0eb0a1976dd9!8m2!3d-0.023559!4d37.906193' target='blank'><img src='kepek/kenya.png' id = 'kep' alt='Google Maps'></a>";
    }
    if(result == 5)
    {
        document.getElementById('eredmeny').innerHTML += "<a href='https://www.google.com/maps/place/Saudi+Arabia/@24.0234271,40.5830316,6z/data=!3m1!4b1!4m5!3m4!1s0x15e7b33fe7952a41:0x5960504bc21ab69b!8m2!3d23.885942!4d45.079162' target='blank'><img src='kepek/sa.png' id = 'kep' alt='Google Maps'></a>";
    }
}