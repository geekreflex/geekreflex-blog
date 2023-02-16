export const setTheme = theme => {
  localStorage.setItem("theme", theme)
  if (theme === "dark") {
    document.documentElement.className = "dark"
  } else {
    document.documentElement.className = "light"
  }
}
