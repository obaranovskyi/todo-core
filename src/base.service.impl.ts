import { BehaviorSubject } from "rxjs";
import { BaseService } from "./base.service";
export const BaseServiceImpl: BaseService = Object.freeze({
  list$: new BehaviorSubject<string[]>([]),
  addTodo(todo: string): void {
    this.list$.next([...this.list$.getValue(), todo]);
  },
  removeTodo(todoIndex: number): void {
    const updatedList = this.list$
      .getValue()
      .filter((el, index) => index !== todoIndex);
    this.list$.next(updatedList);
  },
});
