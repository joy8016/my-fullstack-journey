let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {

        if (e.target.innerText == '=') {
            string = eval(string);
            document.querySelector('input').value = string.toFixed(2);
        }
        else if (e.target.innerText == 'AC') {
            string = " ";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerText;
            document.querySelector('input').value = string;
        }

    })
})