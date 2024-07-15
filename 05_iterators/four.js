// let fil = nums.filter((nums)=>{
//     return nums%2==0
// })
// console.log(fil);

// const newnums = []
// nums.forEach((num)=>{
//     if (num%2==0){
//         newnums.push(num)
//     }
// })
// console.log(newnums);




const books = [
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        publish: "1951",
        edition: "First Edition"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Classic",
        publish: "1960",
        edition: "Revised Edition"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publish: "1997",
        edition: "Original Edition"
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: "1937",
        edition: "First Edition"
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: "1949",
        edition: "First Edition"
    },
    {
        title: "The Great Gatsby",
        genre: "Classic",
        publish: "1925",
        edition: "First Edition"
    },
    {
        title: "Pride and Prejudice",
        genre: "Classic",
        publish: "1813",
        edition: "First Edition"
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: "1954",
        edition: "First Edition"
    }
];

// const userbook = books.filter((bk) => bk.genre ==="Fantasy" && bk.edition ==="First Edition" )
// console.log(userbook);

const nums = [1,2,3,4,5,6,7,8,9,10]
let double =  nums.map((num)=>num*2)
console.log(double);