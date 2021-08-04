//Open / close navbar;
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar a');

function toggleNavbar() {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('open');
}

menuBtn.addEventListener('click', toggleNavbar);

for (let i = 0; i < links.length; i++){
    links[i].addEventListener('click', linksClick);
}

function linksClick(e){
    smoothScroll(e);
}

function smoothScroll(e){
    e.preventDefault();
    const targetID = e.currentTarget.getAttribute('href');
    window.scrollTo({
        top: document.querySelector(targetID).offsetTop,
        behavior: 'smooth',
    });
    
    if (window.innerWidth <= 1100){
        toggleNavbar();
    }
}

//Open / Close modal;
const modalOverlay = document.querySelector('.modal-overlay');
const openModal = document.querySelector('.contact-btn');
const openForm = document.querySelector('.open-form');
const closeModal = document.querySelector('.cancel');

openForm.onclick = function() {
    modalOverlay.classList.add('active');
};

openModal.onclick = function() {
    modalOverlay.classList.add('active');
};

closeModal.onclick = function() {
    modalOverlay.classList.remove('active');
    document.querySelector('.contact-form').reset();
}

//services blur
const feature1 = document.querySelector('.collect');
const feature2 = document.querySelector('.feature.firewood');
const feature3 = document.querySelector('.feature.handshake');
const feature4 = document.querySelector('.feature.woods');

function blurred(feature) {
    feature.style.transform = 'scale(1.05)';
    feature.style.transition = '.5 ease';

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.filter = 'blur(5px)';
        arr[i].style.transition = '.5s ease';
    }
}

function unBlurred(feature) {
    feature.style.transform = 'scale(1)';
    feature.style.transition = '.5 ease';

    for (let i = 0; i < arr.length; i++) {
        arr[i].style.filter = 'blur(0)';
        arr[i].style.transition = '.5s ease';
    }
}

feature1.addEventListener('mouseover', function() {
    arr = [feature2, feature3, feature4];
    blurred(feature1);
})

feature1.addEventListener('mouseleave', function() {
    arr = [feature2, feature3, feature4];
    unBlurred(feature1);
})

feature2.addEventListener('mouseover', function() {
    arr = [feature1, feature3, feature4];
    blurred(feature2);
})

feature2.addEventListener('mouseleave', function() {
    arr = [feature1, feature3, feature4];
    unBlurred(feature2);
})

feature3.addEventListener('mouseover', function() {
    arr = [feature2, feature1, feature4];
    blurred(feature3);
})

feature3.addEventListener('mouseleave', function() {
    arr = [feature2, feature1, feature4];
    unBlurred(feature3);
})

feature4.addEventListener('mouseover', function() {
    arr = [feature2, feature3, feature1];
    blurred(feature4);
})


feature4.addEventListener('mouseleave', function() {
    arr = [feature2, feature3, feature1];
    unBlurred(feature4);
})

// Open & close products images;
const modalProducts = document.querySelector('.modal-products');
const previewsImg = document.querySelectorAll('.product-box img');
const modalImg = document.querySelector('.modal-img');
const modalTxt = document.querySelector('.modal-text');
const closeModalProducts = document.querySelector('.close');

previewsImg.forEach(preview => {
    preview.addEventListener('click', () => {
        modalProducts.classList.add('appear');
        //Dynamic change image and text
        const modalImgSrc = preview.getAttribute('data-original');
        modalImg.src = `../images/products/full/${modalImgSrc}`;
        modalTxt.innerHTML = preview.alt;
    });

    closeModalProducts.addEventListener('click', () => {
        modalProducts.classList.remove('appear');
    })
})

//Open build photo;


//Scroll back to top;
scrollBtn = document.querySelector('.scroll-back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

//Automatic Pop Up
const popUp = document.querySelector('.auto-popUp');
const closePopUp = document.querySelector('.close-popUp');

window.onload = function() {
    setTimeout(function() {
        popUp.classList.add('show');
    }, 1000);
}

closePopUp.onclick = () => {
    popUp.classList.remove('show');
}