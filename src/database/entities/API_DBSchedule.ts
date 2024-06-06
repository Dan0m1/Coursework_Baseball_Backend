export class API_DBSchedule {
    games: {
        name: string;
        id: number;
        competitions:{
            venue:{
                fullName: string;
                address:{
                    city: string;
                    state: string;
                }
            }
            startDate: string;
            competitors:{
              team:{
                  displayName: string;
              }
            }[]
            tickets:{
                numberAvailable: number;
                summary: string;
            }[]
        }[]
    }[]
}