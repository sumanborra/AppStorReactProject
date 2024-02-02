// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsList, changeTab, isActive} = props
  const {displayText, tabId} = tabsList
  const classStyle = isActive ? 'active-class' : ''
  console.log(isActive)
  const changeTabs = () => {
    changeTab(tabId)
  }
  return (
    <li>
      <button type="button" className="buttn" onClick={changeTabs}>
        <p className={`item-tab ${classStyle}`}>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
