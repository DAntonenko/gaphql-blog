import PostsListPage from './pages/PostListPage/PostsListPage.jsx';
import PostPage from './pages/PostPage/PostPage.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={PostsListPage} exact />
        <Route path='/post/:id' component={PostPage} exact />
      </Switch>
    </div>
  );
}

export default App;
