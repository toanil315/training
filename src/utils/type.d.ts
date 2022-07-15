export interface WeatherDescription {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Weather {
    "dt": number,
    "temp": number,
    "humidity": number,
    "wind_speed": number,
    "weather": WeatherDescription[],
}

export interface Location {
    "name": string;
    "lat": number;
    "lon": number;
    "country": string;
    "state"?: string;
}