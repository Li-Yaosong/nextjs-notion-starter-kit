import React from 'react'
import cs from 'classnames'

import * as config from 'lib/config'

import styles from './PageSocial.module.css'

interface SocialLink {
  name: string
  title: string
  icon: React.ReactNode
  href?: string
}

const socialLinks: SocialLink[] = [
  config.bilibili && {
    name: 'bilibili',
    href: `https://space.bilibili.com/${config.bilibili}`,
    title: `Bilibili @${config.bilibili}`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32">
        <rect width="539" height="176" x="-174" y="-20" fill="#F3EEE9" display="none"/>
        <path d="M28,8h-9.586l3.293-3.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-4.545,4.544L8.351,5.063C7.834,4.871,7.258,5.132,7.063,5.649C6.87,6.166,7.132,6.742,7.649,6.937L10.485,8H4C3.448,8,3,8.448,3,9v17c0,0.552,0.448,1,1,1h2.184C6.598,28.161,7.698,29,9,29s2.402-0.839,2.816-2h8.369c0.414,1.161,1.514,2,2.816,2s2.402-0.839,2.816-2H28c0.552,0,1-0.448,1-1V9C29,8.448,28.552,8,28,8z M27,25H5V10h22V25z M7,24h18c0.552,0,1-0.448,1-1V12c0-0.552-0.448-1-1-1H7c-0.552,0-1,0.448-1,1v11C6,23.552,6.448,24,7,24z M8,13h16v9H8V13z M12.001,17c-0.367,0-0.72-0.202-0.896-0.553c-0.247-0.494-0.047-1.095,0.447-1.342l2-1c0.495-0.248,1.095-0.047,1.342,0.447s0.047,1.095-0.447,1.342l-2,1C12.304,16.966,12.151,17,12.001,17z M21.949,16.316C21.809,16.735,21.419,17,21,17c-0.104,0-0.211-0.017-0.316-0.052l-3-1c-0.524-0.175-0.807-0.741-0.632-1.265c0.174-0.523,0.739-0.807,1.265-0.632l3,1C21.84,15.226,22.124,15.792,21.949,16.316z M20,18.5c0,1.378-1.122,2.5-2.5,2.5c-0.565,0-1.081-0.195-1.5-0.513C15.581,20.805,15.065,21,14.5,21c-1.378,0-2.5-1.122-2.5-2.5c0-0.552,0.448-1,1-1s1,0.448,1,1c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-0.552,0.448-1,1-1s1,0.448,1,1c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5c0-0.552,0.448-1,1-1S20,17.948,20,18.5z"/>
      </svg>
    )
  },

  config.github && {
    name: 'github',
    href: `https://github.com/${config.github}`,
    title: `GitHub @${config.github}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
      </svg>
    )
  },

  config.linkedin && {
    name: 'linkedin',
    href: `https://www.linkedin.com/in/${config.linkedin}`,
    title: `LinkedIn ${config.author}`,
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path d='M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z' />
      </svg>
    )
  }
].filter(Boolean)

export const PageSocial: React.FC = () => {
  return (
    <div className={styles.pageSocial}>
      {socialLinks.map((action) => (
        <a
          className={cs(styles.action, styles[action.name])}
          href={action.href}
          key={action.name}
          title={action.title}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.actionBg}>
            <div className={styles.actionBgPane} />
          </div>

          <div className={styles.actionBg}>{action.icon}</div>
        </a>
      ))}
    </div>
  )
}
