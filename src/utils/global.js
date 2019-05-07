import urljoin from 'url-join'
import config from '../../data/SiteConfig'

const editOnGithub = post => {
  return urljoin(config.repo, '/blob/master/content/posts', `${post.slug}.md`)
}

export { editOnGithub }
