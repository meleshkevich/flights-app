import { DateTime } from "luxon";

export function FlightRoute({ data }) {

    const { aTime, dTime, cityFrom, cityTo, airline } = data;

    return (
        <div className="flight-route">
            {data &&
                <>
                    <h5> {cityFrom} &#8594; {cityTo}</h5>
                    <p>Airline: {airline}</p>
                    <p>Departure: {DateTime.fromMillis(dTime * 1000).toFormat('yyyy-MM-dd hh:mm')}</p>
                    <p>Arrival: {DateTime.fromMillis(aTime * 1000).toFormat('yyyy-MM-dd hh:mm')}</p>
                </>
            }
        </div>

    )
}