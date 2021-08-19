import { BehaviorSubject } from "rxjs";
export abstract class BaseService {
  abstract list$: BehaviorSubject<string[]>;
  abstract addTodo(todo: string): void;
  abstract removeTodo(index: number): void;
}
