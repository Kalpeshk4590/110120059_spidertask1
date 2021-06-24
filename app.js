document.querySelector('form').addEventListener('submit', handleSubmitform);
document.querySelector('ul').addEventListener('click', handleclickdeleteorcheck);
document.getElementById('clearall').addEventListener('click', handleclearall);

function handleSubmitform(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
    AddTodo(input.value);
    input.value = '';
    }

    function handleclickdeleteorcheck(e){
       if(e.target.name == "checkbutton")
       doneTodo(e);
       if(e.target.name == "deletebutton")
       deleteTodo(e);
    }
    function handleclearall(e){
        document.querySelector('ul').innerHTML = '';
    }

   function AddTodo(todo){
       let ul = document.querySelector('ul');
       let li = document.createElement('li');

       li.innerHTML = `   <span class="todoitem">${todo}</span>
       <button name = "checkbutton"> <i class = "fas fa-check-square"></i></button>
       <button name = "deletebutton"><i class = "fas fa-trash"></i></button>
        `;
        li.classList.add('todo-list-item');
        ul.appendChild(li);
}
function doneTodo(e){
    let item =e.target.parentNode;
    if( item.style.textDecoration == 'line-through')
     item.style.textDecoration = 'none';
     else
     item.style.textDecoration = 'line-through';
}
function  deleteTodo(e){
    let item = e.target.parentNode;
 
item.remove();

}
