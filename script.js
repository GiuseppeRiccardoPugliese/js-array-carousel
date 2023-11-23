/* 
MILESTONE 1
Per prima cosa, creiamo il markup statico: l’html con tutto il necessario perchè funzioni il carosello.
(Se su qualche parte del layout vedete che ci state perdendo troppo tempo tralasciate i dettagli e passate alla parte logica il prima possibile).

MILESTONE 2
Al click dell’utente sulle frecce (sia Prev che Next), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/

const items = document.getElementsByClassName("item");
console.log(items);

let activeItem = 0;

//navigazione in su
const downBtn = document.getElementById("angle_down");

//aggiungo l'azione di scroll sopra al mio bottone
downBtn.addEventListener("click", function () {

    if (activeItem < items.length - 1) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //incremento l'indice dell'elemento da visualizzare
        activeItem++;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === items.length - 1) {
        //     //siamo arrivati all'ultimo elemento (sparisce la freccia (btn))
        //     downBtn.classList.add('hidden');
        // }

    }

}
)


//navigazione in su
const upBtn = document.getElementById("angle_up");

//aggiungo l'azione di scroll sopra al mio bottone
upBtn.addEventListener("click", function () {

    if (activeItem > 0) {
        //tolgo la classe active dall'elemento corrente
        items[activeItem].classList.remove('active');

        //decremento l'indice dell'elemento da visualizzare
        activeItem--;

        //aggiungo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        // if (activeItem === 0) {
        //     //siamo arrivati al primo elemento (sparisce la freccia (btn))
        //     upBtn.classList.add('hidden');
        // }

    }

}
)