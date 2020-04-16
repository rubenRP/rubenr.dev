import React from "react"
import PropTypes from "prop-types"

import {
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share"

const Share = ({ url, title }) => {
  return (
    <div className="sharer-buttons-toolbar clearfix floating">
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton source={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  )
}

export default Share

Share.defaultProps = {
  url: null,
  title: null,
}

Share.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}
