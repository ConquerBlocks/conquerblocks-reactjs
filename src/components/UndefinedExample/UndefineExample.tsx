import { useState } from "react";


const UndefinedExample = () => {
  const [obj] = useState<{ prop?: string }>({})

  // return <div>{obj.prop!.length}</div>
  return <div>UndefinedExample</div>
}
export default UndefinedExample
