import axios from 'axios';
import Configuration from "../../api/config/Configuration";
import {API_DBSchedule} from "../entities/API_DBSchedule";

export class APISchedule {
    async get(data: {year: string, month: string, day: string }): Promise<API_DBSchedule>  {
        const options = {
            ...Configuration().ApiSchedule,
            params: data
        }
        const response = await axios.request(options);
        return new Promise<API_DBSchedule> ((resolve, reject) => {
            resolve(response.data[data.year+data.month+data.day]);
        });
    }
}
