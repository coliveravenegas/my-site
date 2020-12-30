// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { Box, Text, Heading } from '@chakra-ui/core';


// import { Stack } from "@chakra-ui/core";

export default function Home() {
  return (
    <div>
      <Box backgroundColor="#181818" padding="450px 128px">
        <Heading as="h1" fontSize="6xl" fontWeight="bold" color="white">One step at the time, <br />
          <Text as="span" fontSize="6xl" display="inline" color="#fc0">learn develop and apply</Text>
        </Heading>

      </Box>
    </div>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <Stack isInline>
    //       <Code children="console.log(welcome)" />
    //       <Code variantColor="red" children="var chakra = 'awesome!'" />
    //       <Code variantColor="yellow" children="npm install chakra" />
    //     </Stack>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
