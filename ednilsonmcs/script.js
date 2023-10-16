function getHours() {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(() => {
    getHours()
}, 1000)

function add() {
    let li = document.createElement('li');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    createCloseButton(li);
}

function remove() {
    let li = document.createElement('li');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);

    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";

    createCloseButton(li);
}

function createCloseButton(li) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
  
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "none";
  }

  function add() {
    const num1 = Number(document.form_main.num1.value);
    const num2 = Number(document.form_main.num2.value);
    const result = num1 + num2;

    document.getElementById("result").value = result; 
    
  }

  function subtract() {
    const num1 = Number(document.form_main.num1.value);
    const num2 = Number(document.form_main.num2.value);
    const result = num1 - num2;

    document.getElementById("result").value = result; 
    
  }

  function divide() {
    const num1 = Number(document.form_main.num1.value);
    const num2 = Number(document.form_main.num2.value);
    const result = num1 / num2;

    document.getElementById("result").value = result; 
    
  }

  function multiply() {
    const num1 = Number(document.form_main.num1.value);
    const num2 = Number(document.form_main.num2.value);
    const result = num1 * num2;

    document.getElementById("result").value = result; 
    
  }