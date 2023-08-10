interface ITodos {
    completed: boolean,
    text: string
}
  
export class TodoComponent {
    
    heading: string;
    todo: string;
    todos: ITodos[];

    constructor() {
      this.heading = 'Tehtävälista';
      this.todo = '';
      this.todos = [
        { completed: false, text: 'Harjoittele Aureliaa' },
        { completed: false, text: 'Mene kauppaan' },
        { completed: true, text: 'Selvitä harjoitteluun liittyvät asiat' }
      ];
    }

    editList(): void {
        var addbtn = document.querySelector('.todo-compose') as HTMLInputElement;
        addbtn.style.display = "block";
    }
  
    newTodo(event: any) {
      if (event.which === 13) {
          this.todos.unshift({ completed: false, text: this.todo });
          this.todo = '';
        }
        
        return true;
    }

    deleteTodo = (index) => {
      this.todos.splice(index, 1);
  }

}