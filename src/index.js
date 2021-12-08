document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addToDo(e.target.new_task_description.value)
    form.reset()
  })
  function addToDo(todo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.textContent = 'Remove'
    p.textContent = `${todo}   `
    p.appendChild(btn).addEventListener('click', deleteEvent)
    document.getElementById('tasks').appendChild(p)
  }
  function deleteEvent(e) {
    e.target.parentNode.remove()
  }
})

