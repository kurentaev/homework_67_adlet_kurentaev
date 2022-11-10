let urlParams = new URLSearchParams(window.location.search);
let param = urlParams.get('id')

$.ajax({
    url: 'https://www.breakingbadapi.com/api/characters/' + `${param}`,
    method: 'GET',
    async: false,
    success: function (data) {
        object = data
    }
});

output.innerHTML = "";

object.map(object => {
    const htmlString = `
        <div class="card" style="max-width: 1200px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${object.img}" class="img-fluid rounded-start" alt="image">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class='names'>Name: ${object.name}</h5>
                <h5 class='names'>Age: ${get_current_age(object.birthday)}</h5>
                <h5 class='names'>Occupation: ${object.occupation}</h5>
                <h5 class='names'>Status: ${object.status}</h5>
                <h5 class='names'>Nickname: ${object.nickname}</h5>
                <h5 class='names'>Appearance: ${object.appearance}</h5>
                <h5 class='names'>Portrayed: ${object.portrayed}</h5>
               </div>
            </div>
          </div>
        </div>`;
let outputString = document.createElement('div');
outputString.classList.add();
outputString.innerHTML = htmlString;
output.appendChild(outputString);
});

function get_current_age(date) {
    if (date !== 'Unknown') {
        return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
    } else {
        return date
    }
}
