import React from "react";
import Simplify from "./apps/todolist/Simplify";
import Calculator from "./apps/calculator/Calculator";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ExpenseEntry from "./apps/expense/ExpenseEntry";
import Counter from "./Counter";
import NotesComponent from "./apps/notes/NotesComponent";
import QuizComponent from "./apps/quiz/QuizComponent";
import RandomNumberSorter from "./apps/sort/RandomNumberSorter";
import SearchPage from "./apps/movie/SearchPage";
import YouTubeVideoList from "./apps/youtube/YouTubeVideoList";
import SpotifyTrackList from "./apps/spotify/FetchPodCast";
import BookMgmt from "./apps/book/BookMgmt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Simplify />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/expense" element={<ExpenseEntry />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/notes" element={<NotesComponent />} />
        <Route path="/quiz" element={<QuizComponent />} />
        <Route path="/sort" element={<RandomNumberSorter />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/youtube" element={<YouTubeVideoList />} />
        <Route path="/spotify" element={<SpotifyTrackList />} />
        <Route path="/book" element={<BookMgmt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
/*
Use React Router:
npm install react-router-dom

Create directory structure like src->apps->todolist , src->apps->calculator 
and move all relevant jsx inside the todolist or calculator

You create one React app with routes like:

/todo → To-Do List App

/calculator → Calculator App

/expense → Expense Tracker App

Import and use in App.jsx like this

<BrowserRouter>
      <Routes>
        <Route path="/todo" element={<Simplify />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>









*/
