
function newDate() {

    const date = new Date();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const days = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    const monthName = months[date.getMonth()];
    const dayName = days[date.getDay()];

    const dateText = `${dayName} ${date.getDate()} ${monthName}-${date.getFullYear()} godz. ${date.getHours()}:${date.getMinutes()}`

    return dateText;

}

const addTask = (text) => {
    const appElement = document.createElement('div');
    appElement.classList.add('app-element');

    const appElementBar = document.createElement('div');
    appElementBar.classList.add('app-element-bar')

    const appElementDate = document.createElement('h3');
    appElementDate.classList.add('app-element-date');



    appElementDate.innerText = newDate()

    const appElementBtn = document.createElement('button');
    appElementBtn.classList.add('app-element-button');
    appElementBtn.innerHTML = ' <i class="fas fa-minus-circle"></i>'

    appElementBar.appendChild(appElementDate);
    appElementBar.appendChild(appElementBtn);

    const appElementText = document.createElement('p')
    appElementText.classList.add('app-element-text');
    appElementText.textContent = text;


    appElement.appendChild(appElementBar);
    appElement.appendChild(appElementText);

    appTaskList.appendChild(appElement);


}


document.addEventListener('DOMContentLoaded', function () {
    const appTaskList = document.querySelector('#appTaskList');
    const appForm = document.querySelector('#appForm');
    const appSearch = document.querySelector('#appSearch')
    const appDoneList = document.querySelector('#appDoneList')





    appForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const textarea = document.querySelector('textarea')
        if (textarea !== '') {
            addTask(textarea.value)
            console.log(textarea.value)
            textarea.value = ''
        }
    })

    appTaskList.addEventListener('click', (e) => {
        if (e.target.className === 'fas fa-minus-circle') {
            const todoElem = e.target.closest('.app-element');
            let delateTask = todoElem.parentNode.removeChild(todoElem)
            delateTask.style.top = 0
            delateTask.style.left = 0
            appDoneList.appendChild(delateTask);
            const btnsDelate = appDoneList.querySelectorAll('button');

            btnsDelate.forEach(btn => btn.innerText = '')
            const allh3 = document.querySelectorAll('h3');

            allh3.forEach(h3 => {

                const date = newDate();

            })

        }
    })

    appSearch.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        const elements = [...appTaskList.querySelectorAll('.app-element')]

        elements.forEach(element => {

            const searchText = element.querySelector('.app-element-text').innerText.toLowerCase()

            if (searchText.indexOf(value) !== -1) {
                element.style.setProperty('display', '')

            } else {
                element.style.setProperty('display', 'none')
            }
        })

    })






})







