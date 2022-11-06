const caption = props => {
  const Year = props.Year
  const Name = props.Name
  const Url = props.Url
  return (
    <div className="centered">
      © {Year} [ <a href={Url}>{Name}</a> ]
    </div>
  )
}

export default caption
