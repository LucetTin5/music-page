// Mock content 1. Chart Content
export interface ChartContent {
  id: number;
  image: string;
  title: string;
  rank: number;
  artist: string;
  upDown: 'up' | 'down' | 'same';
}
