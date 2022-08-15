let textInputic = '';

function stanalArjeq(arjeq) {
    textInputic = arjeq;
}

function avelecnel() {
    let li = document.createElement('li');
    li.innerText = textInputic;
    let ul = document.querySelector('ul');	
    ul.appendChild(li);
}
