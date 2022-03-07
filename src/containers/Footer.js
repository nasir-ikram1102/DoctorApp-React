import React from 'react'
import { CFooter } from '@coreui/react'

const Footer = () => {
  return (
    <footer className="sticky-footer bg-white">
    <div className="container my-auto">
      <div className="copyright text-center my-auto">
        <span>Copyright © test 2021</span>
      </div>
    </div>
    <div>
         <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>
    </div>
    </footer>
  )
}

export default React.memo(Footer)
