document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const icon = document.getElementById('icon')
    const countent = document.getElementById('countent')
    var x=0

    
        menuButton.addEventListener('click', function() {
            if (x == 0) 
            {
                navbar.style.maxHeight = '200px';
                navbar.style.overflow = 'visiable';
                x=1;
                icon.className = 'fa-solid fa-x';
                countent.style.marginTop = '200px';
                countent.style.transition = '1s ease';
            } 
            else 
            {
                navbar.style.maxHeight = '0px';
                x=0;
                icon.className = 'fa-solid fa-bars';
                countent.style.marginTop = '0px';   
            }
    
        });


});