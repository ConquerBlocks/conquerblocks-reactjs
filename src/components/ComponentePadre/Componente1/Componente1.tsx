import { ReactNode } from "react"

// Prop Drilling

// interface Props {
//   sharedProp: string
// }
//
// export const Componente1 = ({ sharedProp }: Props) => {
//   return (
//     <ComponenteHijo1 sharedProp={sharedProp} />
//   )
// }

interface Props {
  children: ReactNode
}
export const Componente1 = ({ children }: Props) => {
  const user = "Usuario 1"

  return (
    <div>
      <h2>{user}</h2>
      {children}
    </div>
  )
}
