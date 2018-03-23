import React, { Component } from 'react';
import './App.css';
// import { Container, Fade, Row, Col } from 'reactstrap';
import { Fade } from 'reactstrap';

import ScreenOne from './components/ScreenOne';
// import ScreenOne from './components/ScreenOneTempTwo';
// import ScreenOne from './components/ScreenOneTempThree';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/ScreenThree';
import ScreenFour from './components/ScreenFour';
import Menu from './components/Menu';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentScreen: 'home',
      fadeIn: true,
      // number: 1
    }
    this.toggle = this.toggle.bind(this);
    this.handleScreens = this.handleScreens.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
  }

  toggle() {
      this.setState({
          fadeIn: !this.state.fadeIn
      });
  }

  handleScreens(x){
      // this.toggle();
      this.setState({
          currentScreen: x
      })
  }

  renderComponent(){
    switch (this.state.currentScreen) {
        case 'home':
            return <ScreenOne/>
        case 'client':
            return <ScreenTwo/>
        case 'consult':
            return <ScreenThree/>
        case 'inhouse':
            return <ScreenFour/>
        default:
            return <ScreenOne/>
    }
  }

  // ---
 //  handleNextButton(){
 //    if (this.state.number < 3 ){
 //        this.setState({
 //            number: this.state.number + 1
 //        });
 //    }
 //  }
 //
 //  handleBackButton(){
 //     console.log(this.state.number)
 //     if (this.state.number > 1){
 //         this.setState({
 //             number: this.state.number - 1
 //         })
 //     }
 // }
  render() {
    // console.log(this.state)
    // console.table(this.state);
    // let Screens = [<ScreenOne/>,<ScreenTwo/>, <ScreenThree/>, <ScreenFour/>];
    // let displayScreen = Screens[this.state.number -1 ];
    return (
      <div>
          <Menu self={ this }/>
        <div className='for-media'>
            {this.renderComponent()}
        </div>
     </div>
    );
  }
}

export default App;
