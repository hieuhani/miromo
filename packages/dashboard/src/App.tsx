import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { SignIn } from './pages/Auth';

export const App: React.FunctionComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth/sign_in" element={<SignIn />} />
    </Routes>
  </Router>
);
