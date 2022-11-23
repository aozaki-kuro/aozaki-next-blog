const Caption = ({
  Year,
  Name,
  Url
}: {
  Year: string
  Name: string
  Url: string
}) => {
  return (
    <div className="centered">
      © {Year} [{' '}
      <a href={Url} target="_blank" rel="noreferrer">
        {Name}
      </a>{' '}
      ]
    </div>
  )
}

export default Caption
