export interface BannerType {
  id: number;
  image: string;
  title: string;
  link?: string;
  description?: string;
  startDateTime?: string;
  endDateTime?: string;
  button?: {
    text: string;
    link: string;
  };
}
