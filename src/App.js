import { Box } from '@mui/system';
import BlogDetailPage from 'pages/BlogDetailPage';
import BlogsPage from 'pages/BlogsPage';
import CommunityPage from 'pages/CommunityPage';
import SupportPage from 'pages/SupportPage';
import React from 'react';
import {
    BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.scss';

// support screens
import Footer from 'components/Footer';
import Header from 'components/Header';
import EmptyPage from 'pages/EmptyPage';
import FallBackScreen from 'pages/FallBackScreen';

// menu
import ActionMenu from 'components/ActionMenu';
import ProfilePageMenu from 'components/ProfilePageMenu';

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
const AllNotificationPage = React.lazy(() => import('pages/ProfileAllNotificationPage'));

// group routes
const GroupPage = React.lazy(() => import('pages/GroupPage'));
const GroupNoteBoardPage = React.lazy(() => import('pages/GroupNoteBoardPage'));
const GroupQuestionPage = React.lazy(() => import('pages/GroupQuestionPage'));

// auth routes
const IntroPage = React.lazy(() => import('pages/IntroPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const ResetPasswordPage = React.lazy(() => import('pages/ResetPasswordPage'));

// admin routes
const AdminPage = React.lazy(() => import('pages/AdminPage'));
const AdminQuestion = React.lazy(() => import('pages/AdminQuestion'));
const AdminRecharts = React.lazy(() => import('pages/AdminRecharts'));
const AdminUserTable = React.lazy(() => import('pages/AdminUserTable'));


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
                    <Route path="/board" component={GroupNoteBoardPage} exact/>
                    <Route path="/fallback" component={FallBackScreen} exact/>
                    <Route path="/" render={() =>
                        // nottableUser ? (
                        <>
                            <Header/>
                            <Switch>
                                <Route path="/home/group/:groupId/:boardId" component={GroupNoteBoardPage} exact/>
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
                                            lg: '8px 8px 24px 8px'
                                        },
                                        boxSizing: 'border-box'
                                    }}>
                                        <ActionMenu/>
                                        <Switch>
                                            <Route path="/home" component={QuestionPage} exact/>
                                            <Route path="/home/post" component={PostQuestionPage} exact/>
                                            <Route path="/home/group" component={GroupPage} exact/>
                                            <Route path="/home/group/:groupId" component={GroupQuestionPage} exact/>
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
                                                <Route path="/profile/notificationList" component={AllNotificationPage} exact/>
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
                                <Route path="/admin" render={() =>
                                    <>
                                        <AdminPage/>
                                        <Switch>
                                            <Route path="/admin" component={AdminRecharts} exact/>
                                            <Route path="/admin/users" component={AdminUserTable} exact/>
                                            <Route path="/admin/questions" component={AdminQuestion} exact/>
                                        </Switch>
                                    </>
                                }/>
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
