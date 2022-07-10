export class User {
  public id: string;
  public name: string;
  public surname: string;
  public profession: string;

  constructor(id: string, name: string, surname: string, profession: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.profession = profession;
  }
}
