import './style/global.css';
import './style/theme.css';
import { TaskContextProvider } from './contexts/TaskContext/index';
import { MessagesConatiner } from './components/MessageContainer';
import { MainRouter } from './routers/MainRouter';


function App() {

  return (
    <>
      <TaskContextProvider>
        <MessagesConatiner />
        <MainRouter />
      </TaskContextProvider>
    </>
  )
}

export default App
