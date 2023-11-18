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

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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