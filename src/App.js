import Footer from 'components/Footer';
import Header from 'components/Header';
import DetailQuestionPage from 'pages/DetailQuestionPage';
import EmptyPage from 'pages/EmptyPage';
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import LogupPage from 'pages/LogupPage';
import QuestionPageTest from 'pages/QuestionPageTest';
import ResetPasswordPage from 'pages/ResetPasswordPage';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
import ProfilePage from './pages/ProfilePage';
// import QuestionPage from './pages/QuestionPage';


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/login" component={LoginPage} exact/>
                    <Route path="/logup" component={LogupPage} exact/>
                    <Route path="/forgot-password" component={ForgotPasswordPage} exact/>
                    <Route path="/reset-password" component={ResetPasswordPage} exact/>
                    <Route path="/" render={() =>
                        // nottableUser ? (
                        <>
                            <Header/>
                            <Switch>
                                <Route path="/question" component={QuestionPageTest} exact/>
                                <Route path="/detail" component={DetailQuestionPage} exact/>
                                <Route path="/profile" component={ProfilePage} exact/>
                                <Route component={EmptyPage}/>
                            </Switch>
                            <Footer/>
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
