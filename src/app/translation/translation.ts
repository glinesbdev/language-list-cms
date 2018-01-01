export interface ITranslation {
  words: string[];
  languages: [
    {
      language: string;
      reliability: string;
    }
  ]
}