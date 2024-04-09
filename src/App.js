import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from './components/Image';
import AuthForm from './components/Login';
import Calculator from './components/Calculator';
import Counter from './components/Counter';
import RecipeSearch from './components/Recipe';
import HelloWorld from './components/HelloWorld';
import Timer from './components/Timer';
import ButtonToggle from './components/Toggl';
import CharacterCounter from './components/character';
import PasswordGenerator from './components/password';
import Weather from './components/Weather';
import RandomQuote from './components/Quote';
import TodoList from './components/Todo';
import BMICalculator from './components/BMI';
import ExpenseTracker from './components/Expense';
import QuizApp from './components/Quiz';
import RandomNumberGenerator from './components/Random';
import LocationTracker from './components/location';
import CurrencyConverter from './components/currency';

function App() {

  let image = ["https://img.freepik.com/free-vector/desktop-computer-vconcept-illustration_114360-12153.jpg?t=st=1712663809~exp=1712667409~hmac=7da7651a1322941a6d0e44c314c8e55f9beb88611c186013c39b1b4ad8fbd326&w=740","https://img.freepik.com/free-vector/desktop-computer-concept-illustration_114360-16232.jpg?w=996&t=st=1712664075~exp=1712664675~hmac=d10d0a185d97de5422a043fc21c47ad5395ccffc94ba34e5d489f807f871c7a8","https://img.freepik.com/free-photo/female-hand-typing-keyboard-laptop_1150-15742.jpg?t=st=1712664121~exp=1712667721~hmac=2a6fb4376ba226eda5c0a317f00e1a7a41f87a4d35f2c2713b38e27ecd046996&w=996","https://img.freepik.com/free-photo/close-up-hand-writing-notebook_23-2148304972.jpg?t=st=1712664154~exp=1712667754~hmac=c215c2896f1aa770e178534f78d7e6c44ba8377d32b338018c533c1b77528566&w=360","https://img.freepik.com/free-vector/cute-astronaut-playing-laptop-cartoon-vector-icon-illustration-science-technology-icon-isolated-flat_138676-9535.jpg?w=740"];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/image" element={<ImageSlider images={image}/>} />
          <Route path="/auth" element={<AuthForm/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/recipe" element={<RecipeSearch/>} />
          <Route path="/hello" element={<HelloWorld/>} />
          <Route path="/timer" element={<Timer/>} />
          <Route path="/toggle" element={<ButtonToggle/>} />
          <Route path="/character" element={<CharacterCounter/>} />
          <Route path="/password" element={<PasswordGenerator/>} />
          <Route path="/weather" element={<Weather/>} />
          <Route path="/quote" element={<RandomQuote/>} />
          <Route path="/todo" element={<TodoList/>} />
          <Route path="/bmi" element={<BMICalculator/>} />
          <Route path="/expense" element={<ExpenseTracker/>} />
          <Route path="/quiz" element={<QuizApp/>} />
          <Route path="/random" element={<RandomNumberGenerator/>} />
          <Route path="/location" element={<LocationTracker/>} />
          <Route path="/currency" element={<CurrencyConverter/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
