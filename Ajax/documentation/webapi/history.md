# History Api 

> Note: Web History API হলো একটি ব্রাউজার-ভিত্তিক জাভাস্ক্রিপ্ট ইন্টারফেস, যা ওয়েব ডেভেলপারদের ব্রাউজারের ইতিহাস স্ট্যাক পরিচালনা করতে দেয়। এটি পৃষ্ঠার URL বা ব্রাউজারের ইতিহাস পরিবর্তন করার জন্য ব্যবহৃত হয়, তবে পৃষ্ঠাটি রিলোড না করেই।

### Web History API-এর প্রধান বৈশিষ্ট্যগুলো:
### window.history অবজেক্ট:
- এটি ব্রাউজারের ইতিহাস অ্যাক্সেস করতে ব্যবহৃত হয়।
- এর মাধ্যমে Back, Forward, এবং Go মেথড ব্যবহার করে নেভিগেশন করা যায়।


> Go: do you need to jump 1 or 3 page you can use go method 
> back:  do you need to  one step go back you can use back method 
> forword : do you need to one step go forward you can use forword method 


```
/* 
 History method is herr 
    1. back()
    2. go(-2)
    3.forward()
    4. length ()

*/




// forward button .. after clik this button .. we will go to forard links 

function forwardButton(){
    window.history.back();
}


function backButton(){
    window.history.back();
}


function jumpButton(){
    window.history.go(1);
}



console.log(window.history.length);


```
