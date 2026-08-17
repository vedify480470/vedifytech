export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  industry: string;
  tags: string[];
  image?: string;
}
