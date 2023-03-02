
let inp_name = document.querySelector('.inp_name');
let inp_surname = document.querySelector('.inp_surname');
let inp_birthday = document.querySelector('.inp_birthday');
let btn_add = document.querySelector('.btn_add');
let btn_clear = document.querySelector('.btn_clear');
let cont = document.querySelector('.container');

let users = [];
let btn = [];

// Пошук користувача в масиві
const findUser = (name,surname) => {
    for (let i=0; i<users.length; i++) {
        if (name === users[i].name && surname === users[i].surname) return true;
    }
    return false;
}

// формування контейнера
const render = () => {
    let contHTML = "";
    for (let i=0; i<users.length; i++) {
        contHTML += `
            <div class="item">
                <div class="number">
                    ${(i+1)}
                </div>
                <div class="name">
                    ${users[i].name}
                </div>
                <div class="surname">
                    ${users[i].surname}
                </div>
                <div class="birthday">
                    ${users[i].birthday}
                </div>
                <div class="div_btn">
                    <button class="btn_item" ><img src="./img/basket.png" width="60" id="btn${i}"></button> 
                </div>
            </div>
            `;
    }
    cont.innerHTML = contHTML;
    for (let i=0; i<users.length; i++) {
        btn[i] = document.querySelector(`#btn${i}`);
        btn[i].addEventListener('click', removeItem);
    }    
};

// Видалення елемента
const removeItem = (ev) => {
    let n = Number(ev.target.id.slice(3));
    users.splice(n,1);
    render();
};

// Додавання користувача
btn_add.addEventListener('click', () => {
    let name = inp_name.value;
    let surname = inp_surname.value;
    let birthday = inp_birthday.value;
    if (!name || !surname || !birthday) return;
    if (findUser(name,surname)) {
        alert("Такий користувач вже існує !");
        return;
    }
    users.push({name: name, surname: surname, birthday: birthday});
    inp_name.value = "";
    inp_surname.value = "";
    inp_birthday.value = "";
    render();   
});

// повна очистка списка і контейнера
btn_clear.addEventListener('click', () => {
    users = [];
    btn = [];
    cont.innerHTML = "";
});
