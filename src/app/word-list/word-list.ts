export interface IWordList {
  list: {
    id: number;
    name: string;
    language: string;
    created_at: string;
    updated_at: string;
    url: string;
    items: [
      {
        item: {
          id: number;
          word: string;
          translation: string;
          context: string;
          word_list_id: number;
          created_at: string;
          updated_at: string;
          url: string;
          word_list_url: string;
        }
      }
    ]
    user: {
      id: number;
      email: string;
      uid: string;
      username: string;
      admin: boolean;
      url: string;
    }
  }
}