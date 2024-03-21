function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let acessarestoque2 = document.querySelector('.acessarestoque2');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menublack.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/closeblack.png";
    }
}