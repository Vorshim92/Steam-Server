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
  created_at: String;
  updated_at: String;
}

export interface User {
  id: number;
  username: string;
  email: string;
  email_verified_at: String;
  avatar: null;
  role: string;
  created_at: String;
  updated_at: String;
  subscriptions: Subscription[];
}

export interface Subscription {
  id: number;
  payment_method: string;
  payment_status: string;
  price: number;
  currency: string;
  subscription_type: string;
  subscription_status: string;
  subscription_period: string;
  subscription_start: String;
  subscription_end: String;
  subscription_next_billing: String;
  subscription_last_billing: String;
  user_id: number;
  created_at: String;
  updated_at: String;
  game_server: GameServer;
}

export interface GameServer {
  id: number;
  status: string;
  hostsystems: string;
  price: number;
  duration: number;
  username: string;
  ip: string;
  port: number;
  rcon_port: number;
  memory: number;
  game: string;
  game_name: string;
  slots: number;
  credentials: string;
  subscription_id: number;
  user_id: number;
  service_id: number;
  created_at: String;
  updated_at: String;
}
