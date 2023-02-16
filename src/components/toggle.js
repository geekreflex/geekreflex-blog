import React from "react"
import Toggle from "react-toggle"

const ToggleTheme = ({ icons, checked, onChange }) => {
  return <Toggle defaultChecked={checked} onChange={onChange} icons={icons} />
}

export default ToggleTheme
