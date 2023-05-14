import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import IndexPage from "./indexpage";
import Layoutpage from "./component/layout/layoutpage";
import AllPageinForm from "./component/form/AllPageinForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}>
        </Route>
        <Route path="/:lang" element={<IndexPage />}>
        </Route>
        <Route path="layout/:lang" element={<Layoutpage/>}>
        </Route>
        <Route path="formandtable/:lang" element={<AllPageinForm />}>
        </Route>
        <Route path="/:lang/layout/:lang" element={<Layoutpage/>}>
        </Route>
        <Route path="/:lang/formandtable/:lang" element={<AllPageinForm />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
