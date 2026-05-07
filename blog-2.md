# TypeScript এ Generics কীভাবে Reusable এবং Strictly Typed Components ও Functions তৈরি করতে সাহায্য করে

web development এ TypeScript খুব গুরুত্বপূর্ণ একটি language। এটি আমাদের code কে type-safe রাখে।কিন্তু অনেক সময় আমাদের এমন function বা component দরকার হয় যেটা different data type এর সাথে কাজ করবে, আবার একই সাথে type safety বজায় রাখবে।তখন আমরা Generics ব্যবহার করি Generics ব্যবহার করে আমরা এমন reusable code লিখতে পারি ।

## Generics কী?

Generics হলো এমন একটি feature যেখানে আমরা fixed type না দিয়ে একটি placeholder type (যেমন T) ব্যবহার করি।
এই placeholder পরে ব্যবহার করার সময় actual type দিয়ে replace হয়।Generics ব্যবহার করে আমরা একটাই function লিখতে পারি যা সব ধরনের data handle করতে পারে।
```ts
function identity<T>(value: T): T {
  return value;
}
```
এখানে T হলো generic type এটি যেকোনো type represent করতে পারে

## Generics কীভাবে কাজ করে?

TypeScript function call করার সময় automatically বুঝে নেয় কোন type ব্যবহার করা হচ্ছে।

```ts
let a = identity<string>("Hello");
let b = identity<number>(100);
```
প্রথম ক্ষেত্রে T = string দ্বিতীয় ক্ষেত্রে T=number

## Generics দিয়ে Reusable Component (Interface Example)


```ts
interface Box<T> {
  value: T;
}

let numberBox: Box<number> = { value: 10 };
let stringBox: Box<string> = { value: "Hello" };
```
 একই structure, কিন্তু different type safely ব্যবহার করা যাচ্ছে।

 ## Generics এর সুবিধা
 একটাই function সব type handle করে compile time এ error ধরা পড়ে যেকোনো data structure support করে duplication কমে যায় । Generics হলো TypeScript এর একটি শক্তিশালী feature যা আমাদেরকে reusable এবং flexible code লিখতে সাহায্য করে, একই সাথে strict type safety বজায় রাখে