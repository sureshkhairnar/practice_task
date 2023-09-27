import { useState, useEffect } from 'react'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Function to update window width
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth
