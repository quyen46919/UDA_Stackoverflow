import { Box } from '@mui/system';
import ActionMenu from 'components/ActionMenu';
import Footer from 'components/Footer';
import Header from 'components/Header';
import BlogDetailPage from 'pages/BlogDetailPage';
import BlogsPage from 'pages/BlogsPage';
import CommunityPage from 'pages/CommunityPage';
import EmptyPage from 'pages/EmptyPage';
import FallBackScreen from 'pages/FallBackScreen';
import GroupQuestion from 'pages/GroupQuestion';
// import IntroPage from 'pages/IntroPage';
import QuestionDetailPage from 'pages/QuestionDetailPage';
import SupportPage from 'pages/SupportPage';
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
const QuestionPageTest = React.lazy(() => import('pages/QuestionPageTest'));
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const ResetPasswordPage = React.lazy(() => import('pages/ResetPasswordPage'));
const LogupPage = React.lazy(() => import('pages/LogupPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const IntroPage = React.lazy(() => import('pages/IntroPage'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPasswordPage'));
const AdminPage = React.lazy(() => import('pages/AdminPage'));
const GroupPage = React.lazy(() => import('pages/GroupPage'));


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={IntroPage} exact/>
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
                                <Route path="/home" render={() =>
                                    <Box sx={{
                                        width: '100%',
                                        display: 'flex',
                                        bgcolor: '#f5f6fb',
                                        pl: 2, pr: 1, pt: 2, pb: 2,
                                        p: {
                                            xs: '0 0 24px 0'
                                        }
                                    }}>
                                        <ActionMenu/>
                                        <Switch>
                                            <Route path="/home" component={QuestionPageTest} exact/>
                                            {/* <Route path="/home/group" component={GroupPage} exact/> */}
                                            <Route path="/home/group" component={GroupQuestion} exact/>
                                            <Route path="/home/support" component={SupportPage} exact/>
                                            <Route path="/home/question/:questionId" component={QuestionDetailPage}/>
                                        </Switch>
                                    </Box>
                                }/>
                                <Route path="/community" component={CommunityPage} exact/>
                                <Route path="/profile" component={ProfilePage} exact/>
                                <Route path="/blogs" component={BlogsPage} exact/>
                                <Route path="/blogs/:blogId" component={BlogDetailPage} exact/>
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
