function menuToggle() {
    const menu = document.querySelector('.menu-icon');
    const menuBar = document.querySelector('.menubar')
    const menuIcon = document.getElementById('icon');

    menu.addEventListener('click', function () {
        if (menuIcon.classList.contains('ri-menu-2-line')) {
            menuIcon.classList.remove('ri-menu-2-line')
            menuIcon.classList.add('ri-close-line')
        } else {
            menuIcon.classList.add('ri-menu-2-line')
        }
        menuBar.classList.toggle('menubar-active');

    })
}


function projectHoverImg() {
    let pContainer = document.querySelector("#allProjects");
    let img = document.querySelector('.projectimg');

    pContainer.addEventListener('mouseenter', function () {
        img.style.display = "block"
    })
    pContainer.addEventListener('mouseleave', function () {
        img.style.display = "none"
    })

    let projects = document.querySelectorAll('.project')
    projects.forEach(p => {
        p.addEventListener('mouseenter', function () {
            let imgurl = p.getAttribute('imgurl');
            console.log(imgurl);
            img.setAttribute('src', imgurl)
        })
    })
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 100,
        freeMode: true,
      });
}


swiper();
menuToggle();
projectHoverImg();