export class Todo {

  constructor(
    public id: number = null,
    public title: string = '',
    public completed: boolean = false,
    public userId: number = null
  ) {
  }
}
