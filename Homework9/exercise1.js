/*
1. Сделать запрос за комментариями сюда
https://jsonplaceholder.typicode.com/comments
получив комментарии, отрезать и оставить только первые 30 комментариев, и их отрисовать на странице (в любом виде), свойства name, email и body необходимо отрисовывать 
*/

let xhr = new XMLHttpRequest();
xhr.onload = () => {
  let comments = JSON.parse(xhr.responseText);

  let div = document.createElement('div');
  let ul = document.createElement('ul');
  div.appendChild(ul);
  document.body.appendChild(div);

  for (let i = 0; i < 30; i++) {
    let li = document.createElement('li');

    let nameCont = document.createElement('p');
    nameCont.textContent = 'name: ' + comments[i].name
    li.appendChild(nameCont);

    let emailCont = document.createElement('p');
    emailCont.textContent = 'email: ' + comments[i].email;
    li.appendChild(emailCont);

    let bodyCont = document.createElement('p');
    bodyCont.textContent = 'body: ' + comments[i].body;
    li.appendChild(bodyCont);

    ul.appendChild(li);
  }
}

xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments');
xhr.send();