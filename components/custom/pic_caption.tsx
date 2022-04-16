function caption(props) {
  const Year = props.Year
  const Name = props.Name
  const Url = props.Url
  return (
    <div className="bold text-center">
      © {Year} [ <a href={Url}>{Name}</a> ]
    </div>
  )
}

export default caption
