import React from 'react'

const repost = props => {
  const Date = `${props.Date}`
  return (
    <div style={{ textAlign: 'center', fontSize: '0.8rem' }}>
      <p>Copyright © {Date} Aozaki All rights reserved.</p>
      <p>[ DO NOT REPOST ]</p>
    </div>
  )
}

export default repost
