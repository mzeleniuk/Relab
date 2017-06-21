import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './app';
import PostsIndex from './blog/components/posts_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex}/>
  </Route>
);
