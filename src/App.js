import React, { Component } from 'react';
import Banner from './components/banner/banner';
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo';
import Loading from './components/loading/loading';
import Footer from './components/footer/footer'
import ImageLinkForm from './components/image-link-form/ImageLinkForm';
import Signin from './components/signin/signin';
import Signout from './components/signout/signout';
import Register from './components/register/register'
import Rank from './components/rank/Rank';
import Modal from './components/modal/Modal';
import Profile from './components/profile/Profile';
import FaceRecognition from './components/face-recognition/FaceRecognition';
import './App.css';

const initialState = {
  input:'',
      imageURL:'',
      boxes : [],
      route: 'signout',
      isSignedIn: false,
      isProfileOpen: false,
      isLoading: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: '',
        age: '',
        pet: ''
      }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

  loadUser = (data) => {
    this.setState({user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
    }});
  }

  calculateFaceLocations = (data) => {
    return data.outputs[0].data.regions.map(face => {
      const clarifaiFace = face.region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      console.log(width, height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
    });
  }

  displayFaceBoxes = (boxes) => {
    this.setState({boxes: boxes});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    //Line below for production. Comment out before deployment and uncomment heroku address
    fetch('http://localhost:3000/imageURL', {
    //fetch('https://salty-reaches-64216.herokuapp.com/imageURL', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
    .then(response => response.json())
    .then(response => {
      if (response) {
        //Line below for production. Comment out before deployment and uncomment heroku address
        fetch('http://localhost:3000/rank', {
        //fetch('https://salty-reaches-64216.herokuapp.com/rank', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {entries: count} ))
            })
          .catch(console.log)
          }
      this.displayFaceBoxes(this.calculateFaceLocations(response))
    })
    .catch(err => console.log(err));
}

  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState);
    } else if (route === 'home') {
      this.setState({isSignedIn: true});
    } else if (route === 'loading') {
      this.setState({isLoading: true});
    }
    this.setState({route: route});
  }

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
       isProfileOpen: !prevState.isProfileOpen
    }))
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <div className="bg-black">
            <Logo />
            <Banner />
        </div>
        <Navigation 
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
          toggleModal={this.toggleModal}
        />

       { 
           this.state.isProfileOpen &&
           <Modal>
              <Profile 
                isProfileOpen={this.state.isProfileOpen}
                toggleModal={this.toggleModal}
                user={user}
              />
           </Modal>
       }
      
        {
  
            this.state.route === 'home'
              ? <div>
                  <Rank name={this.state.user.name} entries={this.state.user.entries}/>
                  <ImageLinkForm 
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                  />
                  {  this.state.imageURL === ''
                       ? <div className = 'w1'></div>
                       : <FaceRecognition boxes={this.state.boxes} imageURL={this.state.imageURL} />
                  }
                  <Signout onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn}/>
                </div>

              : this.state.route === 'loading'
                ? <Loading />
                : (
                    this.state.route === 'signout'
                      ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                      : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                  ) 
        }
        <Footer />
      </div>
    );
  }
}

export default App;
