import React, { useContext } from 'react'
import SweetAlert2 from 'react-sweetalert2'

import { alertContext } from '../../App'

const Alert = () => {
    const {swalProps, setSwalProps} = useContext(alertContext);

  return (
    <div>
        <SweetAlert2 {...swalProps}
        didClose={()=>{
            setSwalProps(
                {show:false}
            )
        }}
        />
    </div>
  )
}

export default Alert