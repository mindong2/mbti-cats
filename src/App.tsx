import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuestionPage from "./pages/QuestionPage";
import ResultPage from "./pages/ResultPage";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./style/global";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 72rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f2f5fb;
  box-shadow: 0 0 2rem 0 #e2e6ee;
  font-size: 1.6rem;
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes>
        </Router>
      </Layout>
    </div>
  );
}

export default App;
