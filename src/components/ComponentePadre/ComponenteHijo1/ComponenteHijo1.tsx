interface Props {
  sharedProp: string
}

// context
// export const ComponenteHijo1 = ({ sharedProp }: Props) => {
//   const { user } = useUserContext();
//
//   return (
//     <div>{user.id}</div>
//   )
// }

export const ComponenteHijo1 = ({ sharedProp }: Props) => {

  return (
    <div>{sharedProp}</div>
  )
}
