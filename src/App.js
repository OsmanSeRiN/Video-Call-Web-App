import { Provider } from 'react-redux';
import './App.css';
import AppPage from './Pages/AppPage';
import { ChakraProvider } from '@chakra-ui/react'
import { AppStore } from './Models/Toolkit/Store';



function App() {
  return (
   <Provider store={AppStore}>
    <ChakraProvider>
     <div className="App">
      <AppPage/>
    </div>
   </ChakraProvider>
   </Provider>
  );
}

export default App;
