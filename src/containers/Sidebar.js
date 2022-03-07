import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem
} from '@coreui/react'

// sidebar nav config
import navigation from './_nav'

const Sidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <div className="img-logo-container">
        <img
            src={'/image/logo.png'}
            className="c-avatar-imgg"
          />
          <hr/>
          </div>
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
          
        />
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
      </CSidebarNav>
      
    </CSidebar>
  )
}

export default React.memo(Sidebar)
