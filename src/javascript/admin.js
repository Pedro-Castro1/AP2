const sideMenu = document.querySelector("aside");
const sidebar = document.querySelector("sidebar");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const logo = document.querySelector("#temalogo");
const terra = document.querySelector("#earth");
const saturno = document.querySelector("#saturn");
const galaxia = document.querySelector("#galaxy");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    
    
    if (document.body.classList.contains('dark-theme-variables')) {
        logo.setAttribute("src", "../assets/img/logo.png");
        terra.setAttribute("src", "../assets/img/planos/a.png");
        saturno.setAttribute("src", "../assets/img/planos/b.png");
        galaxia.setAttribute("src", "../assets/img/planos/c.png");

    } else {
        logo.setAttribute("src", "../assets/img/logoB.png");
        terra.setAttribute("src", "../assets/img/planos/bB.png");
        saturno.setAttribute("src", "../assets/img/planos/aB.png");
        galaxia.setAttribute("src", "../assets/img/planos/cB.png");
    }

    document.sidebar.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');    
});
