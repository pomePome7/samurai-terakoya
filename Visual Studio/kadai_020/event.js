const text = document.getElementById('text');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const childList = document.createElement('li');

    childList.textContent = 'ボタンをクリックしました';

    text.appendChild(childList);

    text.textContent = "ボタンをクリックしました";
});

