export interface Post {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  details: string;
}

export interface IBlogPost {
  canonical_url?: string;
  collection_id?: number | null;
  comments_count?: number;
  cover_image: string;
  created_at: string;
  crossposted_at?: string | null;
  description: string;
  edited_at?: string | null;
  id: number;
  language?: string;
  last_comment_at?: string;
  path?: string;
  positive_reactions_count?: number;
  public_reactions_count?: number;
  published_at?: string;
  published_timestamp?: string;
  readable_publish_date?: string;
  reading_time_minutes?: number;
  slug: string;
  social_image?: string;
  subforem_id?: number;
  tag_list?: string[];
  tags?: string;
  title: string;
  type_of?: string;
  url?: string;
}

export interface IBlogPostDetails {
  type_of?: string;
  id?: number;
  title: string;
  description: string;
  readable_publish_date?: string;
  slug?: string;
  path?: string;
  url?: string;
  comments_count?: number;
  public_reactions_count?: number;
  collection_id?: number | null;
  published_timestamp?: string;
  language?: string;
  subforem_id?: number;
  positive_reactions_count?: number;
  cover_image: string;
  social_image?: string;
  canonical_url?: string;
  created_at: string;
  edited_at?: string;
  crossposted_at?: string | null;
  published_at?: string;
  last_comment_at?: string;
  reading_time_minutes?: number;
  tag_list?: string;
  tags?: string[];
  body_html: string;
  body_markdown?: string;
  user?: {
    name?: string;
    username?: string;
    twitter_username?: string;
    github_username?: string | null;
    user_id?: number;
    website_url?: string | null;
    profile_image?: string;
    profile_image_90?: string;
  };
}