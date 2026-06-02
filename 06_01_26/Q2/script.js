const textInput = document.querySelector("#task-text");
const addBtn = document.querySelector("#add-btn");
const inputValues = document.querySelector("#task-list");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn")
const searchedItems = document.querySelector("#search-items");

addBtn.addEventListener('click', () => {
     const val = textInput.value;
     const li = document.createElement('li');
     li.textContent = val;
     inputValues.appendChild(li);
     inputs.push(val)
     textInput.value = "";
});

searchBtn.addEventListener('click', ()=> {
     const search = searchBox.value;
     inputValues.forEach((item) => {
          if(item.value.includes(search)) {
               const searchedItem = document.createElement('li');
               li.innerHTML = item.value;
               searchedItems.appendChild(searchedItem);
          }
     })
});