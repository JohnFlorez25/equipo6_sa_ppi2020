import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Start from "../components/Start";
import Login from "../components/Login";
import Register from "../components/Register";
import Introduction from "../components/Introduction";
import Menu from "../components/Menu";
import Menu1 from "../components/Menu1";
import Menu2 from "../components/Menu2";
import P1Answer1 from "../components/P1Answer1";
import P1Answer2 from "../components/P1Answer2";
import P1AnswerN1_L1 from "../components/P1AnswerN1_L1";
import P1AnswerN1_L2 from "../components/P1AnswerN1_L2";
import P1Level2 from "../components/P1Level2";
import P1AnswerN2_L1 from "../components/P1AnswerN2_L1";
import P1AnswerN2_L2 from "../components/P1AnswerN2_L2";
import P1Answers from "../components/P1Answers";
import P1Doubs from "../components/P1Doubs";
import P1level from "../components/P1Level";
import P1LevelTurb from "../components/P1LevelTurb";
import Profile from "../components/Profile";
import Solutions from "../components/Solutions";
import Support from "../components/Support";
import Achievements from "../components/Achievements";
import P1Level1 from "../components/P1Level1";

export default function Ppicontainer() {
  return (
   <BrowserRouter>
       <Route path="/" exact component={Start}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Register" component={Register}/>
       <Route path="/Introduction" component={Introduction}/>
       <Route path="/Menu" component={Menu}/>
       <Route path="/Menu1" component={Menu1}/>
       <Route path="/Menu2" component={Menu2}/>
       <Route path="/P1Level1" component={P1Level1}/>

       <Route path="/P1AnswerN1_L1" component={P1AnswerN1_L1} />
      <Route path="/P1AnswerN1_L2" component={P1AnswerN1_L2} /> 
      <Route path="/P1AnswerN2_L1" component={P1AnswerN2_L1} />
      <Route path="/P1AnswerN2_L1" component={P1AnswerN2_L2} /> 
      <Route path="/P1Answer1" component={P1Answer1}/>
       <Route path="/P1Answer2" component={P1Answer2}/>
       <Route path="/P1Level2" component={P1Level2}/>
       <Route path="/P1LevelTurb" component={P1LevelTurb}/>

       <Route path="/P1Answers" component={P1Answers}/>
       <Route path="/P1Doubs" component={P1Doubs}/>
       <Route path="/P1Level" component={P1level}/>
       <Route path="/Solutions" component={Solutions}/>
       <Route path="/Support" component={Support}/>
       <Route path="/Achievements" component={Achievements}/>
       <Route path="/Profile" component={Profile}/>
    </BrowserRouter>
  );
}
