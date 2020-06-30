import React from "react"
import { Link } from "gatsby"

interface Props {
  items: Array<string>
}

const Tags: React.FC<Props> = ({ items }: Props) => {
  return (
    <span className="tags">
      {items.map(tag => (
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
