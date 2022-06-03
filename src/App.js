import { createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
// menu
import ActionMenu from 'components/ActionMenu';
// support screens
import Footer from 'components/Footer';
import Header from 'components/Header';
import ProfilePageMenu from 'components/ProfilePageMenu';
import BlogDetailPage from 'pages/blog/BlogDetailPage';
import BlogsPage from 'pages/blog/BlogsPage';
import CommunityPage from 'pages/CommunityPage';
import EmptyPage from 'pages/EmptyPage';
import FallBackScreen from 'pages/FallBackScreen';
import SupportPage from 'pages/SupportPage';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';

// home routes
const QuestionPage = React.lazy(() => import('pages/question/QuestionPage'));
const QuestionDetailPage = React.lazy(() => import('pages/question/QuestionDetailPage'));
const LogupPage = React.lazy(() => import('pages/auth/LogupPage'));
const ForgotPasswordPage = React.lazy(() => import('pages/auth/ForgotPasswordPage'));
const PostQuestionPage = React.lazy(() => import('pages/question/PostQuestionPage'));

// profile routes
const ProfilePage = React.lazy(() => import('pages/user/ProfilePage'));
const ProfileNotificationPage = React.lazy(() => import('pages/user/ProfileNotificationPage'));
const ProfilePrivacyPage = React.lazy(() => import('pages/user/ProfilePrivacyPage'));
const ProfileSystemPage = React.lazy(() => import('pages/user/ProfileSystemPage'));
const ProfileBlacklistPage = React.lazy(() => import('pages/user/ProfileBlacklistPage'));
const AllNotificationPage = React.lazy(() => import('pages/user/ProfileAllNotificationPage'));

// group routes
const GroupPage = React.lazy(() => import('pages/group/GroupPage'));
const GroupNoteBoardPage = React.lazy(() => import('pages/group/GroupNoteBoardPage'));
const GroupQuestionPage = React.lazy(() => import('pages/group/GroupQuestionPage'));

// auth routes
const IntroPage = React.lazy(() => import('pages/IntroPage'));
const LoginPage = React.lazy(() => import('pages/auth/LoginPage'));
const ResetPasswordPage = React.lazy(() => import('pages/auth/ResetPasswordPage'));

// admin routes
const AdminPage = React.lazy(() => import('pages/admin/AdminPage'));
const AdminQuestion = React.lazy(() => import('pages/admin/AdminQuestion'));
const AdminRecharts = React.lazy(() => import('pages/admin/AdminRecharts'));
const AdminUserTable = React.lazy(() => import('pages/admin/AdminUserTable'));

const getDesignTokens = (mode) => ({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    typography: {
        button: {
            textTransform: 'initial'
        }
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
            // palette values for light mode
                primary: {
                    main: '#f5f6fb'
                },
                secondary: {
                    main: '#fff',
                    light: '#f1f4f9',
                    contrastText: grey[800]
                },
                background: {
                    default: grey[600],
                    switch: 'red'
                },
                text: {
                    primary: grey[600],
                    secondary: grey[500]
                }
            }
            : {
            // palette values for dark mode
                primary: {
                    main: '#15191F'
                },
                secondary: {
                    main: '#1D242D',
                    light: '#2f3844',
                    contrastText: '#e6f9fb'
                },
                divider: '#d6d6d6',
                background: {
                    default: '#fff',
                    switch: 'blue'
                },
                text: {
                    primary: '#f2f2f2',
                    secondary: '#DDE1E3',
                    disabled: grey[400]
                }
            })
    }
});


function App() {
    const { themeMode } = useSelector(state => state.globalState || 'light');
    let theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);
    theme = responsiveFontSizes(theme);
    const { user } = useSelector(state => state.user.current);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
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
                            user?.id ?
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
                                                bgcolor: 'primary.main',
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
                                                    bgcolor: 'primary.main',
                                                    flexDirection: {
                                                        xs: 'column',
                                                        lg: 'row'
                                                    },
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
                                : <Redirect to="/login"/>
                        }
                        />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
