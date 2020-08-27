/*
Читать (метод GET) и сохранять (метод POST) задачи в todo App по этому урлу
https://todoappexamplejs.herokuapp.com/items.json
*/

document.addEventListener('DOMContentLoaded', () => {
  addTaskForm();
})


function addTaskForm() {
  addTaskFormDescription();

  let form = document.createElement('form');
  form.className = 'form_task'
  form.className = 'form';
  document.body.appendChild(form);

  let tasks = [];

  addInputAdd(form);
  
  addInputAddButton(form);

  addCategoryDiv(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTasksList(tasks);
  });
}


function addTaskFormDescription() {
  let p = document.createElement('p');
  p.textContent = 'Добавьте задачу:';
  document.body.appendChild(p);
}


function addInputAdd(form) {
  let inputAdd = document.createElement('input');
  inputAdd.className = 'input_add'
  form.appendChild(inputAdd);
}


function addInputAddButton(form) {
  let inputAddButton = document.createElement('button');
  inputAddButton.className = 'input_add_button'
  inputAddButton.textContent = 'Добавить задачу';
  inputAddButton.style.marginLeft = '10px';
  form.appendChild(inputAddButton);
}


function addCategoryDiv(form) {
  let categoryDiv = document.createElement('div');
  categoryDiv.className = 'category_container';
  categoryDiv.style.display = 'inline-block';
  form.appendChild(categoryDiv);

  addCategorySelect(categoryDiv);

  addCategoryButton(categoryDiv);
}


function addCategorySelect(categoryDiv) {

  let categorySelect = document.createElement('select');
  categorySelect.className = 'category_select'
  categorySelect.style.marginLeft = '10px';
  
  addCategoryOptions(categorySelect, 'Учеба');
  addCategoryOptions(categorySelect, 'Спорт');
  addCategoryOptions(categorySelect, 'Хобби');

  categoryDiv.appendChild(categorySelect);
}


function addCategoryOptions(categorySelect, optionName) {
  let categoryOption = document.createElement('option');
  categoryOption.value = optionName;
  categoryOption.textContent = optionName;
  categorySelect.appendChild(categoryOption);
}


function addCategoryButton(categoryDiv) {
  let categoryButton = document.createElement('button');
  categoryButton.className = 'category_button';
  categoryButton.textContent = 'Добавить категорию';
  categoryButton.style.marginLeft = '10px';
  categoryDiv.appendChild(categoryButton);

  categoryButton.addEventListener('click', () => {
    event.preventDefault();

    addCategoryForm(categoryDiv);
  })
}


function addCategoryForm(categoryDiv) {
  let categoryForm = document.createElement('form');
  categoryForm.className = 'form_category';
  categoryForm.style.display = 'inline';

  categoryDiv.appendChild(categoryForm);

  addCategoryInput(categoryForm);

  addCategoryAddButton(categoryForm);
}


function addCategoryInput(categoryForm) {
  let categoryInput = document.createElement('input');
  categoryInput.className = 'input_category';
  categoryInput.style.marginLeft = '10px';
  categoryForm.appendChild(categoryInput);

  categoryForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    let categorySelect = document.querySelector('.category_select');
    let categoryInput = document.querySelector('.input_category');
    addCategoryOptions(categorySelect, categoryInput.value);
    categoryInput.value = '';

    categoryForm.remove();
  })
}


function addCategoryAddButton(categoryForm) {
  let categoryAddButton = document.createElement('button');
  categoryAddButton.style.marginLeft = '10px';
  categoryAddButton.textContent = 'Добавить';
  categoryForm.appendChild(categoryAddButton);
}


function addTasksList(tasks) {
  addcheckBoxForm(tasks);
}


function addcheckBoxForm(tasks) {
  let checkBoxForm = document.createElement('form');
  checkBoxForm.className = 'checkbox_form'
  checkBoxForm.style.margin = '10px';
  document.body.appendChild(checkBoxForm);

  addCheckBox(tasks, checkBoxForm);
  
  addDeleteButton(checkBoxForm);

  addEditButton(checkBoxForm);

  let time = (new Date).getTime();
}


function addCheckBox(tasks, checkBoxForm) {
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBoxForm.appendChild(checkBox);

  addCheckBoxText(tasks, checkBoxForm, checkBox);

  addCheckBoxCategory(tasks, checkBoxForm);
}


function addCheckBoxText(tasks, checkBoxForm, checkBox) {
  let inputAdd = document.querySelector('.input_add');
  let checkText = document.createElement('span');
  checkText.className = 'checkbox_text'
  checkText.textContent = inputAdd.value;
  checkBoxForm.appendChild(checkText);

  inputAdd.value = '';

  addLocalStorageTasks(tasks, checkText);

  addCheckBoxTimeSpan(tasks, checkBoxForm);

  checkBox.addEventListener('click', (event) => {
    let flag = false;
    if(checkBox.checked) {
      checkText.style.textDecoration = 'line-through';
      flag = true;
    } else {
      checkText.style.textDecoration = "none";
    }

    addLocalStorageTasksDone(event, tasks, flag);
  });
}


function addLocalStorageTasks(tasks, checkText) {
  tasks.push({taskName: checkText.textContent, taskDone : false});
  localStorage.tasks = JSON.stringify(tasks);
}


function addCheckBoxTimeSpan(tasks, checkBoxForm) {
  let timeSpan = document.createElement('span');
  timeSpan.className = 'span_time';
  timeSpan.textContent = (new Date).getTime();
  timeSpan.style.display = 'none';
  checkBoxForm.appendChild(timeSpan);

  addLocalStorageTime(tasks, timeSpan);
}


function addLocalStorageTime(tasks, timeSpan) {
  let n = tasks.length - 1;
  tasks[n].time = timeSpan.textContent;
  localStorage.tasks = JSON.stringify(tasks);
}


function addLocalStorageTasksDone(event, tasks, flag) {
  let time = event.target.closest('form').querySelector('.span_time').textContent;
  for (let element of tasks) {
    if (time === element.time) {
      element.taskDone = flag;
    }
  }
  localStorage.tasks = JSON.stringify(tasks);
}


function addCheckBoxCategory(tasks, checkBoxForm) {
  let selectedOption = document.querySelector('.category_select').value;
  let checkBoxCategory = document.createElement('span');
  checkBoxCategory.className = 'category_text';
  checkBoxCategory.style.marginLeft = '10px';
  checkBoxCategory.style.padding = '2px';
  checkBoxCategory.style.border = '1px solid black';
  checkBoxCategory.style.borderRadius = '2px';
  checkBoxCategory.textContent = selectedOption;
  checkBoxForm.appendChild(checkBoxCategory);

  addLocalStorageCategory(tasks, checkBoxCategory);
}


function addLocalStorageCategory(tasks, checkBoxCategory) {
  let n = tasks.length - 1;
  tasks[n].category = checkBoxCategory.textContent;
  localStorage.tasks = JSON.stringify(tasks);
}


function addDeleteButton(checkBoxForm) {
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Удалить';
  deleteButton.style.marginLeft = '10px';
  checkBoxForm.appendChild(deleteButton);


  deleteButton.addEventListener('click', () => {
    event.preventDefault();
    checkBoxForm.remove();
  })
}


function addEditButton(checkBoxForm) {
  let editButton = document.createElement('button');
  editButton.textContent = 'Редактировать';
  editButton.style.marginLeft = '10px';
  checkBoxForm.appendChild(editButton);

  editButton.addEventListener('click', () => {
    event.preventDefault();
    addFormEdit(checkBoxForm);
  })
}


function addFormEdit(checkBoxForm) {
  let formEdit = document.createElement('form');
  formEdit.className = 'form_edit';
  formEdit.style.margin = '10px'
  checkBoxForm.appendChild(formEdit);

  addInputEdit(formEdit);
  
  addInputEditButton(formEdit);
}


function addInputEdit(formEdit) {
  let inputEdit = document.createElement('input');
  formEdit.appendChild(inputEdit);


  formEdit.addEventListener('submit', (event) => {
    event.preventDefault();

    checkText = document.querySelector('.checkbox_text');
    checkText.textContent = inputEdit.value;
    formEdit.remove();
  })
}


function addInputEditButton(formEdit) {
  let inputEditButton = document.createElement('button');
  inputEditButton.textContent = 'Добавить';
  inputEditButton.style.marginLeft = '10px';
  formEdit.appendChild(inputEditButton);
}