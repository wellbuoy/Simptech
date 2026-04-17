export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface ContactInfo {
  type: string;
  value: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
