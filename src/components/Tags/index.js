import React, { Component } from "react"
import { Link } from "gatsby"

class Tags extends Component {
  render() {
    const { items } = this.props
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
}

export default Tags
