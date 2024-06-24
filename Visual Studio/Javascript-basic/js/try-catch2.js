function divide(x, y) {
    if (y === 0) {
        throw new Error("Division by zero is not allowed."); // エラーを投げる
    }
    return x / y;
}

try {
    let result = divide(10, 0);
    console.log("Result:", result);
} catch (error) {
    console.log("An error occurred:", error.message);
}
