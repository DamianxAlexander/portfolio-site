import { Component, signal } from '@angular/core'
import { ProjectCard } from './project-card/project-card'
import { Header } from './header/header'
import { Resume } from './resume/resume'
import { About } from './about/about'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectCard, Header, Resume, About],
  templateUrl: './app.html'
})
export class AppComponent {
  activeTab = signal('About')

  projects = signal([
    {
      title: 'Procedural Terrain Builder',
      category: 'Tools & Pipelines',
      videoUrl: 'videos/topology-tool.mp4',
      description: 'A custom Blender add on that generates massive scale terrain networks. I built this utilizing a strict separation of concerns to decouple the UI logic from the heavy math operations.',
      detailsKey: 'terrainBuilder'
    },
    {
      title: 'Low Poly Lighthouse Render',
      category: '3D Art',
      imageUrl: 'images/Lighthouse_Render.png',
      description: 'A low poly 3D environment created to explore dynamic lighting techniques and water reflections.'
    }
  ])
}