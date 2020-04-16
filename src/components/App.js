import React from 'react';
import Nav from './Nav';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import { fakeData } from './__test__/fakeData';
import { searchYouTube } from '../searchYouTube';
import { YOUTUBE_API_KEY } from '../../config/youtube';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playingNow: {
        etag: 'sdFDSP2a',
        id: {
          videoId: 'dQw4w9WgXcQ',
        },
        snippet: {
          title: 'Video Title',
          description: 'Video Description',
          thumbnails: {
            default: {
              url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
            },
          },
        },
      },
      data: fakeData,
    };
    this.searchVideo = this.searchVideo.bind(this);
    this.handleVideoEntryClick = this.handleVideoEntryClick.bind(this);
  }

  searchVideo(word) {
    const maxLength = 5;
    searchYouTube(
      { query: word, max: maxLength, key: YOUTUBE_API_KEY },
      (el) => {
        this.setState({
          data: el,
        });
      }
    );
  }

  handleVideoEntryClick(video) {
    this.setState({
      playingNow: video,
    });
  }

  render() {
    return (
      <div>
        <Nav searchVideo={this.searchVideo} />
        <div className="col-md-7">
          <VideoPlayer playingNow={this.state.playingNow} />
        </div>
        <div className="col-md-5">
          <VideoList
            data={this.state.data}
            handleVideoEntryClick={this.handleVideoEntryClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
