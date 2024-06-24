fetch(リクエスト先のURL,[オプション設定])
.then((response) => response.json()) // 1度目の処理（レスポンス受信時）
.then((data) => { // 2度目の処理（1度目の処理完了時）
    処理
});

fetch('ajax_server.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(dispData) // JSON形式に変換
})