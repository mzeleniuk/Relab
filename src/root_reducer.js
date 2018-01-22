import {combineReducers} from 'redux';
import BooksReducer from './books_list/reducers/books';
import CountriesReducer from './weather_forecast/reducers/countries';
import ActiveBook from './books_list/reducers/active_book';
import WeatherReducer from './weather_forecast/reducers/weather';
import PostsReducer from './blog/reducers/posts';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  books: BooksReducer,
  countries: CountriesReducer,
  activeBook: ActiveBook,
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
