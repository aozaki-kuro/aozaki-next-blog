const repost = props => {
  const Date = `${props.Date}`
  return (
    <div className="text-small centered">
      <p>Copyright © {Date} Aozaki All rights reserved.</p>
      <p>[ DO NOT REPOST ]</p>
    </div>
  )
}

export default repost
