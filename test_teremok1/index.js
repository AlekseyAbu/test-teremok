const form = document.forms.form;

const answerArr = [];

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const selects = document.querySelectorAll('.block__select');
    const inputs = document.querySelectorAll('.block__input');

    for( let i = 0; i < selects.length; i++){
        answerArr.push([ 'select' + (i + 1), selects[i].value ])
    };

    for( let i = 0; i < inputs.length; i++){
        answerArr.push([ 'input' + (i + 1), inputs[i].value]) 
    };

    const data = Object.fromEntries(answerArr);
    const answerArrJSON = JSON.stringify(data);

    const blockResult = document.querySelector('.result');

    blockResult.insertAdjacentHTML('afterbegin', `<p class='result__text'>${answerArrJSON}</p>`)
    getData()
});

function getData () {
    return fetch('https://reqres.in/api/users?page=2', {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
    })
    .then(res => {
        if(res.ok){
            alert('Все работает!')
            return res
        }
        Promise.reject(`Ошибка: ${res.status}`)
    })
    .catch(err => console.log(err))
}





