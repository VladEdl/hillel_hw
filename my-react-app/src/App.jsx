import { RouterProvider } from 'react-router-dom';
import router from './routes/router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => <RouterProvider router={router} />;

export default App;
