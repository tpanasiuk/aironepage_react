import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import Header from './components/Header/Header'
import HomeSection from './components/HomeSection/HomeSection'
import CarouselVideo from './components/CarouselVideo/CarouselVideo'
import DisplayResult from './components/DisplayResult/DisplayResult'
import Service from './components/Service/Service'
import Work from './components/Work/Work'
import Statistics from './components/Statistics/Statistics'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Router>
        <Header />
        <main>
          <HomeSection />
          <CarouselVideo />
          <DisplayResult />
          <Statistics />
          <Service />
          <Work />
        </main>
        <Footer />
      </Router>
    </StyledEngineProvider>
  )
}

export default App
