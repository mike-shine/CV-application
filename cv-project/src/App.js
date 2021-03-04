import React, {Component} from 'react';
import BasicInfo from './components/BasicInfo';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
    this.state = {
      basicInfo: {
        name: 'Boaty McBoatface',
        email: 'boatsNhoes@yahoo.com',
        phoneNumber: 1112223333
      },
      education: {
        school: 'Mrs Puffs Boating School',
        major: 'improvisatory boat dancing',
        graduated: true
      },
      experience: [{
        company: 'FBI',
        position: 'boat',
        duties: 'go-to consultant for all boat-related operations',
        dateStarted: 1965,
        dateEnded: 'N/A'
      }]
    }
    // this.addBasicInfo = this.addBasicInfo.bind(this);
    // this.addEducation = this.addEducation.bind(this);
    // this.addExperience = this.addExperience.bind(this);
  }

  addBasicInfo(info) {

  }

  addEducation(info) {

  }

  addExperience(info) {

  }

  render() {
    return (
      <div>
        <h1>Curriculum Vitae</h1>
        <div>
          <BasicInfo info={this.state.basicInfo} /><br/>
          <Education info={this.state.education} /><br/>
          <Experience info={this.state.experience} /><br/>
        </div>
      </div>
    );
  }

}

export default App;
