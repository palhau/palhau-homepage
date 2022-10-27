import { Box, Container, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a front-end developer based in Brazil!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-tittle">
            Alan Palhau
          </Heading>
          <p>Front-end Developer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
