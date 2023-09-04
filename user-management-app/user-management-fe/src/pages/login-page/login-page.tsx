import {Button, TextField, Typography} from '@mui/material'
import {SubmitHandler, useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import {loginSchema} from './login-schema'

interface Inputs {
  email: string
  password: string
}

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  })

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data)
  }

  return (
    <>
      <Typography component="h1">Login</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          helperText={errors.email?.message}
          {...register('email', {required: true})}
        />
        <TextField
          label="Password"
          type="password"
          helperText={errors.password?.message}
          {...register('password', {required: true})}
        />
        <Button type="submit">Submit</Button>
      </form>
    </>
  )
}
