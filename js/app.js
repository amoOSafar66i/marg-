
// // let fullname = "Amirali";

// // let ageStudent = 15;

// // let isStudent = true;


// // let language;



// // var city = "Tehran";

// // let favoriteColor = "Blue";

// // const country = "Iran";



// // alert("Welcome to my profile!");



// // let username = prompt("What is your name?");



// // let answer = confirm(".............................................");




// // // let age = 15;

// // // if (confirm("آیا سن شما 18 سال یا بیشتر است؟")) {
// // //     if (age > 18) {
// // //         alert("شما بزرگسال هستید");
// // //         console.log("سن معتبر است");
// // //     } else {
// // //         alert("شما هنوز زیر 18 سال هستید");
// // //         console.log("سن کمتر از 18 است");
// // //     }
// // // } else {
// // //     alert("پس سن شما کمتر از 18 سال است");
// // //     console.log("کاربر گزینه Cancel را زد");
// // // }
// // let num = Number(prompt("یک عدد وارد کن:"));

// // if (num < 2) {
// //     alert("این عدد اول نیست ");
// //     console.log("این عدد اول نیست");
// // } else if (num % 2 === 0 && num !== 2) {
// //     alert("این عدد اول نیست ");
// //     console.log("این عدد اول نیست");
// // } else {
// //     alert("این عدد اول است ");
// //     console.log("این عدد اول است");
// // }
// // for (let i = 0; i < 1; i++) {
// //     let num1 = Number(prompt("عدد اول را وارد کن:"));
// //     let op = prompt("عملیات را وارد کن (+ - * /):");
// //     let num2 = Number(prompt("عدد دوم را وارد کن:"));

// //     if (op === "+") {
// //         console.log(num1 + num2);
// //     } else if (op === "-") {
// //         console.log(num1 - num2);
// //     } else if (op === "*") {
// //         console.log(num1 * num2);
// //     } else if (op === "/") {
// //         if (num2 !== 0) {
// // //             console.log(num1 / num2);
// // //         } else {
// // //             console.log("تقسیم بر صفر امکان‌پذیر نیست");
// // //         }
// // //     } else {
// // //         console.log("عملیات نامعتبر است");
// // //     }
// // // }
// // let students = [
// //     { name: "Ali", math: 18, english: 16, science: 20 },
// //     { name: "Reza", math: 12, english: 14, science: 15 },
// //     { name: "Sara", math: 20, english: 19, science: 18 },
// //     { name: "Amir", math: 8, english: 10, science: 9 }
// // ];

// // for (let i = 0; i < students.length; i++) {
// //     let average = (students[i].math + students[i].english + students[i].science) / 3;

// //     console.log("Name: " + students[i].name);
// //     console.log("Math: " + students[i].math);
// //     console.log("English: " + students[i].english);
// //     console.log("Science: " + students[i].science);
// //     console.log("Average: " + average);

// //     if (average >= 18) {
// //         console.log("Grade: Excellent");
// //     } else if (average >= 15) {
// //         console.log("Grade: Good");
// //     } else if (average >= 10) {
// //         console.log("Grade: Average");
// //     } else {
// //         console.log("Grade: Fail");
// //     }

// //     switch (true) {
// //         case average >= 10:
// //             console.log("Status: Pass");
// //             break;

// //         default:
// //             console.log("Status: Fail");
// //     }

// //     console.log("----------------");
// // }
// let students = [
//     { name: "Ali", math: 18, english: 16, science: 20 },
//     { name: "Reza", math: 12, english: 14, science: 15 },
//     { name: "Sara", math: 20, english: 19, science: 18 },
//     { name: "Amir", math: 8, english: 10, science: 9 }
// ];

// for (let i = 0; i < students.length; i++) {
//     let average = (students[i].math + students[i].english + students[i].science) / 3;

//     console.log("Name: " + students[i].name);
//     console.log("Math: " + students[i].math);
//     console.log("English: " + students[i].english);
//     console.log("Science: " + students[i].science);
//     console.log("Average: " + average);

//     if (average >= 18) {
//         console.log("Grade: Excellent");
//     } else if (average >= 15) {
//         console.log("Grade: Good");
//     } else if (average >= 10) {
//         console.log("Grade: Average");
//     } else {
//         console.log("Grade: Fail");
//     }

//     switch (true) {
//         case average >= 10:
//             console.log("Status: Pass");
//             break;

//         default:
//             console.log("Status: Fail");
//     }

//     console.log("----------------");
// } 
let daneshjo = [
    { name: "امیرعلی", riazi : 19, tafakor: 18, herfe: 20 },
    { name:"شنتیا", riazi: 9, tafakor: 10, herfe: 17 },
    { name: "امیر سپنتا", riazi: 0, tafakor: 0,herfe : 0 },
    { name: "راستین", riazi: 20, tafakor: 10,herfe: 15 },
    { name: "غلام", riazi: 2, tafakor: 4, herfe: 3 }
];

for (let  i = 0; i < 5; i++ ) {
    let paiani = (daneshjo[i].riazi + daneshjo[i].tafakor + daneshjo[i].herfe) / 3;

    console.log("دانشجو: " + daneshjo[i].name);
    console.log(" ریاضی: " + daneshjo[i].riazi);
    console.log(" تفکر: " + daneshjo[i].tafakor);
    console.log("حرفه: " + daneshjo[i].herfe);
    console.log("معدل : " + paiani);

    if (paiani >= 10) {
        console.log("وضعیت:پذیرش");
    } else {
        console.log("وضعیت:غیرپذیرش");
    }

    console.log(".");
}