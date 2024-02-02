export default function buildHtml(link: string) {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Кто же он?</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f0f0f0;
        }

        .arrow-container {
            position: relative;
            margin-bottom: 20px;
        }

        .arrow-container::before,
        .arrow-container::after {
            content: "";
            position: absolute;
            top: 50%;
            width: 30px;
            height: 30px;
            background-color: #3498db;
            transform: rotate(180deg) translateY(15px);
        }

        .arrow-container::before {
            left: -40px;
            clip-path: polygon(0 50%, 100% 0, 100% 100%);
        }

        .arrow-container::after {
            right: -40px;
            clip-path: polygon(0 0, 100% 50%, 0 100%);
        }

        a {
            text-decoration: none;
            color: #3498db;
            font-size: 24px;
            font-weight: bold;
        }

        .big-text {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            padding: 0px 10px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="big-text">Топ #1 Гей Кыргызской Республики тут:</div>
    <div class="arrow-container">
        <a href="${link}" target="_blank">Нажми сюда чтобы узнать</a>
    </div>
</body>
</html>
  `
}
