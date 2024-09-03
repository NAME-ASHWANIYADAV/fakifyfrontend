import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import VideoUploadPage from "./pages/VideoUploadPage";
import DeepFakeResultsPage from "./pages/DeepFakeResultPage";


const Layout = ({ children }) => (
  <div className="app-container">
    <Header />
    
    <main className="main-content">{children}</main>
    <Footer />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/how-it-works"
          element={
            <Layout>
              <HowItWorks />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <div className="auth-container">
              <Login />
            </div>
          }
        />
        <Route
          path="forgot-password"
          element={
            <div className="auth-container">
              <ForgotPassword />
            </div>
          }
        ></Route>
        <Route
          path="reset-password"
          element={
            <div className="auth-container">
              <ResetPassword />
            </div>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <div className="auth-container">
              <SignUp />
            </div>
          }
        />
        <Route
         path="/upload-video"
          element={
          <VideoUploadPage />} 
          />
        <Route
         path="/deep-fake-results" 
         element={<DeepFakeResultsPage />} 
         />
      </Routes>
    </Router>
  );
};

export default App;
