import {HTMLData} from "./HTMLData";

export class HTMLTemplate {
    constructor() {}

    async getHTML({gameName, gameDate, gameTime, place, state, city, location, QRImageSrc}: HTMLData) {
        return `
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Квиток на матч MLB</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .ticket {
            background-color: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            overflow: hidden;
            width: 350px;
            text-align: center;
        }
        .ticket-header {
            background-color: #1e73be;
            color: #fff;
            padding: 20px;
        }
        .ticket-body {
            padding: 20px;
        }
        .ticket-footer {
            background-color: #f1f1f1;
            padding: 10px;
            align-items: center;
            font-size: 15px;
        }
        .ticket-footer img {
            width: 100px;
        }
        .ticket h1 {
            margin: 0;
            font-size: 24px;
        }
        .ticket p {
            margin: 5px 0;
            color: #2B293E;
        }
    </style>
</head>
<body>
    <div class="ticket">
        <div class="ticket-header">
            <h1>Матч MLB</h1>
            <p>${gameName}</p>
        </div>
        <div class="ticket-body">
            <p><strong>Дата:</strong> ${gameDate}</p>
            <p><strong>Час:</strong> ${gameTime}</p>
            <p><strong>Штат:</strong> ${state}</p>
            <p><strong>Місто:</strong> ${city}</p>
            <p><strong>Локація:</strong> ${location}</p>
        </div>
        <div class="ticket-footer">
            <p>Місце: <b>${place}</b></p>
            <img src="${QRImageSrc}" alt="QR Code">
        </div>
    </div>
</body>
</html>`
    }
}