import AppLayout from "./components/AppLayout/AppLayout"
import GridItemBottomLeft from "./components/GridItems/GridItemBottomLeft"
import GridItemBottomRight from "./components/GridItems/GridItemBottomRight"
import GridItemChart from "./components/GridItems/GridItemChart"
import GridItemTopRight from "./components/GridItems/GridItemTopRight"

function App() {

  return (
     <AppLayout>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-4 gap-4 h-full w-full">
        <div className="col-span-3 lg:row-span-3">
          <GridItemChart />
        </div>
        <div className="row-start-2 lg:col-span-3 lg:row-start-4">
        <GridItemBottomLeft />
        </div>
        <div className="row-start-3 lg:row-span-1 lg:col-start-4">
        <GridItemTopRight />
        </div>
        <div className="row-start-4 lg:row-span-3 lg:col-start-4 lg:row-start-2">
        <GridItemBottomRight />
        </div>
      </div>
     </AppLayout>
  )
}

export default App
