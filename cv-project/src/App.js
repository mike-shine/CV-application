import React, {Component} from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Curriculum Vitae</h1>
        <div>
          <BasicInfo /><br/>
          <Education /><br/>
          <Experience /><br/>
        </div>
      </div>
    );
  }

}

export default App;
