const aside = document.querySelector('aside');
let windowWidth = window.innerWidth;

if (windowWidth < 768)
    aside.attributeStyleMap.set('left', CSS.px(-30));

const pathname = window.location.pathname.split('/').pop();
console.log(pathname);

aside.addEventListener('click', () => {
    if (aside.computedStyleMap().get('left').value < 30) {
        aside.attributeStyleMap.set('left', CSS.px(30));
    }
})

document.body.addEventListener('click', () => {
    if (windowWidth < 768)
        aside.attributeStyleMap.set('left', CSS.px(-30));
}, true);

window.onresize = () => {
   windowWidth = window.innerWidth;
}

console.log()