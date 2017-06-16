import { Component } from '@angular/core';
import { TodosService } from 'app/todos.service';
import { Todo } from 'app/todos.repository';

/**
 * A simple component.
 *
 * It only invokes the use case service and subscribes to its observables.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public service: TodosService) {
    service.notifications.subscribe(m => {
      console.log('Message', m);
    });
  }

  complete(t: Todo): void {
    this.service.markAsComplete(t);
  }
}
