import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { Analytics } from "@vercel/analytics/react"

const config: DocsThemeConfig = {
  logo: <span>Hessian</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <div>
        <p><a href="https://hessian.cn/" target="_blank">Hessian's Blog</a></p>
        <Analytics />
      </div>
    ),
  },
}

export default config
