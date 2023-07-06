import Image from 'next/image'
import Link from 'next/link'

export function OG({
  image,
  title,
  desc,
  link,
}: {
  image: string
  title: string
  desc: string
  link: string
}) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      style={{
        display: 'block',
        borderRadius: 16,
        border: '1px solid rgba(150,150,150,0.25)',
        overflow: 'hidden',
        textDecoration: 'none',
        color: 'currentColor',
        userSelect: 'none',
      }}
    >
      <Image
        src={require(image)}
        style={{
          margin: 0,
          aspectRatio: '1.9/1',
          objectFit: 'cover',
          borderBottom: '1px solid rgba(150,150,150,0.25)',
        }}
        alt="og"
      />
      <p
        style={{
          margin: '0.8rem 0.8rem 0.2rem',
          fontVariationSettings: '"wght" 550',
          fontWeight: 500,
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: '0.2rem 0.8rem 0.8rem',
          opacity: 0.8,
          fontSize: 14,
        }}
      >
        {desc}
      </p>
    </Link>
  )
}
