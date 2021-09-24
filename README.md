# api-weather
 
# Para consultas de geolocalização: "/api/v1/geo/"
metodo:POST, 
corpo da requisição: 
{
"lat":"-23.542",
"lon":"-46.599"
}

# Para consultas com o nome da cidade:"/api/v1/city/nome da cidade"
metodo:POST,
corpo da requisição: vazio

# Exemplo de retorno:

{
  "by": "gps",
  "valid_key": true,
  "results": {
    "temp": 24,
    "date": "24/09/2021",
    "time": "15:37",
    "condition_code": "27",
    "description": "Tempo limpo",
    "currently": "dia",
    "cid": "",
    "city": "São Paulo, SP",
    "img_id": "27",
    "humidity": 59,
    "wind_speedy": "6.17 km/h",
    "sunrise": "05:53 am",
    "sunset": "06:03 pm",
    "condition_slug": "clear_day",
    "city_name": "São Paulo",
    "forecast": [
      {
        "date": "24/09",
        "weekday": "Sex",
        "max": 26,
        "min": 12,
        "description": "Tempo nublado",
        "condition": "cloudly_day"
      },
      {
        "date": "25/09",
        "weekday": "Sáb",
        "max": 25,
        "min": 15,
        "description": "Chuvas esparsas",
        "condition": "rain"
      },
      {
        "date": "26/09",
        "weekday": "Dom",
        "max": 31,
        "min": 17,
        "description": "Chuvas esparsas",
        "condition": "rain"
      }
    ]
  },
  "execution_time": 0.0,
  "from_cache": true
}
 
