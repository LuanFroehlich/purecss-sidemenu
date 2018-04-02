/* load polyfill, load header, and init menu */
/*!
Copyright: 2018 KAMEDA Akihiro
nav.js | MIT License

*/
/*!
Copyright: 2013 Yahoo!
BSD License
https://github.com/yahoo/pure/blob/master/LICENSE.md
*/
/* --------------------------------------------------------------- */
/* check rel='import' is supported or not. if not, load "webcomponents-lite" as polyfill */

const loadPolyfill = function(){
    return new Promise(function (resolve, reject) {
        if ('import' in document.createElement('link')) { //check 'import' is supported or not
            resolve("loadPolyfill");
            console.log("loadPolyfill skipped.");
        } else {
            let script = document.createElement('script');
            script.src = 'http://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.1.0/webcomponents-lite.js';
            document.body.appendChild(script);
            script.onload = resolve("polyfill");
            console.log("loadPolyfill resolved.");
        }
    });
}

/* --------------------------------------------------------------- */
/* load header as webcomponents */

const loadHeader = function () {
    return new Promise(function (resolve, reject) {
        let link = document.createElement('link');
        link.rel = 'import';
        link.href = './component/menu.html'
        link.onload = function(e){
            const template = link.import.querySelector('template');
            const clone = document.importNode(template.content, true);
            document.querySelector('header').replaceChild(clone, document.querySelector('header').firstChild);
            resolve("loadHeader");
            console.log("loadHeader resolved.")
        }
        link.onerror = function(e) {
            console.log(new Error("loadHeader failed."));
        };
        document.head.appendChild(link);
    });
}

/* --------------------------------------------------------------- */
/* add onclick menu on menu and body */
// This function is based on https://purecss.io/js/ui.js

const initMenu = function(){
    return new Promise(function (resolve, reject) {
        let layout   = document.getElementById('layout'),
            menu     = document.getElementById('menu'),
            menuLink = document.getElementById('menuLink'),
            content  = document.getElementById('main');
        menuLink.onclick = function (e) {
            toggleAll(e);
        };
        content.onclick = function(e) {
            if (menu.className.indexOf('active') !== -1) {toggleAll(e);}
        };
        resolve("initMenu");
        console.log("initMenu resolved.")
    });
}

const toggleAll = function(e) {
    e.preventDefault();
    layout.classList.toggle('active');
    menu.classList.toggle('active');
    menuLink.classList.toggle('active');
}

/* --------------------------------------------------------------- */
/* all the processes are implemented as Promise instances */

window.onload = function(){
    Promise.resolve()
    .then(loadPolyfill)
    .then(loadHeader)
    .then(initMenu);
}
