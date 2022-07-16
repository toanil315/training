export interface MapOfIconWeather {
    [index: string]: string;
}

export const mapOfIconWeather: MapOfIconWeather = {
    '11d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874915/weather/imgs/Thunder_foabl2.png',
    '11n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874915/weather/imgs/Thunder_foabl2.png',
    '09d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_angled_rain_hhi2s7.png',
    '09n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_angled_rain_hhi2s7.png',
    '10d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_angled_rain_hhi2s7.png',
    '10n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_angled_rain_hhi2s7.png',
    '13d': 'https://res.cloudinary.com/toanil315/image/upload/v1657875184/weather/imgs/Sun_cloud_little_snow_drw45n.png',
    '13n': 'https://res.cloudinary.com/toanil315/image/upload/v1657875184/weather/imgs/Sun_cloud_little_snow_drw45n.png',
    '50d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Moon_cloud_fast_wind_knjsta.png',
    '50n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Moon_cloud_fast_wind_knjsta.png',
    '01d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874915/weather/imgs/Sun_yddwkk.png',
    '01n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874915/weather/imgs/Sun_yddwkk.png',
    '02d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png',
    '02n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png',
    '03d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png',
    '03n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png',
    '04d': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png',
    '04n': 'https://res.cloudinary.com/toanil315/image/upload/v1657874914/weather/imgs/Sun_cloud_by1ptq.png', 
}

export const getImageLink = (icon?: string) => {
    if(!!icon) {
        return mapOfIconWeather[icon]
    }
    return mapOfIconWeather['01d'];
}