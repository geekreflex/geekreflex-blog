import React from "react"
import { calculateReadingTime } from "../utils/readingTime"

const Time = ({ text }) => {
  return (
    <small style={{ marginLeft: "10px" }}>
      <span style={{ marginRight: "5px" }}>{"🕒" || "⏰"}</span>
      <span>{text && calculateReadingTime(text)}</span>
    </small>
  )
}

export default Time
