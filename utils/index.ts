export async function fetchCars() {
    const headers = {  
		'X-RapidAPI-Key': '2b57e7d6cfmsh4143f4af5d9a501p1d7c37jsnb5cf21f61c5c',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}