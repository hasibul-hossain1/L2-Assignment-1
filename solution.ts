// solution 1

function formatValue(
  params: string | number | boolean
): string | number | boolean {
  if (typeof params === "string") {
    return params.toUpperCase();
  } else if (typeof params === "number") {
    return params * 10;
  } else if (typeof params === "boolean") {
    return !params;
  }
  throw new Error("Invalid type");
}

// solution 2

function getLength(params: string | unknown[]): number {
  if (typeof params === "string") {
    return params.length;
  } else if (Array.isArray(params)) {
    return params.length;
  }
  throw new Error("Invalid Type");
}

// solution 3

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// solution 4

function filterByRating(
  params: Array<{ title: string; rating: number }>
): Array<{ title: string; rating: number }> | [] {
  return params.filter((item) => item.rating >= 4);
}

// solution 5
type UserType = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(params: Array<UserType>): Array<UserType> | [] {
  return params.filter((user) => user.isActive);
}

//solution 6

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

// solution 7

function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
) {
  const uniqueItemsArray = [...array1];
  array2.forEach((item) => {
    if (!uniqueItemsArray.includes(item)) uniqueItemsArray.push(item);
  });
  return uniqueItemsArray;
}

// solution 8

type ProductType = {
  name: string;
  price: number;
  quantity:number
  discount?:number
};
function calculateTotalPrice(products: ProductType[]) {
    return products.reduce((acc,curr)=>{
        const discount=curr.discount || 0
        const totalPrice=curr.price * curr.quantity
        const totalDiscountedPrice= totalPrice - (totalPrice * discount) / 100
        return acc + totalDiscountedPrice
    },0)
}


