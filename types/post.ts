export interface Post {
  value: any;
  _id: string;
  _path: string;
  _dir: string;
  _locale: string;
  title: string;
  hero_title: string;
  hero_subtitle: string;
  hero_image: string;
  date: string;
  slug: string;
  taxonomy: {
    tag: string[];
    category: string[];
  };
}
