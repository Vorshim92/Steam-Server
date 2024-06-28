export interface Game {
  id: number;
  name: string;
  description: string;
  image_thumbnail: string | null;
  image_vertical: string | null;
  image_title: string | null;
  isTop: boolean;
  isLatest: boolean;
  isFeatured: boolean;
  services: Service[];
}

export interface Service {
  id: number;
  type: string;
  game_name: string;
  description: string;
  price: number;
  cpu: string;
  ram: string;
  location: string;
  platform: string;
  slots: number;
  game_id: number;
  created_at: Date;
  updated_at: Date;
}
