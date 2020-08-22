/*
TODO app
В самом простом виде это будет инпут для ввода задач и список задач с чекбоксами для маркировки задач как сделанных.
Дальше можно добавлять:
-Перечеркивание задачи при маркировке как сделанной
-Удаление задач
-Можно добавить чекбокс "сделано", редактирование, бутстрап, категории заметок
*/

document.addEventListener('DOMContentLoaded', () => {
  addTaskForm();

  function addTaskForm() {
    addTaskFormDescription();
    function addTaskFormDescription() {
      let p = document.createElement('p');
      p.textContent = 'Добавьте задачу:';
      document.body.appendChild(p);
    }
    

    let form = document.createElement('form');
    form.className = 'form';
    document.body.appendChild(form);


    addInputAdd(form);
    function addInputAdd(form) {
      let inputAdd = document.createElement('input');
      inputAdd.className = 'input_add'
      form.appendChild(inputAdd);
    }
    

    addInputAddButton(form)
    function addInputAddButton(form) {
      let inputAddButton = document.createElement('button');
      inputAddButton.className = 'input_add_button'
      inputAddButton.textContent = 'Добавить';
      inputAddButton.style.marginLeft = '10px';
      form.appendChild(inputAddButton);
    }


    form.addEventListener('submit', (event) => {
      event.preventDefault();

      addTasksList();
      function addTasksList() {
        addcheckBoxForm();
        function addcheckBoxForm() {
          let checkBoxForm = document.createElement('form');
          checkBoxForm.className = 'checkbox_form'
          checkBoxForm.style.margin = '10px';
          document.body.appendChild(checkBoxForm);


          addCheckBox();
          function addCheckBox() {
            let checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBoxForm.appendChild(checkBox);


            addCheckBoxText();
            function addCheckBoxText() {
              let inputAdd = document.querySelector('.input_add');
              let checkText = document.createElement('span');
              checkText.textContent = inputAdd.value;
              checkBoxForm.appendChild(checkText);

              inputAdd.value = '';


              checkBox.addEventListener('click', () => {
                if(checkBox.checked) {
                  checkText.style.textDecoration = 'line-through';
                } else {
                  checkText.style.textDecoration = "none";
                }
              });
            }
          }
          addDeleteButton();
          function addDeleteButton() {
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.style.marginLeft = '10px';
            checkBoxForm.appendChild(deleteButton);


            deleteButton.addEventListener('click', () => {
              event.preventDefault();
              checkBoxForm.remove();
            })
          }


          addEditButton();
          function addEditButton() {
            let editButton = document.createElement('button');
            editButton.textContent = 'Редактировать';
            editButton.style.marginLeft = '10px';
            checkBoxForm.appendChild(editButton);


            editButton.addEventListener('click', () => {
              event.preventDefault();
              addFormEdit();
              function addFormEdit() {
                let formEdit = document.createElement('form');
                formEdit.style.margin = '10px'
                checkBoxForm.appendChild(formEdit);


                addInputEdit();
                function addInputEdit() {
                  let inputEdit = document.createElement('input');
                  formEdit.appendChild(inputEdit);
                }


                addInputEditButton();
                function addInputEditButton() {
                  let inputEditButton = document.createElement('button');
                  inputEditButton.textContent = 'Добавить';
                  inputEditButton.style.marginLeft = '10px';
                  formEdit.appendChild(inputEditButton);
                }


                formEdit.addEventListener('submit', (event) => {
                  event.preventDefault();
                  checkText.textContent = inputEdit.value;
                  formEdit.remove();
                })
              }
            })
          }
        }
      }
    })
  }
})
