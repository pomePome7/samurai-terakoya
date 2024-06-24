try {
    console.log('hello!')
} catch(error) {
    console.log('--- output error ---')
    console.log(error.name)
    console.log(error.message)
} finally {
    console.log('end')
}

let person = {
    name: "Bob",
    age: 25,
    city: "New York"
};

let numbers = [1, 2, 3, 4, 5];

console.log("Person:", person); // オブジェクトの内容を表示
console.log("Numbers:", numbers); // 配列の内容を表示

let score = 85;

if (score >= 80) {
    console.log("Great job! You passed."); // 条件成立時のメッセージを表示
} else {
    console.log("Sorry, you didn't pass.");
}

for (let i = 0; i < 5; i++) {
    console.log("Iteration:", i); // イテレーションの進行を表示
    // その他の処理
}

function add(a, b) {
    let sum = a + b;
    console.log("Sum of", a, "anb", b, "is", sum); // 関数の結果を表示
    return sum;
}

// let result = add(10, 20);

function calculate(x, y) {
    if (x === 0) {
        console.log("Error: x cannot be zero"); // エラー発生箇所を特定
        return y / x;
    }
}
let result = calculate(0, 5);
