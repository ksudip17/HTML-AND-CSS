
//Creating a Simple To do List or App

let todo = [];


let req = prompt("Please enter your request");

while(true) {
    if(req == "quit") {
        console.log("Quitting app");
        break;
    }

    if(req == "list"){
        console.log("-------------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("-------------------------");
    }

        else if(req == "add") {
            let task = prompt("pleae enter the task you want to add");
            todo.push(task);
            console.log("task added");
        } 
        else if(req == "delete") {
            let index = prompt("please enter the task index");
            todo.splice(index, 1);
            console.log("task deleted");
        }
        else {
            console.log("wrong request");
        }


         req = prompt("please enter your request");
}
