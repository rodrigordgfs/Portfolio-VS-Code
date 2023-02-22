import { IProjects } from '../../../../interfaces/IProjects'
import {
  ProjectItemContainer,
  ProjectItemDescription,
  ProjectItemImage,
  ProjectItemLink,
  ProjectItemLinksContainer,
  ProjectItemTag,
  ProjectItemTagContainer,
  ProjectItemTitle,
} from './styles'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

export function ProjectItem({
  id,
  title,
  description,
  image,
  github,
  link,
  tags,
}: IProjects) {
  return (
    <ProjectItemContainer>
      <ProjectItemImage src={image} alt={title} />
      <ProjectItemTitle>{title}</ProjectItemTitle>
      <ProjectItemDescription>{description}</ProjectItemDescription>
      <ProjectItemTagContainer>
        {tags.map((tag) => {
          return <ProjectItemTag key={tag}>{tag}</ProjectItemTag>
        })}
      </ProjectItemTagContainer>
      <ProjectItemLinksContainer>
        <ProjectItemLink target="_blank" href={link}>
          <FiExternalLink />
        </ProjectItemLink>
        <ProjectItemLink target="_blank" href={github}>
          <FiGithub />
        </ProjectItemLink>
      </ProjectItemLinksContainer>
    </ProjectItemContainer>
  )
}
