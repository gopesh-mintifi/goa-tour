import logo from './logo.svg';
import { ThemeProvider } from 'react-bootstrap';
import './App.css';
import Layout from './containers/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      >
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
