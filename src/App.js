import Header from 'components/Header';
import EmptyPage from 'pages/EmptyPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import LogupPage from 'pages/LogupPage';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
import ProfilePage from './pages/ProfilePage';
import QuestionPage from './pages/QuestionPage';


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/login" component={LoginPage} exact/>
                    <Route path="/logup" component={LogupPage} exact/>
                    {/* tại vì Headder m chưa làm nên t để ra đâu để check UI đã */}
                    <Route path="/question" component={QuestionPage} exact/>
                    <Route path="/" render={() =>
                        // nottableUser ? (
                        <>
                            <Header/>
                            <Switch>
                                <Route path="/question" component={QuestionPage} exact/>
                                <Route path="/profile" component={ProfilePage} exact/>
                                <Route component={EmptyPage}/>
                            </Switch>
                        </>
                        // ) : ( <Redirect to="/account"/> )
                    }
                    />
                    <Route component={EmptyPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
