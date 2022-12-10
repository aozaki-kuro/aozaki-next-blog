import Link from 'next/link'

const Navi = ({ Name, Date }: { Name: string; Date: number }) => {
  const Url = `/photography#${Name}`
  return (
    <>
      <div className="text-small centered navi-top-pad">
        <p>Copyright © {Date} Aozaki All rights reserved.</p>
        <p>[ DO NOT REPOST ]</p>
      </div>
      <hr />
      <p className="centered">
        For other photo works, please <Link href={Url}>Click HERE</Link>
      </p>
    </>
  )
}

export default Navi
