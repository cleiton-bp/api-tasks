import { Injectable } from '@nestjs/common';
import { Task } from '../task/task';

@Injectable()
export class TasksService {
    tasks: Task[] = [
        {
            id: 1,
            title: 'Instalar NestJS',
            description: 'Instalar o NestJS usando o comando npm install -g @nestjs/cli',
            completed: true
        }
    ];

    getAll(): Task[] {
        return this.tasks;
    }

    getById(id: number): Task {
        const task = this.tasks.find((value) => value.id == id);
        return task;
    }

    create(task: Task) {
        let lastId = 0;
        if (this.tasks.length > 0) {
            lastId = this.tasks[this.tasks.length - 1].id;
        }
        task.id = lastId + 1;
        this.tasks.push(task);
        return task;
    }

    update(task: Task) {
        const taskArray = this.getById(task.id);
        if (taskArray) {
            taskArray.title = task.title;
            taskArray.description = task.description;
            taskArray.completed = task.completed;
        }
        return taskArray;
    }

    delete(id: number) {
        const index = this.tasks.findIndex((value) => value.id == id);
        this.tasks.splice(index, 1);
    }
}
