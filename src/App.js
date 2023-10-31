import './App.css';
import Movie from './CRUDExample/Movie';
import USerCrud from './CURDWithBackend/USerCrud';
import Demo from './ClassCompentIfecycleMethod/Demo';
import Parent from './DataChildTOParent/Parent';
import FunctionLifecycle from './FunctionLifecycle/FunctionLifecycle';
import Counter from './HOC/Counter';
import HOC from './HOC/HOC';

import ChildA from './Prop-Drilling/ChildA';
import RadioQuestion from './RadioInterviewQue/RadioQuestion';
import DropdownInterview from './TwoDropdown/DropdownInterview';
// import Parent from './UseContextHook/Parent';
import Errorboundry from './ErrorBoundray/Errorboundry';
import ArrayofObject from './ArrayOfObject/ArrayofObject';

function App() {
  const name = "Pooja"
  return (
    <div className="App">
      <h1>For check error boundry works</h1>
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
      {/* <USerCrud/> */}
      {/* <DropdownInterview/> */}
      {/* <RadioQuestion/> */}

      {/* <Errorboundry>
        <Parent />
      </Errorboundry> */}
      <ArrayofObject/>

    </div>
  );
}

export default App;
