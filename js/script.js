
// Selection
const TodoForm = document.querySelector('#TodoForm')
const TodoInput = document.querySelector('#TodoInput')
const TodoList = document.querySelector('#TodoList')
const EditForm = document.querySelector('#HideDiv')
const CancelEditBtn = document.querySelector('#CancelEditBtn')
const ConfirmEditBtn = document.querySelector('#ConfirmEditBtn')
const NewTask = document.querySelector('#NewTask')

let OldTitle



// Events
TodoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const ValorTodo = TodoInput.value

    if(ValorTodo){
        SaveTodo(ValorTodo)
    }
})

document.addEventListener('click', (e) => {
    const TargetButton = e.target
    const ParentDiv = TargetButton.closest('div')
    let TodoTitle 

    if(ParentDiv && ParentDiv.querySelector('h3')){
        TodoTitle = ParentDiv.querySelector('h3').innerText
    }

    if(TargetButton.classList.contains('FinishTodo')){
        ParentDiv.classList.toggle('done')
    }

    if(TargetButton.classList.contains('EditTodo')){
        ToggleForm()

        NewTask.value = TodoTitle
        OldTitle = TodoTitle

    }

    if(TargetButton.classList.contains('RemoveTodo')){
        ParentDiv.remove()
    }
})

CancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault()

    ToggleForm()
})

ConfirmEditBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const ConfirmEditButtonValue = NewTask.value

    if(ConfirmEditButtonValue){
        UpdateTodo(ConfirmEditButtonValue)
    }

    ToggleForm()
})



// Functions
const SaveTodo = (text) =>{
    const Todo = document.createElement('div')
    Todo.classList.add('TodoList')

    const TodoTitle = document.createElement('h3')
    TodoTitle.innerText = text
    Todo.appendChild(TodoTitle)

    const DoneBtn = document.createElement('button')
    DoneBtn.classList.add('FinishTodo')
    DoneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    
    Todo.appendChild(DoneBtn)

    const EditBtn = document.createElement('button')
    EditBtn.classList.add('EditTodo')
    EditBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    
    Todo.appendChild(EditBtn)


    const RemoveBtn = document.createElement('button')
    RemoveBtn.classList.add('RemoveTodo')
    RemoveBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    
    Todo.appendChild(RemoveBtn)

    TodoList.appendChild(Todo)
    TodoInput.value = ''
    TodoInput.focus()
}
const ToggleForm = () =>{
    EditForm.classList.toggle('Hide')
    EditForm.classList.toggle('EditForm')
    TodoList.classList.toggle('Hide')
    TodoForm.classList.toggle('Hide')
}

const UpdateTodo = (text) => {
    const AllTodos = document.querySelectorAll('.TodoList')
    console.log(AllTodos[0])

    AllTodos.forEach((item) => {
        let TodoTitle = item.querySelector('h3')

        if(TodoTitle.innerText === OldTitle){
            TodoTitle.innerText = text
        }
    })

}