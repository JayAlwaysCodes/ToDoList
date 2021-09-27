
let form = document.querySelector('form.row');

let ul = document.querySelector(".task_list");
let htmlTemplate = function(toDo){
    let li = `
    <li>${toDo}<span class="del">X</span></li>
    `;
    ul.innerHTML += li;
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    let toDo = form.task.value.trim();

    if(toDo.length){
        htmlTemplate(toDo);
        form.reset();

    }

})

ul.addEventListener("click", e => {
    if(e.target.classList.contains("del")){
        e.target.parentElement.remove();
    }
})


var checkbox = document.querySelector('input[name=theme]');



 
checkbox.addEventListener('change', function() {
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')

    }else{
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
        }
    })

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() =>{
        document.documentElement.classList.remove('transition')
    },1000)
}