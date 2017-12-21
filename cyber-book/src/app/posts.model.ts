export class Posts {
  comment: string[] = [];
  constructor(public username: string, public type: string, public status: string, public response: string[], public timestamp: number){}
}
