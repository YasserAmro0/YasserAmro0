// let lists = document.querySelectorAll("li");
// const con = document.querySelector(".container .content");

// // window.localStorage.clear();
// if (window.localStorage.getItem("color")) {
//     con.style.backgroundColor = window.localStorage.color;
//     lists.forEach((li) => {
//         li.classList.remove("active");
//     });
//     document.querySelector(`[data-color="${window.localStorage.color}"]`).classList.add("active");
// } else {
//     console.log("no");
// }

// lists.forEach((li) => {

//     li.addEventListener("click", (e) => {
//         lists.forEach((li) => {
//             li.classList.remove("active");
//         });
//         e.currentTarget.classList.add("active");
//         window.localStorage.setItem("color", e.currentTarget.dataset.color);
//         con.style.backgroundColor = e.currentTarget.dataset.color;
//     });
// });


// const nums = [1, , 50, 2, 3, 4];
// const initialValue = 0;

// const sumWithInitial = nums.reduce(function (accumulated, currentValue, currentIndex, array) {
//     return accumulated > currentValue ? accumulated : currentValue;
// }, initialValue);

// console.log(sumWithInitial); // 10



function revr(Stri) {
    let arr = [];

    for (let i = 0; i < Stri.length; i++) {
        arr.push(Stri[i]);
    }

    let result = "";

    for (let i = 0; i < Stri.length; i++) {
        result += arr.pop();
    }
    return result;

}

console.log(revr("abcd"));

