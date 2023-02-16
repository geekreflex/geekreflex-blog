import React, { useCallback, useEffect, useState } from "react"
import Toggle from "react-toggle"

// const ICONS

const ToggleTheme = ({ icons }) => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return null
    }
  }, [])

  const [checked, setChecked] = useState(window.__theme === "dark")

  const onChange = useCallback(
    e => {
      const isChecked = e.target.checked
      setChecked(isChecked)
      window.__setPreferredTheme(isChecked ? "dark" : "light")
    },
    [setChecked]
  )

  return <Toggle defaultChecked={checked} onChange={onChange} icons={icons} />
}

export default ToggleTheme
