document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    const icon = document.getElementById('icon');
    const countent = document.getElementById('countent');
   
    countent.style.marginTop = '0';
    countent.style.transition = 'none';

    window.requestAnimationFrame(() => {
        countent.style.transition = '1s ease';
    });
    countent.style.transition = '1s ease';
    var x=0;

       
        menuButton.addEventListener('click', function() {
            if (x == 0) 
            {
                countent.style.transition = '1s ease';
                navbar.style.height = '200px';
                countent.style.marginTop = '200px';
                icon.className = 'fa-solid fa-x';
                x=1;
            } 
            else 
            {   
                navbar.style.height = '0px';
                countent.style.marginTop = '0px';
                icon.className = 'fa-solid fa-bars';
                x=0;
            }
    
        });
});