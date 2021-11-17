import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  private tasks = [
    {name: "task1", done: true},
    {name: "task2", done: false}
  ];

  getTasks(){
    return this.tasks;
  }
}
