import { TodosRepository, Todo } from './todos.repository';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/map';

/**
 * Use case service. It manages basic operations with todos.
 */
@Injectable()
export class TodosService {
  private markAsComplete$ = new Subject<Todo>();

  notifications = this.markAsComplete$.concatMap(t => this.repo.markAsComplete(t).map(() => `${t.title} is done!`));

  constructor(private repo: TodosRepository) {}

  get todos(): Todo[] {
    return this.repo.todos;
  }

  markAsComplete(todo: Todo): void {
    this.markAsComplete$.next(todo);
  }
}
