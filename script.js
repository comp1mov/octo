 console.log("Скрипт работает!");

// Разбиваем текст заголовков h1 на отдельные буквы
document.querySelectorAll("h1").forEach((heading) => {
    const text = heading.textContent;
    heading.innerHTML = ""; // Очистить содержимое заголовка
    text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        heading.appendChild(span);
    });
});

// Изменяем вес букв при движении мыши
document.addEventListener("mousemove", (event) => {
    const weight = Math.min(Math.max(event.clientX / window.innerWidth * 1000, 200), 700);

    document.querySelectorAll("h1 span").forEach((span, index) => {
        // Создаём эффект смещения веса для каждой буквы
        const offset = Math.sin((event.clientX + index * 10) / 100) * 300;
        const adjustedWeight = Math.min(Math.max(weight + offset, 200), 700);

        span.style.fontVariationSettings = `"wght" ${adjustedWeight}`;
    });
});
