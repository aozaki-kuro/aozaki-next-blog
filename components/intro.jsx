import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStethoscope,
  faHeartPulse,
  faGraduationCap,
  faCameraRetro,
  faFilm,
  faHeadphonesSimple,
} from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  return (
    <div>
      <b>
        <h2>{'Read, observe, write. It forges my soul.'}</h2>
      </b>
      <p>
        <FontAwesomeIcon icon={faStethoscope} /> Doctor / <FontAwesomeIcon icon={faHeartPulse} />{' '}
        Cardiologist / <FontAwesomeIcon icon={faGraduationCap} /> MD
      </p>
      <p>
        <FontAwesomeIcon icon={faCameraRetro} /> Photographer /{' '}
        <FontAwesomeIcon icon={faHeadphonesSimple} /> Audiophile / <FontAwesomeIcon icon={faFilm} />{' '}
        Cinephile
      </p>
    </div>
  )
}

export default Main
