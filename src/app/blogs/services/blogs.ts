export interface IBlogsClassList {
  status: Status;
  result: IBlogsClassListResult[];
}

export interface IBlogsList {
  status: Status;
  result: IBlogsListResult[];
}

export interface IBlogsListResult {
  BlogId: number;
  BlogDescription: string;
  BlogMinsToRead: number;
  BlogBlogClassId: number;
  BlogImages: any[];
}

export interface PaginationData {
  totalRecords: number;
  recordFetched: number;
  recordLimit: number;
  recordOffset: number;
}

export interface Status {
  code: number;
  message: string;
  resultCount: number;
  paginationData: PaginationData;
}

export interface IBlogsClassListResult {
  BlogClassId: number;
  BlogClassCode?: any;
  BlogClassName: string;
  BlogClassNameMap?: any;
  BlogClassParentId?: any;
  BlogClassLevel: number;
  BlogClassSortId?: any;
  BlogClassAddBy?: any;
  BlogClassAddTime?: any;
  BlogClassEditBy?: any;
  BlogClassEditTime?: any;
  BlogClassImages: any[];
  children: any[];
}
