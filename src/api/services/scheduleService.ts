import {DBgetSchedule,DBcreateSchedule, DBupdateSchedule} from "../data/DB_schedule";
import {fetchSchedule} from "../data/API_schedule";
import {updateGame} from "./gameService";

export async function getScheduleService(year: string, month: string, day: string) {
    let response = await DBgetSchedule(year, month, day);
    let dateCheck = new Date();

    if(response === null){
        response = await fetchSchedule(year, month, day);
        if(response === null){
            return null;
        }
        await DBcreateSchedule(year, month, day, buildResponse(response));
        return buildResponse(response);
    }
    dateCheck = new Date(dateCheck.getTime()-1000*60*10);
    if(new Date(response.updatedAt) < dateCheck) {
        let id = response.id;
        response = await fetchSchedule(year, month, day);
        if(response === null){
            return null;
        }
        const result = buildResponse(response);
        await updateGame(result);
        await DBupdateSchedule(id);
        return result;
    }
    // @ts-ignore
    return response.games;
}

// @ts-ignore
const buildResponse = (response) => {
    const result = [];
    for (const game in response){
        result.push({
            name: response[game].name,
            id: response[game].id,
            homeTeam: response[game].competitions["0"].competitors["0"].team.displayName,
            awayTeam: response[game].competitions["0"].competitors["1"].team.displayName,
            venueFullName: response[game].competitions["0"].venue.fullName,
            venueCity: response[game].competitions["0"].venue.address.city,
            venueState: response[game].competitions["0"].venue.address.state,
            ticketsPrice: response[game].competitions["0"].tickets["0"].summary,
            ticketsAvailable: response[game].competitions["0"].tickets["0"].numberAvailable,
            startDate:response[game].competitions["0"].startDate
        });
    }
    return result;
}
