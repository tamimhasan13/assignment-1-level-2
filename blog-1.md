# TypeScript এ any কেন “Type Safety Hole” এবং unknown কেন বেশি Safe

TypeScript হলো JavaScript-এর একটি উন্নত সংস্করণ যা type safety প্রদান করে।y। এটি compile time-এ ভুল ধরতে সাহায্য করে, ফলে runtime error অনেক কমে যায়। কিন্তু কিছু type আছে যেগুলো ভুলভাবে ব্যবহার করলে এই নিরাপত্তা নষ্ট হতে পারে। এর মধ্যে সবচেয়ে আলোচিত হলো any।T এর মানে হলো কোড লেখার সময়ই অনেক error ধরা পড়ে, যা পরে runtime এ crash হওয়া থেকে বাঁচায়।
তবে TypeScript এ দুটি গুরুত্বপূর্ণ type আছে — any এবং unknown। এদের সঠিক ব্যবহার না জানলে কোড unsafe হয়ে যেতে পারে।

## any কী এবং কেন এটি Type Safety Hole?

any এমন একটি type যা TypeScript-এর type checking প্রায় বন্ধ করে দেয়।  
যেকোনো operation করলে TypeScript কোনো error দেখায় না।

```ts
let value: any = "Hello";

value = 100;
value.toUpperCase(); // ❌ Error
```

এখানে value প্রথমে string ছিল, পরে number assign করা হয়েছে।  
কিন্তু TypeScript কোনো error দেখায়নি, কারণ type হলো any। এই কারণে any কে বলা হয় “Type Safety Hole”, কারণ এটি TypeScript এর safety system কে weak করে।

## unknown কেন safer?

`unknown` এমন একটি type যেখানে যেকোনো data রাখা যায়,  
কিন্তু ব্যবহার করার আগে অবশ্যই type check করতে হয়।

```ts
let value: unknown = "Hello";

console.log(value.toUpperCase());
// ❌ Error
```

এখানে TypeScript error দেবে, কারণ value আসলে string কিনা তা নিশ্চিত নয়।

এটি developer-কে বাধ্য করে আগে type যাচাই করতে।

# Type Narrowing কী?

যখন আমরা কোনো variable-এর type check করে সেটিকে একটি নির্দিষ্ট type-এ নিয়ে আসি, সেটিকে বলা হয়:

**Type Narrowing**

---



```ts
let value: unknown = "Hello TypeScript";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে value এর type ছিল unknown typeof value === "string" check করা হয়েছে TypeScript বুঝেছে এটি string রপর safely toUpperCase() ব্যবহার করা হয়েছে ata or por md file formate kre den
 