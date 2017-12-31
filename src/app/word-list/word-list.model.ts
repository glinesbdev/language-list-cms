export class WordListModel {
  constructor(id: number, name: string, language: string, url: string, items: Array<any>, user: Object) {
    this.id = id;
    this.name = name;
    this.language = language;
    this.url = url;
    this.items = items;
    this.user = user;
  }

  id: number;
  name: string;
  language: string;
  url: string;
  items: Array<any>;
  user: Object
}