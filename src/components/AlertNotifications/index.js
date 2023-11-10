// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdWarning, MdInfo} from 'react-icons/md'
import {RiErrorWarningFill} from 'react-icons/ri'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <div className="icon-container">
        <AiFillCheckCircle className="success-icon" />
      </div>
      <div>
        <h1 className="success-heading">Success</h1>
        <p className="success-description">
          You can access all the files in the folder
        </p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <div className="icon-container">
        <RiErrorWarningFill className="error-icon" />
      </div>
      <div>
        <h1 className="error-heading">Error</h1>
        <p className="success-description">
          Sorry, you are not authorized to have access to delete the file
        </p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <div className="icon-container">
        <MdWarning className="warning-icon" />
      </div>
      <div>
        <h1 className="warning-heading">Warning</h1>
        <p className="success-description">
          Viewers of this file can see comments and suggestions
        </p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <div className="icon-container">
        <MdInfo className="info-icon" />
      </div>
      <div>
        <h1 className="info-heading">Info</h1>
        <p className="success-description">
          Anyone on the internet can view these files
        </p>
      </div>
    </Notification>
  )
  return (
    <div className="alert-notifications-container">
      <h1>Alert Notifications</h1>
      {renderSuccess()}
      {renderError()}
      {renderWarning()}
      {renderInfo()}
    </div>
  )
}
export default AlertNotifications
