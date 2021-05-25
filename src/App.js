import React from "react";
import ExercisePage from "./pages/ExercisePage";
import WorkoutPage from "./pages/WorkoutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WorkoutPlanPage from "./pages/WorkoutPlanPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/workout-plan">
          <WorkoutPlanPage />
        </Route>
        <Route exact path="/workout">
          <WorkoutPage />
        </Route>
        <Route exact path="/exercise/:id">
          <ExercisePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
