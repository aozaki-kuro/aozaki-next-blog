import React from 'react'

const caption = props => {
  const Year = props.Year
  const Name = props.Name
  const Url = props.Url
  return (
    <div style={{ textAlign: 'center' }}>
      © {Year} [ <a href={Url}>{Name}</a> ]
    </div>
  )
}

export default caption
