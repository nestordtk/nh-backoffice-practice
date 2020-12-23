export interface Book {
  id: number;
  name: string;
  isbn: string;
  image: File;
  language: 'es' | 'en';
  publishedDate: Date;
  publisher: string;
  numberPages: number;
  license: string;
  summary: string;
}

// "author": 0,
//"categories": [
//  0
//],
//"tags": [
//  0
//]