import ThemeContext from "./ThemeContext"
import { useContext } from "react"

const PageContent = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`app space ${theme}`}>
      <p>{theme === "light" ? "Light" : "Dark"} </p>
    </div>
  )
}
export default PageContent
