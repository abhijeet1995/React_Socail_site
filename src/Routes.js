import React,{useEffect} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {connect} from 'react-redux'
import Login from './users/Login'
import Register from './users/Register'
import Dashboard from "./dashboard/Dashboard";
import PrivateRoutes from "./routing/PrivateRoutes";
import Layout from "./layout/Layout";
import { removeAlert } from './redux/actions/alert'
import ResetPassword from "./users/ResetPassword";
import NewPassword from "./users/NewPassword";
import CreateProfile from "./components/ProfileForms/CreateProfile";
import EditProfile from "./components/EditProfile";
import AddExperience from "./components/ProfileForms/AddExperience";
import AddEducation from "./components/ProfileForms/AddEducation";
import Profiles from "./components/Profiles/Profiles";
import Profile from "./components/Profile/Profile";
import Post from './components/Posts/Post'
import SinglePost from "./components/Post/SinglePost";
import ChangePassword from "./users/ChangePassword";
import ProfileSetting from './users/ProfileSetting'
const Routes = (props) => {
  useEffect(() => {
    props.removeAlert()
    

  }, []) 
  return (
    <BrowserRouter>
    
      <Switch>
        <Layout>
        <Route path='/signup' exact   component={Register} />
        <Route path='/' exact component={Login}/>
        <Route path="/forgotpassword" exact component={ResetPassword}/>
        <Route path="/reset/:token" exact component={NewPassword}/>
        <Route path="/profile" exact component={Profiles}/>
        <Route path="/profile/:id" exact component={Profile} />
        <PrivateRoutes path="/dashboard" exact component={Dashboard} />
        <PrivateRoutes path="/create-profile" exact component={CreateProfile}/>
        <PrivateRoutes path="/edit-profile" exact component={EditProfile}/>
        <PrivateRoutes path="/add-experience" exact component={AddExperience} />
        <PrivateRoutes path="/add-education" exact component={AddEducation}/>
        <PrivateRoutes path="/posts" exact component={Post} />
        <PrivateRoutes path="/posts/:id" exact component={SinglePost} />
        <PrivateRoutes path="/changePassword" exact component={ChangePassword} />
        <PrivateRoutes path="/profileSetting" exact component={ProfileSetting} />
        </Layout>
      </Switch>
    </BrowserRouter>    
  );
};

export default connect(null, { removeAlert})(Routes)
