import { PROJECTS } from '../../utils/projects'
import { ProjectItem } from './components/ProjectItem'
import { ProjectsContainer, ProjectsGrid } from './styles'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function Projects() {
  return (
    <ProjectsContainer>
      <ScrollArea.Viewport>
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
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="ScrollAreaScrollbar"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
    </ProjectsContainer>
  )
}
