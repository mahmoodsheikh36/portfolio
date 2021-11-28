import React, { Component } from "react";

import "./Trackify.css";

export default class Trackify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topTracks: []
    }
  }

  componentDidMount() {
    fetch('/trackify_top_tracks')
      .then(
        (res) => {
          res.json().then(data => {
            console.log(data);
            this.setState({topTracks: data});
          });
        },
        (error) => {
          console.log('error fetching top tracks');
          console.log(error);
        }
      );
  }

  render() {
    const { topTracks } = this.state;
    if (topTracks.length > 0) {
      return (
        <div className="tracks_container bordered">
          {topTracks.map(track => (
            <div class="track">
              <img src={track.image_url} />
              <div class="track_info">
                <a class="highlighted">{track.name}</a>
                <a>{track.artist_name}</a>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return ( <p>loading...</p> );
    }
  }
}
