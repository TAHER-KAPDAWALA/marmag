const addTask=document.getElementById('add-task');
console.log("uesh")
const taskContainer=document.getElementById('task-container');
const inputTask=document.getElementById('input-task');

addTask.addEventListener('click',function(){
    let task=document.createElement('div');
    task.classList.add("task_add");
    task.classList.add('task');
    let li=document.createElement('li');
    li.innerText=`${inputTask.value}`;
    task.appendChild(li);


    let checkButton=document.createElement("button");
    checkButton.innerHTML=`<span class="material-symbols-outlined">
    done
    </span>`;
    checkButton.classList.add('checkTask');

    task.appendChild(checkButton);

    let deleteButton=document.createElement("button");
    deleteButton.innerHTML=`<span class="material-symbols-outlined">
    delete
    </span>`;
    deleteButton.classList.add('deleteTask')
    checkButton.classList.add('checkTask');
    task.appendChild(deleteButton);
    if(inputTask.value===""){
        alert('please enter the input');
    }else{
        taskContainer.appendChild(task);
    }

   inputTask.value="";


    checkButton.addEventListener('click',function(){
        checkButton.parentElement.style.textDecoration="line-through";
    });
    deleteButton.addEventListener('click',function(e){
        let target=e.target;
        target.parentElement.parentElement.remove();
    });



});
