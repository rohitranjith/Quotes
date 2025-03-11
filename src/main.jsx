import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client'
import './index.css';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Toaster
      closeButton={true}
      richColors
      pauseOnHover={true} />
    <App />
  </Provider>
)
