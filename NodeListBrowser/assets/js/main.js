const paragraph = document.querySelector('.paragraph');
const pAll = paragraph.querySelectorAll('p');

const bodyStyle = getComputedStyle(document.body);
const backgroundColorBody = bodyStyle.backgroundColor;


for (const p of pAll) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
    p.style.borderRadius = '5px';
    p.style.paddingLeft = '10px';
}