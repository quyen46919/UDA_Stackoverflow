import Footer from 'components/Footer';
import Header from 'components/Header';
import DetailQuestionPage from 'pages/DetailQuestionPage';
import EmptyPage from 'pages/EmptyPage';
<<<<<<< HEAD
import FallBackScreen from 'pages/FallBackScreen';
// import AdminPage from 'pages/AdminPage';
// import ForgotPasswordPage from 'pages/ForgotPasswordPage';
// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import LogupPage from 'pages/LogupPage';
// import ResetPasswordPage from 'pages/ResetPasswordPage';
// import ProfilePage from './pages/ProfilePage';
// import QuestionPage from './pages/QuestionPage';
import React from 'react';
=======
import ForgotPasswordPage from 'pages/ForgotPasswordPage';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import LogupPage from 'pages/LogupPage';
import QuestionPageTest from 'pages/QuestionPageTest';
import ResetPasswordPage from 'pages/ResetPasswordPage';
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
<<<<<<< HEAD

const QuestionPage = React.lazy(() => import('pages/QuestionPage'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const ResetPasswordPage = React.lazy(() => import('pages/ResetPasswordPage'));
const LogupPage = React.lazy(() => import('pages/LogupPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPasswordPage'));
const AdminPage = React.lazy(() => import('pages/AdminPage'));
=======
import ProfilePage from './pages/ProfilePage';
// import QuestionPage from './pages/QuestionPage';
>>>>>>> b290eebd5f55d59f1e9b16986de04b4779935ab9


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
                    <Route path="/fallback" component={FallBackScreen} exact/>
                    <Route path="/" render={() =>
                        // nottableUser ? (
                        <>
                            <Header/>
                            <Switch>
                                <Route path="/question" component={QuestionPageTest} exact/>
                                <Route path="/detail" component={DetailQuestionPage} exact/>
                                <Route path="/profile" component={ProfilePage} exact/>
                                <Route path="/admin" component={AdminPage} exact/>
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
