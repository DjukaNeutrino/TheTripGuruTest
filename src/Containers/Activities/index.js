import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import earthLoader from "../../earth.gif";
import {MediaObjectSection, Thumbnail} from "react-foundation";

class Activities extends Component {
  state = {
    error: undefined,
    isLoaded: false,
    items: []
  };

  onClick = (id) => {
    this.props.history.push(`/activity/${id}`);
  };

  componentDidMount() {
    let cityName = this.props.match.params.cityName;
    fetch(`http://tour.api.thetripguru.com/tours?filter[location.url]=${cityName}&limit=15&offset=1`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><img src={earthLoader} alt={"earthLoader"}/></div>;
    } else {
      return (
        <ul className="list">
          {items.map(item => (
            <li key={item.attributes.title} className="list-item">
              <MediaObjectSection>
                <Thumbnail src={"https://res.cloudinary.com/thetripguru/image/upload/w_1280,h_500,c_fill,g_center/" + item.attributes.media.banner.url}/>
                <span onClick={() => this.onClick(item.id)}>{item.attributes.title}</span>
              </MediaObjectSection>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default withRouter(Activities);
