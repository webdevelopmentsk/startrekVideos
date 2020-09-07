import React, {Component} from 'react';
import HeaderHome from './components/Template.headerHome';
import SectionCardList from './components/Template.section';
import {captains} from './data/captains';
import {firstOfficers} from './data/firstOfficers';
/*                <SectionCardList inputData={captains} sectName = "List of Captains"/>
                <SectionCardList inputData ={firstOfficers} sectName = "List of First Officers"/> */
                import SearchBar from './components/searchBar';
                import youtube from './components/api.youtube';
                import VideoList from './components/Template.videoList';
                import VideoDetail from './components/Template.videoDetail';


const KEY = 'AIzaSyCN6e98GjAfa_d4E4mISSn8uCP6g5b1DvE';

class App extends Component {
    state = { videos: [], selectedVideo: null };
  
    componentDidMount() {
      this.onTermSubmit('Star Trek Captains');
    }
  
    onTermSubmit = async (term) => {
      const response = await youtube.get('/search', {
        params: {
          q: term,
          part: 'snippet',
          maxResults: 4,
          type: 'video',
          key: KEY,
        },
      });
  
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    };
  
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };
  
    render() {
      return (
        <div className="ui container" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)', padding: '4rem 1rem'}}>
          <HeaderHome heading = "Welcome To Star Trek Cornor" />
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>

        </div>
      );
    }
  }
  
  export default App;