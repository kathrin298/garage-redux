export default function(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARS':
      return action.payload;
    case 'CAR_DELETED':
      return state.filter((car) => car !== action.payload);
    default:
      return state;
  }
}
