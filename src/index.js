document.addEventListener("DOMContentLoaded", () => {
  // your code here
const createTaskForm = document.querySelector('#create-task-form');
const newTaskDescription = document.querySelector('#new-task-description')
function addTask(){
  const liTask = document.createElement('li');
  liTask.textContent = newTaskDescription.value;
  liTask.classname = 'list';


  const removeTask = document.createElement('button');
  removeTask.textContent = 'X';
  removeTask.addEventListener('click',()=> {
    console.log('pong!')
    liTask.remove();
  })
  liTask.append(removeTask);
  
  document.querySelector('#tasks').append(liTask)
}
createTaskForm.addEventListener('click',(e) => {
  if (newTaskDescription.value != ''){
  e.preventDefault();
  console.log('ping!')
  addTask();
  newTaskDescription.value='';}

})

});
