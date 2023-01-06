import { Grid } from '@mui/material';
import React from 'react'
import Box from '../Components/Box';
function index() {
  return (
    <div className='mt-6 flex items-center justify-center w-full'>
      <div className='w-4/5'>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
              <Box icon = "devicon-javascript-plain" text="JavaScript" />
            </a>
            <a href='https://developer.mozilla.org/en-US/docs/Web/HTML'>
              <Box icon = "devicon-html5-plain" text="HTML" />
            </a>
            <a href="https://docs.python.org/3/">
              <Box icon = "devicon-python-plain" text="Python" />
            </a>
            <a href='https://docs.oracle.com/en/java/'>
              <Box icon = "devicon-java-plain" text="Java" />
            </a>
            <a href="https://reactjs.org/docs/getting-started.html">
              <Box icon = "devicon-react-original" text="React.js" />
            </a>
            <a href="https://reactnative.dev/docs/getting-started">
            <Box icon = "devicon-react-original" text="React Native" />

            </a>
            <a href='https://nodejs.org/en/docs/'>
              <Box icon = "devicon-nodejs-plain-wordmark" text="Node.js" />
            </a>
            <a href="https://www.mongodb.com/docs/">
            <Box icon = "devicon-mongodb-plain" text="MongoDB" />
            </a>
            <a href="https://expressjs.com/">
            <Box icon = "devicon-express-original" text="Express.js" />

            </a>
            <a href="https://ionicframework.com/docs">
            <Box icon = "devicon-ionic-original" text="Ionic" />

            </a>
            <a href="https://www.typescriptlang.org/">
            <Box icon = "devicon-typescript-plain" text="TypeScript" />

            </a>
            <a href="https://firebase.google.com/docs?gclid=Cj0KCQiAnsqdBhCGARIsAAyjYjSeXUEiQejUDNjqAYch0-rQB0ZUb55rrxbFvI4RRRaLT6F469rJKmEaAmlAEALw_wcB&gclsrc=aw.ds">
            <Box icon = "devicon-firebase-plain" text="Firebase" />

            </a>
          </Grid>
      </div>
    </div>

  )
}

export default index