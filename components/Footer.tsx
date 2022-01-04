import * as React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import * as config from 'lib/config'

import styles from './styles.module.css'

// TODO: merge the data and icons from PageSocial with the social links in Footer

export const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    (e) => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright 2021 {config.author}</div>

      {hasMounted ? (
        <div className={styles.settings}>
          <a
            className={styles.toggleDarkMode}
            onClick={toggleDarkModeCb}
            title='Toggle dark mode'
          >
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}

      <div className={styles.social}>
        {config.bilibili && (
          <a
            className={styles.bilibili}
            href={`https://space.bilibili.com/${config.bilibili}`}
            title={`Bilibili @${config.bilibili}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <<path d="M28,8h-9.586l3.293-3.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-4.545,4.544L8.351,5.063C7.834,4.871,7.258,5.132,7.063,5.649C6.87,6.166,7.132,6.742,7.649,6.937L10.485,8H4C3.448,8,3,8.448,3,9v17c0,0.552,0.448,1,1,1h2.184C6.598,28.161,7.698,29,9,29s2.402-0.839,2.816-2h8.369c0.414,1.161,1.514,2,2.816,2s2.402-0.839,2.816-2H28c0.552,0,1-0.448,1-1V9C29,8.448,28.552,8,28,8z M27,25H5V10h22V25z M7,24h18c0.552,0,1-0.448,1-1V12c0-0.552-0.448-1-1-1H7c-0.552,0-1,0.448-1,1v11C6,23.552,6.448,24,7,24z M8,13h16v9H8V13z M12.001,17c-0.367,0-0.72-0.202-0.896-0.553c-0.247-0.494-0.047-1.095,0.447-1.342l2-1c0.495-0.248,1.095-0.047,1.342,0.447s0.047,1.095-0.447,1.342l-2,1C12.304,16.966,12.151,17,12.001,17z M21.949,16.316C21.809,16.735,21.419,17,21,17c-0.104,0-0.211-0.017-0.316-0.052l-3-1c-0.524-0.175-0.807-0.741-0.632-1.265c0.174-0.523,0.739-0.807,1.265-0.632l3,1C21.84,15.226,22.124,15.792,21.949,16.316z M20,18.5c0,1.378-1.122,2.5-2.5,2.5c-0.565,0-1.081-0.195-1.5-0.513C15.581,20.805,15.065,21,14.5,21c-1.378,0-2.5-1.122-2.5-2.5c0-0.552,0.448-1,1-1s1,0.448,1,1c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-0.552,0.448-1,1-1s1,0.448,1,1c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-0.552,0.448-1,1-1S20,17.948,20,18.5z" />
          </a>
        )}

        {config.github && (
          <a
            className={styles.github}
            href={`https://github.com/${config.github}`}
            title={`GitHub @${config.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        )}

        {config.linkedin && (
          <a
            className={styles.linkedin}
            href={`https://www.linkedin.com/in/${config.linkedin}`}
            title={`LinkedIn ${config.author}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        )}
      </div>
    </footer>
  )
}
