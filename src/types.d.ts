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

export interface ISearchHotelsParams {
  location: string;
  checkIn: string;
  checkOut: string;
  guest: number;
}

export interface IReserveForm {
  firstName: string;
  lastName: string;
  info1: string;
  info2: string;
  country: string;
  email: string;
  phone: string;
  comment: string;
}
