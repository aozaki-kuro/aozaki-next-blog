import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { CommissionInfoProps } from 'CommissionInfoProps'

const IllustratorInfo = ({
  PublishDate,
  Creator,
  Twitter,
  Skeb,
  Pixiv
}: CommissionInfoProps) => {
  // Step 1: Format the date with white space characters and set it to state using the useState hook
  const [formattedDate, setFormattedDate] = useState<string>(
    '\u2000'.repeat(10)
  )

  // Step 2: Run an effect whenever the PublishDate prop changes. This effect converts the PublishDate string to a Date object, formats it as a string, and updates the formattedDate state.
  useEffect(() => {
    // Create a new Date object using PublishDate string by splitting it into year, month, and day using slice() method.
    const date = new Date(
      `${PublishDate.slice(0, 4)}-${PublishDate.slice(
        4,
        6
      )}-${PublishDate.slice(6, 8)}`
    )

    // Use toLocaleDateString method to format the resulting date as a string in the user's local time zone
    // with numeric year (e.g. 2022), 2-digit month (e.g. 03), and 2-digit day (e.g. 19) format.
    const formattedDate = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })

    // Update the formattedDate state variable with the newly formatted date string.
    setFormattedDate(formattedDate)
  }, [PublishDate])

  // Step 3: Create a reusable function to generate links with proper styling
  const createLink = (url: string, text: string) => {
    return url ? (
      <>
        <Link href={url} className="underline-offset-[0.2rem]" target="_blank">
          {text}
        </Link>
        <span className="pr-3 ss:pr-2" />
      </>
    ) : null
  }

  // Step 4: Render illustrator information in a grid layout using Tailwind CSS and the Transition component from HeadlessUI. This includes the formattedDate state, Creator prop (or '-' if there is no Creator), and links to the illustrator's social media pages (if they exist).
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <div className="flex flex-auto font-mono text-sm ss:text-xs">
        <span className="">{formattedDate}</span>
        <span className="pr-16 ss:pr-6" />
        <span className="">{Creator || '-'}</span>
        <span className="grow text-right">
          {'['}
          <span className="pr-3 ss:pr-2" />
          {createLink(Twitter, 'Twitter')}
          {createLink(Pixiv, 'Pixiv')}
          {createLink(Skeb, 'Skeb')}
          {']'}
        </span>
      </div>
    </Transition>
  )
}

export default IllustratorInfo
