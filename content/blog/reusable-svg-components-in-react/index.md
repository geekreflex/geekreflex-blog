---
title: "Resuable SVG Components in React"
date: "2023-03-15"
---

One of the key benefits of using SVG in React is that they can be easily integrated into components. By importing the SVG as a component, it can be easily manipulated using React props.

Creating a component for each individual SVG graphic in React is a recommended best practice because it can increase reusability by reducing code duplication, enable easy customization, and maintain a cleaner and more organized codebase. Overall, it can improve the scalability and accessibility of your application, making it easier to manage and maintain in the long run.

```jsx
import React from "react"

const MoonIcon = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M233.54 142.23a8 8 0 0 0-8-2a88.08 88.08 0 0 1-109.8-109.8a8 8 0 0 0-10-10a104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88a104.84 104.84 0 0 0 37-52.91a8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104a106 106 0 0 0 14.92-1.06a89 89 0 0 1-26.02 31.4Z"
      />
    </svg>
  )
}

export default MoonIcon
```

To use this in your application, simply import it and render it like any other component.

```jsx
import React from "react"
import MoonIcon from "./icons/MoonIcon"

function App() {
  return (
    <div>
      <h1>My App</h1>
      <MoonIcon style={{ fontSize: "20px", color: "orangered" }} />
      <MoonIcon width="200" height="200" fill="orangered" />
    </div>
  )
}

export default App
```

Applying styles to individual SVG components is simple and can be done similarly to how you would style fonts. This allows for easy customization of their appearance. Additionally, using props in SVG components provides even more flexibility in customization, making it easier to adapt them to fit your specific needs.
