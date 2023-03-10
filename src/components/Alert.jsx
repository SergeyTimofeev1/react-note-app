import React, { useContext } from 'react';
import { CSSTransition } from 'react-transition-group'
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {

  const { alert, hide } = useContext(AlertContext)

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={"alert"}
      mountOnEnter
      unmountOnExit
    >
      <div div className={`alert alert-${alert.type || 'warning'} alert-dismissible`
      }>
        <strong>Внимание!</strong>
        &nbsp; {alert.text}
        <button
          type='button'
          className='alert-btn'
          aria-label='Close'
          onClick={hide}
          data-dismiss="alert"
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      </div >
    </CSSTransition>
  )
}


export default Alert;
