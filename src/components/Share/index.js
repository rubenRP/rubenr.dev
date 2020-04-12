import React, { Component } from "react"
import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

class Share extends Component {
  render() {
    const { url, title } = this.props
    return (
      <div className="sharer-buttons-toolbar clearfix floating">
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <LinkedinShareButton source={url} title={title}>
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon size={32} round={true} /> 
        </WhatsappShareButton>
      </div>
    )
  }
}

export default Share
