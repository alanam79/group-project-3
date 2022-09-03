import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const loggedIn = Auth.loggedIn();

const Home = () => {
  //modify return statement to say something like "Please Sign Up or Log In to begin searching!", and show the links instead of the input forms
  return (
    <main className="flex-row justify-center mb-4">
      {loggedIn && <div className="col-12 mb-3"></div>}

      <div className="col-12 col-md-6">
        <div className="card">HOME PAGE</div>
      </div>
    </main>
  );
};

export default Home;
