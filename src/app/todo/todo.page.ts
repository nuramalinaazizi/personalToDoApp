import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  constructor(private firestoreService: FirestoreService) { }

  tasks$: Observable<any> = new Observable();
  newTask: string = '';

  ngOnInit() {
    this.tasks$ = this.firestoreService.getTasks();
  }

  addTask() {
    if (this.newTask.trim().length > 0) {
      this.firestoreService.addTask(this.newTask).then(() => {
        this.newTask = '';
      });
    }
  }

  updateTask(id: string, completed: boolean) {
    this.firestoreService.updateTask(id, completed);
  }

  deleteTask(id: string) {
    this.firestoreService.deleteTask(id);
  }



}
