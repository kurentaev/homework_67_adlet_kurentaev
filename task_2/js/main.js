$.ajax({
    url: 'https://www.breakingbadapi.com/api/characters',
    method: 'GET',
    async: false,
    success: function (data) {
        objects = data
    }
});

output.innerHTML = "";

for (let object of objects) {
    objects.map(object => {
        const htmlString = `<img src="${object.img}" class="img">
            <div class="info-display">
                <a href='character.html?id=${object.char_id}'><h5 class='names'>${object.name}</h5></a>
            </div>`;
    let outputString = document.createElement('div');
    outputString.classList.add('col-md-3', 'mb-3', 'img-info');
    outputString.innerHTML = htmlString;
    output.appendChild(outputString);
    });
}
