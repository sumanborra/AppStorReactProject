// Write your code here
import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {category, appName, imageUrl} = appsList
  return (
    <li className="appList-container">
      <img src={imageUrl} alt={appName} className="image-apps" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
