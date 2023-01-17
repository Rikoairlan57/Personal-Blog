import { MarkdownItem } from "./Blog";

export interface Blog extends MarkdownItem {
  coverImage: string;
  authorImage: string;
  author: string;
}

export interface SearchContent extends Partial<MarkdownItem> {
  category: string;
}
