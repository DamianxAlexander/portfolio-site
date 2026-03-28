import { Component, input, computed } from '@angular/core'
import { PROJECT_DETAILS } from '../project_data'

@Component({
  selector: 'app-project-card',
  standalone: true,
  templateUrl: './project-card.html'
})
export class ProjectCard {
  project = input.required<any>()
  
  features = computed(() => {
    const key = this.project().detailsKey
    if (key && PROJECT_DETAILS[key]) {
      return PROJECT_DETAILS[key]
    }
    return null
  })
}