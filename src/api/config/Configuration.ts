export default () => ({
    emailCFG:{
        username: 'api',
        key: process.env.EMAIL_API_KEY,
        url: "https://api.eu.mailgun.net"
    },
    ApiSchedule:{
        method: 'GET',
        url: process.env.RAPIDAPI_URL,
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
        }
    },
    email: {
        address: process.env.EMAIL_ADDRESS,
        domain: process.env.EMAIL_DOMAIN,
    }
})