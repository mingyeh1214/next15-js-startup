import { Button } from '@/components/ui/button'
import { FlipWords } from '@/components/aceternity-ui/flip-words'
import { RainbowButton } from '@/components/magic-ui/rainbow-button'

import { Stack, Container, Button as MuiButton } from '@mui/material'
export default function Test() {
  const words = ['better', 'cute', 'beautiful', 'modern']

  return (
    <Container sx={{ mt: 2 }}>
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div className="mx-auto text-2xl">
          Build
          <FlipWords words={words} /> <br />
          websites with Aceternity UI
        </div>

        <MuiButton variant="contained" color="error">
          Mui button
        </MuiButton>
        <Button>shadcn button</Button>
        <RainbowButton>Magic UI - RainbowButton</RainbowButton>
        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          tailwind button
        </button>
      </Stack>
    </Container>
  )
}
