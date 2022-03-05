import { useTheme } from 'next-themes'
import Image from 'next/image'

const LogoSwitch = () => {
  const { resolvedTheme } = useTheme()

  let Mode = 'dark'
  if (resolvedTheme == 'light') {
    Mode = 'light'
  }

  const src = `/static/logo_${Mode}.svg`

  return (
    <Image
      src={src}
      alt={"Aozaki's blog"}
      width={214}
      height={40}
      layout="fixed"
      objectFit="cover"
      className="transition"
    />
  )
}

export default LogoSwitch
