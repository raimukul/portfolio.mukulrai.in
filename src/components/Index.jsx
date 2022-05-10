import React from 'react'
import BannerSection from './HomePage/BannerSection'
import IntroSection from './HomePage/IntroSection'
import GithubHistroy from './About/GithubHistroy'

export default function Index() {
  return (
    <div>
        <BannerSection/>
        <IntroSection/>
        <GithubHistroy/>
    </div>
  )
}
