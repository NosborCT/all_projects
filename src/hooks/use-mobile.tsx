import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * Hook that determines if the viewport width is less than the mobile breakpoint.
 * 
 * @returns {boolean} - Returns true if the viewport width is less than the mobile breakpoint, otherwise false.
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Media query to check if the viewport width is less than the mobile breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Function to update the isMobile state based on the current viewport width
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add an event listener to handle viewport width changes
    mql.addEventListener("change", onChange)
    
    // Set the initial isMobile state
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Cleanup the event listener on component unmount
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return a boolean indicating if the viewport is mobile-sized
  return !!isMobile
}
