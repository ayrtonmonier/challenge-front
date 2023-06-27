export interface User {
    id: number;
    type: string;
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    location: {
      region: string;
      street: string;
      city: string;
      state: string;
      postcode: number;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nationality: string;
    birthday: {
      date: string;
    };
    registered: {
      date: string;
    };
    phone: string[];
    cell: string[];
  }  