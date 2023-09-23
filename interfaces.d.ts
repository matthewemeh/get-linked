interface ContactPayload {
  email: string;
  message: string;
  first_name: string;
  phone_number: string;
}

interface ContactResponse {
  id: number;
  email: string;
  message: string;
  first_name: string;
}

interface RegisterPayload {
  email: string;
  category: number;
  team_name: string;
  group_size: number;
  phone_number: string;
  project_topic: string;
  privacy_poclicy_accepted: boolean;
}

interface RegisterResponse {
  id: number;
  email: string;
  category: number;
  team_name: string;
  group_size: number;
  phone_number: string;
  date_created: string;
  last_updated: string;
  project_topic: string;
  privacy_poclicy_accepted: boolean;
}

interface Category {
  id: number;
  name: string;
}

interface AlertProps {
  msg: string;
  zIndex?: string;
  bgColor?: string;
  duration?: number;
  textColor?: string;
}

interface AppContextData {
  screenWidth: number;
  screenHeight: number;
  MOBILE_BREAKPOINT: number;
  LAPTOP_BREAKPOINT: number;
  currentRoute: NavigationRoute;
  SMALL_MOBILE_BREAKPOINT: number;
}
