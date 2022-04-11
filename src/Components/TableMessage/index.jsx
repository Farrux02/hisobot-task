import "./style.css"
import InboxIcon from "@material-ui/icons/Inbox"

const TableMessage = ({ text, isVisible }) => {
  if (!isVisible) return null

  return (
    <div className="TableMessage">
      <div className="wrapper">
        <InboxIcon style={{fontSize: "50px"}} />
        <p>{text}</p>
      </div>
    </div>
  )
}

export default TableMessage
