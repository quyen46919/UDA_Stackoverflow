import { Box } from '@mui/system';
import ActionMenu from 'components/ActionMenu';
import Footer from 'components/Footer';
import Header from 'components/Header';
import ProfilePageMenu from 'components/ProfilePageMenu';
import BlogDetailPage from 'pages/BlogDetailPage';
import BlogsPage from 'pages/BlogsPage';
import CommunityPage from 'pages/CommunityPage';
import EmptyPage from 'pages/EmptyPage';
import FallBackScreen from 'pages/FallBackScreen';
import SupportPage from 'pages/SupportPage';
import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';
// home routes
const QuestionPage = React.lazy(() => import('pages/QuestionPage'));
const QuestionDetailPage = React.lazy(() => import('pages/QuestionDetailPage'));
const LogupPage = React.lazy(() => import('pages/LogupPage'));
const ForgotPasswordPage = React.lazy(() => import('pages/ForgotPasswordPage'));
const PostQuestionPage = React.lazy(() => import('pages/PostQuestionPage'));

// profile routes
const ProfilePage = React.lazy(() => import('pages/ProfilePage'));
const ProfileNotificationPage = React.lazy(() => import('pages/ProfileNotificationPage'));
const ProfilePrivacyPage = React.lazy(() => import('pages/ProfilePrivacyPage'));
const ProfileSystemPage = React.lazy(() => import('pages/ProfileSystemPage'));
const ProfileBlacklistPage = React.lazy(() => import('pages/ProfileBlacklistPage'));

// others routes
const GroupPage = React.lazy(() => import('pages/GroupPage'));
const AdminPage = React.lazy(() => import('pages/AdminPage'));
const IntroPage = React.lazy(() => import('pages/IntroPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const ResetPasswordPage = React.lazy(() => import('pages/ResetPasswordPage'));


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
                                        flexDirection: {
                                            xs: 'column',
                                            lg: 'row'
                                        },
                                        bgcolor: '#f5f6fb',
                                        p: {
                                            xs: '8px 16px',
                                            lg: '0 8px 24px 8px'
                                        },
                                        boxSizing: 'border-box'
                                    }}>
                                        <ActionMenu/>
                                        <Switch>
                                            <Route path="/home" component={QuestionPage} exact/>
                                            <Route path="/home/post" component={PostQuestionPage} exact/>
                                            <Route path="/home/group" component={GroupPage} exact/>
                                            <Route path="/home/support" component={SupportPage} exact/>
                                            <Route path="/home/question/:questionId" component={QuestionDetailPage}/>
                                        </Switch>
                                    </Box>
                                }/>
                                <Route path="/community" component={CommunityPage} exact/>
                                <Route path="/profile" render={() =>
                                    <>
                                        <Box sx={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: {
                                                xs: 'column',
                                                lg: 'row'
                                            },
                                            bgcolor: '#f5f6fb',
                                            p: {
                                                xs: '8px 16px 40px 16px',
                                                lg: '16px 8px 24px 8px'
                                            },
                                            boxSizing: 'border-box',
                                            gap: { xs: 1, md: 2, lg: 0 }
                                        }}>
                                            <ProfilePageMenu/>
                                            <Switch>
                                                <Route path="/profile" component={ProfilePage} exact/>
                                                <Route path="/profile/notification" component={ProfileNotificationPage} exact/>
                                                <Route path="/profile/privacy" component={ProfilePrivacyPage} exact/>
                                                <Route path="/profile/blacklist" component={ProfileBlacklistPage} exact/>
                                                <Route path="/profile/system" component={ProfileSystemPage}/>
                                            </Switch>
                                        </Box>
                                    </>
                                }/>
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
