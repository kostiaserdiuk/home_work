let ukrLang = document.querySelector('#ukr')
let engLang = document.querySelector('#eng')
let home = document.querySelector('#home')
let about = document.querySelector('#about')
let apps = document.querySelector('#apps')
let products = document.querySelector('#products')
let contact = document.querySelector('#contact')
let language = {
    eng : {
        'home' : 'Home',
        'about' : 'About us',
        'apps' : 'Apps',
        'products' : 'VR Products',
        'contact' : 'Contact'
    },
    ukr : {
        'home' : 'Головна сторінка',
        'about' : 'Про нас',
        'apps' : 'Програми',
        'products' : 'VR-товари',
        'contact' : 'Контакти'
    }
}

function changeLanguage(lang) {
    location.hash = lang;
    location.reload();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

if (window.location.hash){
    if (window.location.hash == '#ukr'){
        home.textContent = language.ukr.home
        about.textContent = language.ukr.about
        apps.textContent = language.ukr.apps
        products.textContent = language.ukr.products
        contact.textContent = language.ukr.contact
        ukrLang.style.color = 'black'
        engLang.style.color = '#818181'  
    }
}

