import { PROJECTS } from '../../utils/projects'
import { ProjectItem } from './components/ProjectItem'
import { ProjectsContainer, ProjectsGrid } from './styles'

export function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsGrid>
        {PROJECTS.map(
          ({ id, title, description, image, github, link, tags }) => {
            return (
              <ProjectItem
                key={id}
                id={id}
                title={title}
                description={description}
                image={image}
                github={github}
                link={link}
                tags={tags}
              />
            )
          },
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  )
}
