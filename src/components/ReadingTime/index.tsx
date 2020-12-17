/* eslint-disable react/no-danger */
import React from "react"

export interface RedingTimeData {
  text?: string
  minutes?: number
}

const ReadingTime: React.FC<RedingTimeData> = ({
  text,
  minutes,
}: RedingTimeData) => {
  const icon = "🚀"

  return (
    <span className="reading-time">
      {minutes ? `${icon.repeat(minutes / 3)} ` : ""}
      <span>{text}</span>
    </span>
  )
}

export default ReadingTime
