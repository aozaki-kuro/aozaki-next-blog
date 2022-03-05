import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStethoscope,
  faCameraRetro,
  faFilm,
  faHeadphonesSimple,
} from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <>
      <div className="mx-auto mb-20 flex max-w-[62rem] items-center justify-between">
        <div>
          <h1 className="pb-6 text-4xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Aozaki
          </h1>
          <p className="text-gray-700 dark:text-gray-300 tracking-normal md:tracking-wide leading-7">
            "Do not go gentle into that good night.
            <br />
            <p className="indent-5">Rage, rage against the dying of the light."</p>
          </p>
          <div>
            <ul className="flex gap-x-4 text-sm text-gray-500 dark:text-gray-400 pt-4 underline underline-offset-1">
              <li>
                <FontAwesomeIcon icon={faStethoscope} />
                Doctor
              </li>
              <li>
                <FontAwesomeIcon icon={faCameraRetro} />
                Photography
              </li>
              <li>
                <FontAwesomeIcon icon={faFilm} />
                Film
              </li>
              <li>
                <FontAwesomeIcon icon={faHeadphonesSimple} />
                Music
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden sm:block">
          <Image
            src="/static/images/avatar.jpg"
            alt="Avatar"
            height="130px"
            width="130px"
            className="transform select-none rounded-full duration-700 ease-in-out"
          />
        </div>
      </div>
    </>
  )
}

export default Hero
