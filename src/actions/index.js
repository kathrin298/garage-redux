const ROOT_URL = "https://wagon-garage-api.herokuapp.com/";

export function fetchCars(garage) {
  const promise = fetch(`${ROOT_URL}${garage}/cars`)
    .then(response => response.json());

  return {
    type: 'FETCH_CARS',
    payload: promise
  };
}

export function createCar(garage, car, callback) {
  const request = fetch(`${ROOT_URL}${garage}/cars`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  }).then(response => response.json())
    .then(callback);

  return {
    type: 'CAR_CREATED',
    payload: request
  };
}

export function deleteCar(car, history) {
  fetch(`${ROOT_URL}cars/${car.id}`, { method: 'DELETE' })
    .then(response => response.json())
    .then(history.push(""));

  return {
    type: 'CAR_DELETED',
    payload: car
  };
}
