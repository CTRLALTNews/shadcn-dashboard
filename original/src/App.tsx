import { useState } from "react";

import AppLayout from "./components/AppLayout/AppLayout";
import GridItemChart from "./components/GridItems/GridItemChart/GridItemChart";

function App() {
  return (
    <AppLayout>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 h-full w-full">
        <div className="col-span-3 row-span-3">
          <GridItemChart />
        </div>
        <div className="col-span-3 col-start-1 row-start-4">2</div>
        <div className="col-start-4 row-start-1">3</div>
        <div className="row-span-3 col-start-4 row-start-2">4</div>
      </div>
    </AppLayout>
  );
}

export default App;
