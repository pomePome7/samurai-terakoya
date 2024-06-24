// 与えられた引数priceに送料を加算し、その値を出力する関数を定義する
const calculateTotal = (price) => {
    console.log(price + 500 + '円');
}

// 関数を呼び出し、引数として購入金額を返す
calculateTotal(1200);

// 与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addTwoArguments = (price,shippingFee) => {
    console.log(price + shippingFee + '円');
}

// 関数を呼び出し、引数として購入金額と送料を渡す
addTwoArguments(1200,500);

// 戻り値を返す関数を条件式に使う（trueであれば処理が実行される）
if (isPurchased()) {
    console.log('商品は購入済みです。');
}

// 与えられた引数numを2倍にし、その値を戻り値として返す関数を定義する
const double = (num) => {
    return num * 2;
}

// 関数の戻り値を出力する
console.log(double(30));
