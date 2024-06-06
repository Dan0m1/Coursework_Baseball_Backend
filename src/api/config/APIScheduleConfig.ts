export const APIScheduleConfig = {
    method: 'GET',
    url: process.env.RAPIDAPI_URL,
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
    }
};