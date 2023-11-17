import { useState, useEffect } from 'react'

const Header = () => {
  const [headerText, setHeaderText] = useState("Natural Disaster Tracker (Powered by NASA and Google) | Group 3")
  const [showSecondColumn, setShowSecondColumn] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHeaderText("Natural Disaster App")
        setShowSecondColumn(false)
      } else {
        setHeaderText("Natural Disaster Tracker (Powered by NASA and Google) | Group 3")
        setShowSecondColumn(true)
      }
    }

    // Set initial header text and second column visibility based on window size
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  //align-items-start is not bootstrap
  return (
    <div className = "container text-center">
      <div className = "row">
        <div className = "col">
          {headerText}
        </div>
        {showSecondColumn && (
          <div className = "col">
            Philip Nguyen | Ai Tran
          </div>
        )}
      </div>
    </div>
  )
}

export default Header