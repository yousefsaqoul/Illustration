// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }


function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className=themeName;
}
function toggleTheme()
{
    //console.log('test');
    var btn = document.getElementById('switch');
    if (localStorage.getItem('theme')==="theme-dark")
    {
        setTheme('theme-light')
        btn.textContent = 'Dark Mode'
    }
    else
    {
        setTheme('theme-dark');
        btn.textContent = 'Light Mode'

    }

//change Img innerhtml
    if (localStorage.getItem('theme')==="theme-dark")
    {
        document.getElementById('applicationsImg1').src = "assets/img/darkMode/darkmode-img4.png"
    }
    if (localStorage.getItem('theme')==="theme-light")
    {
        document.getElementById('applicationsImg1').src = "assets/img/illustration4.png"

    }

//change Img innerhtml
    if (localStorage.getItem('theme')==="theme-dark")
    {
        document.getElementById('applicationsImg2').src = "assets/img/darkMode/darkmode-img5.png"
    }
    if (localStorage.getItem('theme')==="theme-light")
    {
        document.getElementById('applicationsImg2').src = "assets/img/illustration5.png"
    }
//change Img innerhtml
    if (localStorage.getItem('theme')==="theme-dark")
    {
        document.getElementById('applicationsImg3').src = "assets/img/darkMode/darkmode-img6.png"
    }
    if (localStorage.getItem('theme')==="theme-light")
    {
        document.getElementById('applicationsImg3').src = "assets/img/illustration6.png"
    }
}

//هذه العمليه لتثبيت الثيم الذي يختاره الزائر بعد الضغط على تحديث الصفحه
(function(){
    if(localStorage.getItem('theme')==="theme-dark")
    {
        setTheme('theme-dark');
        
    }
    else
    {
        setTheme('theme-light');
    }
    
    if (localStorage.getItem('theme')==="theme-dark")
    {
        document.getElementById('applicationsImg1').src = "assets/img/darkMode/darkmode-img4.png"
    }
    else
    
        document.getElementById('applicationsImg1').src = "assets/img/illustration4.png"
    
    if (localStorage.getItem('theme')==="theme-dark")
    {
        document.getElementById('applicationsImg2').src = "assets/img/darkMode/darkmode-img5.png"
    }
    else
    document.getElementById('applicationsImg2').src = "assets/img/illustration5.png"
    
    
    if (localStorage.getItem('theme')==="theme-dark")
    {
    document.getElementById('applicationsImg3').src = "assets/img/darkMode/darkmode-img6.png"
    }
    else
        document.getElementById('applicationsImg3').src = "assets/img/illustration6.png"

})();

//ich bin sehr zufrieden auf meine Ergebniss 
