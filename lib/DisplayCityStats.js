import styles from '../styles/City.module.css'

export const DisplayCityStats = ({ city }) => {
    let weatherInfo = {};
    if (city == 0) {
        weatherInfo = {
            "cod": "200",
            "message": 0,
            "cnt": 6,
            "list": [
                {
                    "dt": 1646686800,
                    "main": {
                        "temp": 76.6,
                        "feels_like": 76.46,
                        "temp_min": 75.58,
                        "temp_max": 76.6,
                        "pressure": 1005,
                        "sea_level": 1005,
                        "grnd_level": 1004,
                        "humidity": 53,
                        "temp_kf": 0.57
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 18.23,
                        "deg": 222,
                        "gust": 42.46
                    },
                    "visibility": 10000,
                    "pop": 0.29,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2022-03-07 21:00:00"
                },
                {
                    "dt": 1646697600,
                    "main": {
                        "temp": 71.65,
                        "feels_like": 71.62,
                        "temp_min": 68.92,
                        "temp_max": 71.65,
                        "pressure": 1006,
                        "sea_level": 1006,
                        "grnd_level": 1006,
                        "humidity": 66,
                        "temp_kf": 1.52
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 17.9,
                        "deg": 243,
                        "gust": 40.65
                    },
                    "visibility": 10000,
                    "pop": 0.69,
                    "rain": {
                        "3h": 1.34
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2022-03-08 00:00:00"
                },
                {
                    "dt": 1646708400,
                    "main": {
                        "temp": 55.08,
                        "feels_like": 53.15,
                        "temp_min": 55.08,
                        "temp_max": 55.08,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 1011,
                        "humidity": 61,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 16.33,
                        "deg": 298,
                        "gust": 35.46
                    },
                    "visibility": 10000,
                    "pop": 0.6,
                    "rain": {
                        "3h": 0.36
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2022-03-08 03:00:00"
                },
                {
                    "dt": 1646719200,
                    "main": {
                        "temp": 47.25,
                        "feels_like": 41.5,
                        "temp_min": 47.25,
                        "temp_max": 47.25,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 1015,
                        "humidity": 56,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 13.53,
                        "deg": 296,
                        "gust": 30.76
                    },
                    "visibility": 10000,
                    "pop": 0.27,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2022-03-08 06:00:00"
                },
                {
                    "dt": 1646730000,
                    "main": {
                        "temp": 43.07,
                        "feels_like": 36.68,
                        "temp_min": 43.07,
                        "temp_max": 43.07,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 1017,
                        "humidity": 54,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 12.08,
                        "deg": 306,
                        "gust": 29.97
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2022-03-08 09:00:00"
                },
                {
                    "dt": 1646740800,
                    "main": {
                        "temp": 39.67,
                        "feels_like": 32.59,
                        "temp_min": 39.67,
                        "temp_max": 39.67,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 1021,
                        "humidity": 52,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 88
                    },
                    "wind": {
                        "speed": 11.56,
                        "deg": 321,
                        "gust": 28.7
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2022-03-08 12:00:00"
                }
            ],
            "city": {
                "id": 4140963,
                "name": "Washington D.C.",
                "coord": {
                    "lat": 38.8951,
                    "lon": -77.0364
                },
                "country": "US",
                "population": 601723,
                "timezone": -18000,
                "sunrise": 1646652713,
                "sunset": 1646694403
            }
        }
    }

    return (
        <section>
            <h2>
                {weatherInfo.city.name}
            </h2>
            <div className={styles.currWeather}>
                <p>
                    {`Current Temperature: ${weatherInfo.list[0].main.temp}*F`}
                </p>
            </div>
            <div className={styles.cityInfo}>
                <p>
                    {`Coordinates ~ X: ${weatherInfo.city.coord.lat}, Y: ${weatherInfo.city.coord.lon}`}
                </p>
                <p>
                    {`Population - ${weatherInfo.city.population}`}
                </p>
            </div>
        </section>
    )
}