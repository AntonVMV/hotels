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

export interface IAddress {
  country: string;
  city: string;
  address: string;
}

export interface IHotel {
  profile: IAuthor;
  _id: string;
  image: string;
  name: string;
  address: IAddress;
}

export interface IHotelInfo extends IHotel {
  price: string[];
  images: string[];
  info: IInfo;
}

export interface IHotelFullInfo extends IHotelInfo {
  type: string[];
  period: string;
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
  first_name: string;
  last_name: string;
  info_1: string;
  info_2: string;
  country: string;
  email: string;
  phone: string;
  comment: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IRegister extends ILogin {
  username: string;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  favorites: string[];
  createdAt: Date;
  updatedAt: Date;
  token?: string;
}
