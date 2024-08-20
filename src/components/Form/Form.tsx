import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod"
import InputField from "./components/InputForm/InputForm";

const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Correo es inválido").min(1, "El correo es obligatorio"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: z.string().min(6, "La confirmación de la password debe de tener al menos 6 caracteres")
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ['confirmPassword']
})

type FormValues = z.infer<typeof schema>;

const MyForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (<form onSubmit={handleSubmit(onSubmit)}>
    <InputField
      name="name"
      control={control}
      label="Nombre"
      error={errors.name}
    />

    <InputField
      name="email"
      control={control}
      label="Email"
      type="email"
      error={errors.email}
    />

    <InputField
      name="password"
      control={control}
      label="Password"
      type="password"
      error={errors.password}
    />

    <InputField
      name="confirmPassword"
      control={control}
      label="Confirm Password"
      type="password"
      error={errors.confirmPassword}
    />

    <button type="submit">Enviar</button>
  </form>)
}

export default MyForm;
