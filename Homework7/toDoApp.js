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
})


function addTaskForm() {
  addTaskFormDescription();

  let form = document.createElement('form');
  form.className = 'form_task'
  form.className = 'form';
  document.body.appendChild(form);

  addInputAdd(form);
  
  addInputAddButton(form);

  //addCategoryForm(form);

  addCategoryDiv(form);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    addTasksList();
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

/*
function addCategoryForm(form) {
  let categoryForm = document.createElement('form');
  categoryForm.className = 'form_category';
  categoryForm.style.marginTop = '10px';
  form.appendChild(categoryForm);

  addCategorySelect(categoryForm);

  addCategoryButton(categoryForm);
}
*/

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


function addTasksList() {
  addcheckBoxForm();
}


function addcheckBoxForm() {
  let checkBoxForm = document.createElement('form');
  checkBoxForm.className = 'checkbox_form'
  checkBoxForm.style.margin = '10px';
  document.body.appendChild(checkBoxForm);

  addCheckBox(checkBoxForm);
  
  addDeleteButton(checkBoxForm);

  addEditButton(checkBoxForm);
}


function addCheckBox(checkBoxForm) {
  let checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  checkBoxForm.appendChild(checkBox);

  addCheckBoxText(checkBoxForm, checkBox);

  addCheckBoxCategory(checkBoxForm);
}


function addCheckBoxText(checkBoxForm, checkBox) {
  let inputAdd = document.querySelector('.input_add');
  let checkText = document.createElement('span');
  checkText.className = 'checkbox_text'
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


function addCheckBoxCategory(checkBoxForm) {
  let selectedOption = document.querySelector('.category_select').value;
  let checkBoxCategory = document.createElement('span');
  checkBoxCategory.className = 'category_text';
  checkBoxCategory.style.marginLeft = '10px';
  checkBoxCategory.style.padding = '2px';
  checkBoxCategory.style.border = '1px solid black';
  checkBoxCategory.style.borderRadius = '2px';
  checkBoxCategory.textContent = selectedOption;
  checkBoxForm.appendChild(checkBoxCategory);
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