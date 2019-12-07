


const addTask = (text) => {
    const appElement = document.createElement('div');
    appElement.classList.add('app-element');

    const appElementBar = document.createElement('div');
    appElementBar.classList.add('app-element-bar')

    const appElementDate = document.createElement('h3');
    appElementDate.classList.add('app-element-date');
    const date = new Date();
    const dateText = `${date.getMonth() + 1 < 10 ? '0' + date.getMonth() + 1 : date.getMonth() + 1}-${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}-${date.getFullYear()} godz. ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
    appElementDate.innerText = dateText;

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
    const AppDoneList = document.querySelector('#appDoneList')



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
            AppDoneList.appendChild(delateTask);
            const btnsDelate = AppDoneList.querySelectorAll('button');

            btnsDelate.forEach(btn => btn.innerText = '')

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