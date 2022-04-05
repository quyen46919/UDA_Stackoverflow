import Footer from 'components/Footer';
import Header from 'components/Header';
import BlogDetailPage from 'pages/BlogDetailPage';
import BlogsPage from 'pages/BlogsPage';
import EmptyPage from 'pages/EmptyPage';
import FallBackScreen from 'pages/FallBackScreen';
import QuestionDetailPage from 'pages/QuestionDetailPage';
// import AdminPage from 'pages/AdminPage';
// import ForgotPasswordPage from 'pages/ForgotPasswordPage';
// import HomePage from 'pages/HomePage';
// import LoginPage from 'pages/LoginPage';
// import LogupPage from 'pages/LogupPage';
// import ResetPasswordPage from 'pages/ResetPasswordPage';
// import ProfilePage from './pages/ProfilePage';
// import QuestionPage from './pages/QuestionPage';
import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
// import QuestionPageTest from 'pages/QuestionPageTest';
const QuestionPageTest = React.lazy(() => import('pages/QuestionPageTest'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const ResetPasswordPage = React.lazy(() => import('pages/ResetPasswordPage'));
const LogupPage = React.lazy(() => import('pages/LogupPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPasswordPage'));
const AdminPage = React.lazy(() => import('pages/AdminPage'));
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
                    <Route path="/fallback" component={FallBackScreen} exact/>
                    <Route path="/" render={() =>
                        // nottableUser ? (
                        <>
                            <Header/>
                            <Switch>
                                <Route path="/question" component={QuestionPageTest} exact/>
                                <Route path="/detail" component={QuestionDetailPage} exact/>
                                <Route path="/profile" component={ProfilePage} exact/>
                                <Route path="/blogs" component={BlogsPage} exact/>
                                <Route path="/blogsdetail" component={BlogDetailPage} exact/>
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
