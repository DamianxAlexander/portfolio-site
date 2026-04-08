import { Component, signal } from '@angular/core'
import { ProjectCard } from './project-card/project-card'
import { Header } from './header/header'
import { Resume } from './resume/resume'
import { About } from './about/about'
import { Footer } from './footer/footer'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectCard, Header, Resume, About, Footer],
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
    },
    {
      title: 'OASIS',
      category: 'Enterprise Software',
      description: 'A comprehensive internal enterprise application designed to manage the entire lifecycle of student service referrals. The system handles highly relational data spanning billing, student services, contracts and yearly projections, staffing assignments, and compliance reporting.',
      imageUrl: 'images/architecture_state_flow.svg',
      detailsKey: 'oasis'
    }
  ])
}