interface Status {
  likes: number;
  reposts: number;
}

export interface Content {
  id: string;
  body: string;
  status: Status;
}
