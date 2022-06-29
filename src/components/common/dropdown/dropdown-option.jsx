import React from 'react'

export default function DropdownOption({ children, ...rest }) {
  return (
    <div className="dropdown-option">{children}</div>
  )
}
