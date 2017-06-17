import {combineReducers} from 'redux';
import BooksReducer from './books_list/reducers/books';
import ActiveBook from './books_list/reducers/active_book';
import WeatherReducer from './weather_forecast/reducers/weather';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer
});

export default rootReducer;
