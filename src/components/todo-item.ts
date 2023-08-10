import { bindable } from 'aurelia-framework';

export class TodoItem {
    @bindable 
    todo;
    @bindable 
    index;
    @bindable 
    deleteTodo;
}