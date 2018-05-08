import React, { Component } from 'react';
import {MediaObjectSection, Thumbnail} from 'react-foundation';
import earthLoader from "../../earth.gif";

class Tour extends Component {
  state = {
    error: undefined,
    isLoaded: false,
    item: undefined
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`http://tour.api.thetripguru.com/tours/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result.data
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
    const { error, isLoaded, item} = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div><img src={earthLoader} alt={"earthLoader"}/></div>;
    } else {
      return (
        <div>
          <div className="grid-x">
            <div className="cell medium-6 large-6 small-12">
              <MediaObjectSection>
                <Thumbnail src={"https://res.cloudinary.com/thetripguru/image/upload/w_1280,h_500,c_fill,g_center/" + item.attributes.media.banner.url}/>
              </MediaObjectSection>
            </div>
            <div className="cell medium-6 large-6 small-12">
              <MediaObjectSection>
                <h4>{item.attributes.title}</h4>
                <p>{item.attributes.description}</p>
              </MediaObjectSection>
            </div>
          </div>
        </div>
      );
    }
  }

}
export default Tour;

