export interface Article {
  url: string;
  title: string;
  published: string;
}
export type Articles = Article[];

export interface Timeline {
  month: string;
  title: string;
  description: string;
}
export type Timelines = Timeline[];
