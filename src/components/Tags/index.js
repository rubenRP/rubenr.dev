import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Tags = ({ items }) => {
  return (
    <span className="tags">
      {items.map(tag => (
        <Link
          to={`/blog/tag:${tag.toLowerCase()}`}
          key={tag}
          className="label label-rounded label-secondary p-category"
        >
          {tag}
        </Link>
      ))}
    </span>
  )
}

export default Tags

Tags.defaultProps = {
  items: [],
}

Tags.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}
