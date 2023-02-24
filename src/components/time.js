import React from "react"
import { calculateReadingTime } from "../utils/readingTime"

const Time = ({ text }) => {
  return (
    <small style={{ marginLeft: "10px" }}>
      <span>{"🕒" || "⏰"}</span>
      <span>{text && calculateReadingTime(text)}</span>
    </small>
  )
}

export default Time
