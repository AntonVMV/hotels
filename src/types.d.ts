export interface IAuthor {
  avatar: string;
}

export interface IInfo {
  bedroom: string;
  bathroom: string;
}

export interface IAmenity {
  icon: string;
  name: string;
}

export interface IReviewAuthor {
  name: string;
  surname: string;
  avatar: string;
}

export interface IReview {
  author: IReviewAuthor;
  date: Date;
  content: string;
}

export interface IHotel {
  author: IAuthor;
  _id: string;
  image: string;
  name: string;
  address: string;
}

export interface IHotelInfo extends IHotel {
  price: string[];
  images: string[];
  info: IInfo[];
}

export interface IHotelFullInfo extends IHotelInfo {
  type: string[];
  period: string[];
  coords: string[];
  description: string[];
  amenities: IAmenity[];
  reviews: IReview[];
}
