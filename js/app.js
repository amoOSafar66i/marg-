
// let fullname = "Amirali";

// let ageStudent = 15;

// let isStudent = true;


// let language;



// var city = "Tehran";

// let favoriteColor = "Blue";

// const country = "Iran";



// alert("Welcome to my profile!");



// let username = prompt("What is your name?");



// let answer = confirm(".............................................");




// // let age = 15;

// // if (confirm("آیا سن شما 18 سال یا بیشتر است؟")) {
// //     if (age > 18) {
// //         alert("شما بزرگسال هستید");
// //         console.log("سن معتبر است");
// //     } else {
// //         alert("شما هنوز زیر 18 سال هستید");
// //         console.log("سن کمتر از 18 است");
// //     }
// // } else {
// //     alert("پس سن شما کمتر از 18 سال است");
// //     console.log("کاربر گزینه Cancel را زد");
// // }
// let num = Number(prompt("یک عدد وارد کن:"));

// if (num < 2) {
//     alert("این عدد اول نیست ");
//     console.log("این عدد اول نیست");
// } else if (num % 2 === 0 && num !== 2) {
//     alert("این عدد اول نیست ");
//     console.log("این عدد اول نیست");
// } else {
//     alert("این عدد اول است ");
//     console.log("این عدد اول است");
// }
for (let i = 0; i < 1; i++) {
    let num1 = Number(prompt("عدد اول را وارد کن:"));
    let op = prompt("عملیات را وارد کن (+ - * /):");
    let num2 = Number(prompt("عدد دوم را وارد کن:"));

    if (op === "+") {
        console.log(num1 + num2);
    } else if (op === "-") {
        console.log(num1 - num2);
    } else if (op === "*") {
        console.log(num1 * num2);
    } else if (op === "/") {
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("تقسیم بر صفر امکان‌پذیر نیست");
        }
    } else {
        console.log("عملیات نامعتبر است");
    }
}