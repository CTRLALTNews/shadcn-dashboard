import React, { useEffect, useState } from 'react'

const getWindowWidth = () => {
  return window.innerWidth;
}

const useIsMobileScreenSize = (mobileWidthThreshold:number = 640):boolean => {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth())

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(getWindowWidth())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isScreenMobileWidth = windowWidth <= mobileWidthThreshold ? true : false;

  return isScreenMobileWidth
}

export default useIsMobileScreenSize