export interface ILink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface IResponsePagination<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: ILink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface IResponse<T> {
  success: boolean;
  message: string;
  data: T;
}