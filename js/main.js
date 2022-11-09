function changeColor(color) {
    document.body.style.background = color;
    }

function modalWindow() {
    changeColor('rgba(0,0,0,0.4)');
    let box = document.createElement('div');
    box.className = 'element'

    let close = document.createElement('span');
    close.className = 'close'
    close.innerText = '×'

    let content = document.createElement('div');
    content.className = 'content'
    content.innerText = 'Some text'

    close.addEventListener('click', function() {
        container.removeChild(box);
        let element = document.getElementsByClassName('element');
        if(element.length >= 1) {changeColor('rgba(0,0,0,0.4)');} else {changeColor('white');}
    })
    container.appendChild(box).appendChild(content).appendChild(close)
    setTimeout(() =>{container.removeChild(box); changeColor('white');}, 5000)
}
