import React, { useState } from 'react'

import Grid from './Hello'
import ResponsiveAppBar from './Components/Navbar'

export default function Random() {
    return (
      <div>
        <ResponsiveAppBar />
        <Grid />
      </div>
    )
  }