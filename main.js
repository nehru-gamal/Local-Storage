let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span =>{

    span.addEventListener("click", (e) => {

        if(e.target.classList.contains("check-item")){

            checkItem();

        }
        if(e.target.classList.contains("add-item")){

            addItem();

        }
        if(e.target.classList.contains("delete-item")){

            deleteItem();

        }
        if(e.target.classList.contains("show-item")){

            showItem();

        }

    })
})


function checkInput() {

    results.innerHTML = 'Input Cannot Embty';

}

function checkItem(){

    if(theInput.value !== ''){

        if(localStorage.getItem(theInput.value)){

            results.innerHTML = `Found Local Storge Item Called <span>${theInput.value}</span>`;

        }else{

            results.innerHTML = `No Local Storge Item With The Name <span>${theInput.value}</span>`;

        }

    }else{

        checkInput();

    }

}

function addItem(){

    if(theInput.value !== ''){

        localStorage.getItem(theInput.value)

            localStorage.setItem(theInput.value, "Test");

            results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;

            theInput.value = '';
    
    } else {

        checkInput();

    }

}

function deleteItem(){

    if(theInput.value !== ''){

        if(localStorage.getItem(theInput.value)){

            localStorage.removeItem(theInput.value);

            theInput.value = '';

            results.innerHTML = `Local Storge Item <span>${theInput.value}</span> Deleted`;


        }else{

            results.innerHTML = `No Local Storge Item With The Name <span>${theInput.value}</span>`;

        }

    } else {

        checkInput();

    }

}

function showItem(){

    if(localStorage.length){

        results.innerHTML = '';

        for(let [key, value] of Object.entries(localStorage)) {

            results.innerHTML += `<span class="keys">${key}</span>`;

        }

    }else{

        results.innerHTML = "Local Storage Is Embty"
    }

}