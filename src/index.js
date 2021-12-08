document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value, e.target.date.value)
    form.reset()
  })
  
  function addToDo(todo, date) {
    let li = document.createElement('li')
    li.textContent = `${todo}, Due: ${date}   `

    let textColor = document.getElementById('prioritize').value
    li.style.color = textColor

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'

    let taskList = document.getElementById('tasks')
   
    li.appendChild(deleteBtn).addEventListener('click', deleteEvent)
    taskList.appendChild(li)
  }

  function deleteEvent(e) {
    e.target.parentNode.remove()
  }
})

