import React, { useCallback, useEffect, useState } from "react"
import Toggle from "react-toggle"
import { setTheme } from "../utils/theme"

// const ICONS

const ToggleTheme = () => {
  let preferredTheme = localStorage.getItem("theme")
  let darkQuery = window.matchMedia("prefers-color-scheme: dark)")
  const [checked, setChecked] = useState(preferredTheme === "dark")

  useEffect(() => {
    setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
    setChecked(preferredTheme === "dark")
  }, [])

  const hnandleTheme = useCallback(e => {
    const isChecked = e.target.checked
    setChecked(isChecked)
    setTheme(isChecked ? "dark" : "light")
  })

  return <Toggle defaultChecked={checked} onChange={hnandleTheme} />
}

export default ToggleTheme
