/* 
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto :temporale_nuvola_e_pioggia:, formato da due proprietà:
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una ":x:": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo,
che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/

const {createApp} = Vue
createApp({

    data(){
        return{
            /* taskIndex : 0, */
            //memorizzo una newTask vuota alla quale aggiungero
            // tramite un .push le nuove cose da fare 
            newTask : [
                {
                  text : "",
                  done: false,
                },
              ],
            tasks : [
                {
                  text: "Fare lezione ",
                  done: true,
                },
                {
                  text: "Fare l'esercizio",
                  done: false,
                },
                {
                  text: "Andare a fare allenamento",
                  done: true,
                },
                {
                  text: "Preparare la cena",
                  done: false,
                }
              ],
        }
    }, 
    methods: {
        // aggiungo la funzione delete
        deleteTask(taskIndex){
            // devo eliminare un elemento dall'array al click
            //console.log(this.tasks[taskIndex]);
            // uso la proprietà splice
            this.tasks.splice(taskIndex, 1);
        },

        addTask(){
            //console.log("new"), funziona
            //aggiungo il testo scritto nell'input
            // nella lista di cose da fare
            // this.newTask
            /* this.tasks.push({...this.newTask});
            this.newTask = {
                text : '',
            }; */
             
            // .trim() elimina da quella stringa gli spazi vuoti
            // solo all'inizio e alla fine
            // quindi non posso inserire una stringa vuota nell'input
            if(this.newTask.text.trim() != "") {


              this.tasks.push({...this.newTask})
              this.newTask.text = ""

            }
            
            
            

 
        },
        /* onEnter(event){
          console.log("hai premuto invio")
        }, */
        toggleDone(index){
          //proprietà del task selezionato
          //console.log(this.tasks[index].done);
          // la inverto
          this.tasks[index].done = ! this.tasks[index].done;
          
        }

    },

}).mount("#app"); 

