import { IWordListItem } from "app/word-list-item/word-list-item";
import { IUser } from "app/user/user";

export class IWordList {
  id: number;
  name: string;
  language: string;
  created_at: string;
  updated_at: string;
  url: string;
  items: IWordListItem[];
  user: IUser;
}