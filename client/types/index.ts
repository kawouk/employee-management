export interface IEmployee {
  id:number;
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  picture?: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat:string;
  active:boolean;
}
