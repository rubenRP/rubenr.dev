import { Link } from "gatsby"
import React from "react"

interface Props {
  items: Array<string>
}

const Tags = ({ items }: Props) => {
  return (
    <span className="tags">
      {items.map((tag) => (
        <Link
          to={`/blog/tag:${tag.toLowerCase()}`}
          key={tag}
          className="label label-rounded"
        >
          {tag}
        </Link>
      ))}
    </span>
  )
}

export default Tags
