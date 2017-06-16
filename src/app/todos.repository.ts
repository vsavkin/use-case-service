import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

/**
 * This is the service layer.
 *
 * Here you encapsulate the way you interact with the server + the cache.
 *
 * In simple cases this can be inlined into use case services.
 *
 * For instance, this app is very simple, so it can be inlined.
 */
export type Todo = {id: number, title: string, complete: boolean};

export class TodosRepository {
  todos = <Todo[]>[
    {id: 1, title: 'One', complete: false},
    {id: 2, title: 'Two', complete: false}
  ];

  addTodo(todo: Todo): Observable<void> {
    this.todos.push(todo);
    return of(null);
  }

  markAsComplete(todo: Todo): Observable<void> {
    todo.complete = true;
    return of(null).delay(Math.random() * 1000 * 5);
  }
}
