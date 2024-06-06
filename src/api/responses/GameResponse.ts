export class GameResponse {
    id: string;
    name: string;
    team:{
        home: string;
        away: string;
    }
    venue:{
        fullName: string;
        city: string;
        state: string;
    }
    tickets:{
        numberAvailable: number;
        price: string;
    }
    startDate: string
}