// const textInput = document.getElementById('task-text');
const addButton = document.getElementById('add-btn');
const textInput = document.querySelector("#task-text");
const list = document.getElementById('task-list');

addButton.addEventListener('click', () => {
     const li = document.createElement('li');
     const deleteBtn = document.createElement('button');
     deleteBtn.textContent = 'delete';
     const chkBox = document.createElement('input');
     const textBox = document.createElement('li');
     chkBox.type = 'checkbox'
     textBox.textContent = textInput.value;
     // li.textContent = textInput.value;
     chkBox.addEventListener('change', ()=> {
          if(chkBox.checked) {
               textBox.style.textDecoration = 'line-through'
               textBox.style.opacity = '0.5';
          } else {
               textBox.style.textDecoration = 'none';
               textBox.style.opacity = '1';
          }
     })
     textBox.appendChild(chkBox);
     textBox.appendChild(deleteBtn);
     list.appendChild(textBox);
     deleteBtn.addEventListener('click', () => {
          if(chkBox.checked) {
               list.removeChild(textBox);
          }
     })
     textInput.value = "";
})