import "./App.css";
// import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import UserContextComponent from "./components/ContextComponent/UserContextComponent";
import DashboardContextComponent from "./components/ContextComponent/DashboardContextComponent";
import NestedExample from "./components/NestedExample";
import Account from "./components/NestedComponents.js/Account";
import Profile from "./components/NestedComponents.js/Profile";
import UseReducer from "./components/NestedComponents.js/UseReducer";
import UseRef from "./components/NestedComponents.js/UseRef";
import Todo from "./components/Todo";
function App() {
  return (
    <div id="wrapper">
      <UserContextComponent>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route
              path="/dashboard"
              element={
                // <Dashboard data={data} users={users} setUsers={setUsers} />
                <DashboardContextComponent>
                  <Dashboard />
                </DashboardContextComponent>
              }
            />
            {/* <Route
            path="/add-user"
            element={<AddUser users={users} setUsers={setUsers} />}
          /> */}

            <Route path="/add-user" element={<AddUser />} />
            <Route path="/edit-user/:id" element={<EditUser />} />
            <Route path="/nested-example" element={<NestedExample />}>
              <Route path="account" element={<Account />} />
              <Route path="profile" element={<Profile />} />
              <Route path="use-reducer" element={<UseReducer />} />
              <Route path="use-ref" element={<UseRef />} />
            </Route>
            <Route path="/latest" element={<Todo />} />

            <Route path="*" element={<Navigate to={"/dashboard"} />} />
          </Routes>
        </BrowserRouter>
      </UserContextComponent>
    </div>
  );
}

export default App;
