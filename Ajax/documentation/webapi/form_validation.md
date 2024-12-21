# Js Web api Form Validation 

## JavaScript Validation API: একটি পরিচিতি

## Validation API কি?
> JavaScript Validation API হলো একটি ব্রাউজার-ভিত্তিক API যা HTML ফর্মের ইনপুট ফিল্ডগুলো ভ্যালিডেট করতে ব্যবহার করা হয়। এটি ডেভেলপারদের সহজে এবং কার্যকরভাবে ফর্ম ডেটা যাচাই করার সুযোগ দেয়।
HTML5 এর অংশ হিসেবে, Validation API ফর্ম ডেটার প্রাথমিক যাচাই করতে ব্রাউজারের বিল্ট-ইন ফিচার ব্যবহার করে। এই API JavaScript কোডের মাধ্যমে কাস্টম ভ্যালিডেশন যুক্ত করার ক্ষমতাও প্রদান করে।

## প্রধান বৈশিষ্ট্যসমূহ:
## বিল্ট-ইন ভ্যালিডেশন:
> ইনপুট ফিল্ডের জন্য HTML5 অ্যাট্রিবিউট ব্যবহার করে স্বয়ংক্রিয় ভ্যালিডেশন সম্ভব। উদাহরণস্বরূপ:

- required
- minlength এবং maxlength
- pattern
- type (যেমন email, number)
## কাস্টম ভ্যালিডেশন:
- JavaScript ব্যবহার করে আরও নির্দিষ্ট শর্ত অনুযায়ী ভ্যালিডেশন নিয়ন্ত্রণ করা যায়।

## ফর্ম ডেটা স্ট্যাটাস চেক:
> Validation API বিভিন্ন পদ্ধতি এবং প্রপার্টির মাধ্যমে ফর্ম ইনপুট ফিল্ডের স্ট্যাটাস যাচাই করতে পারে।


## Validation API-এর গুরুত্বপূর্ণ প্রপার্টি ও মেথড
> এই মেথড ইনপুট ফিল্ড বা পুরো ফর্মের ভ্যালিডেশন পরীক্ষা করে। যদি ভ্যালিড হয়, এটি true রিটার্ন করে, অন্যথায় false।
```
const form = document.querySelector("form");
if (form.checkValidity()) {
    console.log("Form is valid!");
} else {
    console.log("Form is not valid!");
}

```


## setCustomValidity() মেথড: 
> কাস্টম ভ্যালিডেশন মেসেজ সেট করতে ব্যবহৃত হয়।

```

    if(inputObject.validity.valueMissing){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("Input value is required !");
    } else if(inputObject.validity.rangeOverflow){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("input value must be less than 300");
    } else if(inputObject.validity.rangeUnderflow){
        document.getElementById('show').innerHTML= inputObject.setCustomValidity("input value must be gratter than 100");
    }


```

---

### ValidityState প্রপার্টিগুলোর ব্যাখ্যা (বাংলায়)

- customError:
    - কাস্টম ভ্যালিডেশন বার্তা সেট করা হলে এটি true হয়।

- patternMismatch:
  - ইনপুট ফিল্ডের মান নির্দিষ্ট pattern এর সাথে না মিললে এটি true হয়।

- rangeOverflow:
    - ইনপুট ফিল্ডের মান max অ্যাট্রিবিউটে উল্লেখিত মানের চেয়ে বেশি হলে এটি true হয়।

- rangeUnderflow:
    - ইনপুট ফিল্ডের মান min অ্যাট্রিবিউটে উল্লেখিত মানের চেয়ে কম হলে এটি true হয়।

- stepMismatch:
    - ইনপুট ফিল্ডের মান step অ্যাট্রিবিউটের নির্দিষ্ট ধাপের সাথে না মিললে এটি true হয়।

- tooLong:
    - ইনপুট ফিল্ডের মান maxlength অ্যাট্রিবিউট দ্বারা নির্ধারিত সীমার চেয়ে বড় হলে এটি true হয়।

- typeMismatch:
    - ইনপুট ফিল্ডের মান নির্দিষ্ট টাইপ (যেমন email, url) এর সাথে না মিললে এটি true হয়।

- valueMissing:
    - required অ্যাট্রিবিউট থাকা সত্ত্বেও ইনপুট ফিল্ডে কোনো মান না থাকলে এটি true হয়।

- valid:
    - ইনপুট ফিল্ডের মান সব ভ্যালিডেশন চেক পাস করলে এটি true, অন্যথায় false।


> ### HTML5 ভ্যালিডেশন অ্যাট্রিবিউট:
> HTML5 ইনপুট ফিল্ডে যেসব অ্যাট্রিবিউট প্রয়োগ করা যায়, তা Validation API এর মাধ্যমে পরিচালিত হয়।

- required - ফিল্ডটি অবশ্যই পূরণ করতে হবে।
- pattern - নির্দিষ্ট রেগুলার এক্সপ্রেশন মিলানোর জন্য।
- min এবং max - সংখ্যার সীমা নির্ধারণের জন্য।
- type - ইনপুটের ধরণ যেমন email, url, ইত্যাদি।
- minlength এবং maxlength - ইনপুটের দৈর্ঘ্য সীমাবদ্ধ করতে।



> #### Validation API এর সুবিধা:

- ব্রাউজারের বিল্ট-ইন ফিচার ব্যবহার করে সহজ ভ্যালিডেশন।
- কাস্টম মেসেজ এবং শর্ত যোগ করার সুবিধা।
- ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য ইনপুট যাচাই সহজ করে।