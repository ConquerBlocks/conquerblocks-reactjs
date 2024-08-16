import { useEffect } from "react";

const ProblematicExample = () => {
  useEffect(() => {
    throw new Error("Ups")
  }, [])

  return <div></div>
}

export default ProblematicExample
