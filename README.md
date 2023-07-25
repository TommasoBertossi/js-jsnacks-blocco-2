# JSNACK

## Jsnack1

Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

### Logica

- Creo una variabile vuota 
- Chiedo all'utente di inserirci un numero
- Verifico che sia un numero Naturale
- **se** il resto della divisione per 2 è = 0
    - **allora** lo stampo
    - **altrimenti** aggiungo 1 al numero inserito

## Jsnack2

Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

### Logica

- Creo una lista di nomi
- Creo una lista di cognomi con lo stesso numero di elementi della lista di nomi
- Creo un generatore di numeri random
- Estraggo due numeri casuali
- Il primo numero sarà la posizione di un nome dalla lista dei nomi
- Il secondo numero sarà la posizione di un cognome dalla lista dei cognomi
- Ripeto il procedimento per tante volte quanti sono gli elementi nella lista dei nomi

## Jsnack3

Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


### Logica

- Creo un array di numeri interi
- Creo una variabile "somma" con dentro il numero 0
- **per ogni** intero del mio array
    - **se** il resto della divisione per 2 della sua posizione è = 1
    - aggiungo il numero in quella posizione alla mia variabile "somma"

## Jsnack4 (Bonus)

Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

### Logica

- Creo due array con un numero diverso di elementi
- **finchè** il numero degli elementi del primo array è diverso dal numero di elementi del secondo array
    - **se** il numero degli elementi del primo array è maggiore del numero di elementi del secondo array
        - aggiungi un elemento al secondo array
    - **se invece** il numero degli elementi del primo array è minore del numero di elementi del secondo array
        - aggiungi un elemento al primo array

