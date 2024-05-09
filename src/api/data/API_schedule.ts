import axios from 'axios';

export async function fetchSchedule(year: string, month: string, day: string) {
    const options = {
        method: 'GET',
        url: process.env.RAPIDAPI_URL,
        params: {
            year: year,
            month: month,
            day: day
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
    };

    try{
        const response = await axios.request(options);
        return response.data[year+month+day].games;
    }catch (error) {
        throw error;
    }

}