// Выбрали поле кнопка
const btnForm = document.querySelector('#comments-form button');
// счетчик комментариев
let countComments = 0;
let idComment = 0

// повесили событие клик на кнопку
btnForm.onclick = function () {
    idComment++;
    let form = document.querySelector('#comments-form');
    // Берем из полностью всего блока форм аттрибуты по имени/name (поле комментариев и имени) и отлавливаем ошибки если они есть
    if(form.name.value.length < 4) {
        document.querySelector('#error').innerHTML = 'Длина имени не менее 4-х символов';
        return false;
    } else if (form.comment.value.length < 10) {
        document.querySelector('#error').innerHTML = 'Длина сообщения не менее 10-ти символов';
        return false;
    };
    // если ошибок нет - очищаем блок с ошибками
    document.querySelector('#error').innerHTML = '';

    // Установим новое значение для подсчета комментариев 
    if (countComments == 0) {
        document.querySelector("#comments").innerHTML = '';
    }

    // Увеличиваем количество комментариев на 1 
    countComments ++;
    document.querySelector('.count-comm').innerHTML = countComments;

    // Создаем переменную в которую будет помещаться непосредственно сам комментарий прямо у нас на сайте
    let newComment = "<div class='new_comment' id='comentariy-" + 
        idComment + "'>" +
        "<span class='delete' onclick='delComm("+
        + idComment + ")'>&times;</span>" +
        "<p class='name'>" + form.name.value +"</p>" +
        "<p class='comment'>" + form.comment.value +"</p>" +
        "</div>";
    
    document.querySelector('#comments').insertAdjacentHTML('afterbegin', newComment);

    var array = [form.name.value, form.comment.value]
    localStorage.setItem(idComment, array);

    // Очистка формы
    form.comment.value = '';
};

function delComm(id) {
    document.querySelector('#comentariy-' + id).remove();

    countComments --;
    document.querySelector(".count-comm").innerHTML = countComments;

    if (countComments == 0) {
        document.querySelector('#comments').innerHTML = 'Пока комментариев нет';
    };
};



