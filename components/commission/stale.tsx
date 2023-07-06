import { useEffect, useRef, useState } from 'react'
import List from './list'

const Stale = ({ Character }: { Character: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoaded) {
          setIsLoaded(true)
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      },
    )

    const currentContainer = containerRef.current

    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [isLoaded]) // empty dependency array ensures this runs once on mount and cleanup on unmount

  return (
    <div ref={containerRef}>
      {isLoaded ? (
        <List
          Character={Character}
          fileName={''}
          PublishDate={''}
          Creator={''}
          Twitter={''}
          Pixiv={''}
          Skeb={''}
          Featured={false}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Stale
