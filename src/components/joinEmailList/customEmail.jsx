import React, { useState } from 'react'
import ErrorAlert from '../errorAlert';
import LoadingAlert from '../loadingAlert';
import SucessAlert from '../sucessAlert';
import {MailchimpForm} from './customFormTwo';

function CustomEmail() {
      // For setting stae of alert (is passed to mailchimpform child then to customformchild)
      const [errorState, setErrorState] = useState(false)
      const [sucessState, setSucessState] = useState(false)
      const [loadingState, setLoadingState] = useState(false)
  
  
    return (
      <div>
          <div>{errorState ? <ErrorAlert/> : null}</div>
          <div>{sucessState ? <SucessAlert/> : null}</div>
          <div>{loadingState ? <LoadingAlert/> : null}</div>

          {/* MailChimp Form */}
          <MailchimpForm setSucessState={setSucessState} setErrorState={setErrorState} setLoadingState={setLoadingState}/>
  
      </div>
    )
}

export default CustomEmail