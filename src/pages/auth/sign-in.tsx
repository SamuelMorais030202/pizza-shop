import { zodResolver } from '@hookform/resolvers/zod'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInFormSchema>

export function SiginIn() {
  const { register, handleSubmit } = useForm<SignInForm>({
    resolver: zodResolver(signInFormSchema),
  })

  function handleSignIn(data: SignInForm) {
    console.log(data)
  }

  return (
    <div>
      <Helmet title="Login" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleSignIn)}
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-email</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <Button className="w-full">Acessar painel</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
