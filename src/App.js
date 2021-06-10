import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AProfile, Auth, AuthAdmin, Footer, Navbar, Profile } from "./components/index";
import { GlobalContainer } from "./globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalContainer></GlobalContainer>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/auth/login"></Redirect>
            </Route>
            
            {/* Authentication Part*/}
            <Route path="/auth/login" render={() => {localStorage.clear(); return (<><Navbar type="user"></Navbar><Auth type="login"></Auth></>)}} exact>
            </Route>
            <Route path="/auth/signup" render={() => {localStorage.clear(); return (<><Navbar type="user"></Navbar><Auth type="signup"></Auth></>)}} exact>
            </Route>
            <Route path="/auth/admin/login" render={() => {localStorage.clear(); return (<><Navbar type="admin" nm={true}></Navbar><AuthAdmin /></>)}} exact></Route>
            
            {/* After Authentication Part*/}
            <Route path="/profile" render={() => (<><Navbar type="user"></Navbar><Profile /></>)} exact></Route>
            <Route path="/admin/profile" render={() => (<><Navbar type="admin"></Navbar><AProfile /></>)} exact></Route>
            <Route path="/admin/vform" render={()=>(<><Navbar type="admin"></Navbar><div style={{backgroundColor: "#ddd", height: "calc(100vh - 120px)", padding: "50px", fontSize: "2rem"}}>Admin Authorized</div></>)}></Route>
          </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
};

export default App;
