let number = parseInt(prompt("Inserisci un numero intero"));
if (number != NaN) {
    if (number % 2 == 0) {
        console.log(number);
    } else console.log(number + 1);
} else console.log("Non hai inserito un numero");