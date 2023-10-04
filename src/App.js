import './App.css';
import Movie from './CRUDExample/Movie';
import USerCrud from './CURDWithBackend/USerCrud';
import Demo from './ClassCompentIfecycleMethod/Demo';
import FunctionLifecycle from './FunctionLifecycle/FunctionLifecycle';
import Counter from './HOC/Counter';
import HOC from './HOC/HOC';

import ChildA from './Prop-Drilling/ChildA';
import Parent from './UseContextHook/Parent';

function App() {
  const name = "Pooja"
  return (
    <div className="App">
      {/* <ChildA name={name}/> */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      {/* <Counter/> */}
      {/* <Counter />
      <HOC cmp={<Counter />} /> */}
      {/* <Demo name="react" /> */}
      {/* <FunctionLifecycle/> */}
      {/* <Movie/> */}

      {/* backend CRUD */}
      <USerCrud/>
    </div>
  );
}

export default App;
