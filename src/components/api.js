import axios from "axios";

export const loadTempsApi = async () => {
    await axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/history?aggregateHours=24&combinationMethod=aggregate&startDateTime=2021-01-01T00%3A00%3A00&endDateTime=2021-08-01T00%3A00%3A00&maxStations=-1&maxDistance=-1&contentType=json&unitGroup=us&locationMode=array&key=WHQ9PFXA7GDX2GKKC7FPLT3LB&dataElements=default&locations=new%20jersey");
}