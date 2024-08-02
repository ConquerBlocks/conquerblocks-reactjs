import { UserProvider } from "../../context"
import { Componente1 } from "./Componente1/Componente1"
import { Componente2 } from "./Componente2/Componente2"
import { ComponenteHijo1 } from "./ComponenteHijo1/ComponenteHijo1"

export const ComponentePadre = () => {
  const sharedProp = "informacion desde el padre"
  // context

  // const { setUser } = useUserContext()
  //
  // useEffect(() => {
  //   setUser({ id: 1 })
  // }, [])

  // Problemáticas de utilizar Prop Drilling
  // - Acoplamiento Alto
  // - Dificil reusabilidad
  // - Dificil de mantener
  // - Entendimiento complicado
  return (
    <UserProvider>
      {/* Context: <Componente1 sharedProp={sharedProp} /> */}
      <Componente1>
        <ComponenteHijo1 sharedProp={sharedProp} />
      </Componente1>
      <Componente2 />
    </UserProvider>)
}
