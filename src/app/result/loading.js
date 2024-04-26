"use client"
import GridLoader from "react-spinners/GridLoader";



function loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      
      <GridLoader
      color="#577492"
      loading={true}
      
      size={60}
      aria-label="Loading Spinner"
      data-testid="loader"/>
    </div>
  )
}

export default loading

