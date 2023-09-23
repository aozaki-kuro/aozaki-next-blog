import Link from 'next/link'
import { CommissionInfoProps } from './types'

// Create a functional component named IllustratorInfo which takes in props of type CommissionInfoProps
const IllustratorInfo = ({
  PublishDate,
  Creator,
  Twitter,
  Skeb,
  Pixiv,
  Fantia,
}: CommissionInfoProps) => {
  // Format the date to YYYY/MM/DD
  const formattedDate =
    PublishDate.slice(0, 4) + '/' + PublishDate.slice(4, 6) + '/' + PublishDate.slice(6, 8)

  // Create a reusable function to generate links with proper styling
  const createLink = (url: string, text: string) => {
    return url ? (
      <>
        <span className="pr-3 ss:pr-2" />
        <Link href={url} className="underline-offset-[0.1rem]" target="_blank">
          {text}
        </Link>
      </>
    ) : null
  }

  // Check if the input is null or empty
  const isAllLinksEmpty = !Twitter && !Skeb && !Pixiv && !Fantia

  // Render illustrator information in a grid layout using Tailwind CSS and the Transition component from HeadlessUI. This includes the formattedDate state, Creator prop (or '-' if there is no Creator), and links to the illustrator's social media pages (if they exist).
  return (
    <div className="flex flex-auto font-mono text-sm ss:text-xs">
      <span className="">{formattedDate}</span>
      <span className="pr-16 ss:pr-6" />
      <span className="">{Creator || '-'}</span>
      <span className="grow text-right">
        <span className="pr-3 ss:pr-2" />
        {isAllLinksEmpty ? (
          <span className="pr-3 ss:pr-2">N/A</span>
        ) : (
          <>
            {createLink(Twitter ? Twitter : '', 'Twitter')}
            {createLink(Pixiv ? Pixiv : '', 'Pixiv')}
            {createLink(Fantia ? Fantia : '', 'Fantia')}
            {createLink(Skeb ? Skeb : '', 'Skeb')}
          </>
        )}
      </span>
    </div>
  )
}

// Export the IllustratorInfo component as the default export of this module.
export default IllustratorInfo
