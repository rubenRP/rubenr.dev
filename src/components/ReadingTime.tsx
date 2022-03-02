import React from "react"

export interface RedingTimeData {
  text?: string
  minutes?: number
}

const ReadingTime = ({ minutes, text = "min read" }: RedingTimeData) => {
  const time = minutes && Math.ceil(minutes * 1.4)

  return (
    <span className="reading-time">
      <span>
        {time} {text}
      </span>
    </span>
  )
}

export default ReadingTime
