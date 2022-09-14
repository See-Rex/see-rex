import React from 'react'
import style from "./_index.module.scss"

function LandingBanner() {
  return (
    <div className={style.container}>
      <h1 className={style.header2}>Manage your real estate. <span>Anytime. Anywhere.</span></h1>
      <h3 className={style.heading}>Explore ways to monitor your properties. Keep in touch with both land and home owners. Create a centralized information database. Integrate data analytics to get better insight of your business.</h3>
    </div>
  )
}

export default LandingBanner