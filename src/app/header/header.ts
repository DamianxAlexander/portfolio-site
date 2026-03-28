import { Component, input, output } from '@angular/core'

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html'
})
export class Header {
  currentTab = input.required<string>()
  tabChange = output<string>()

  tabs = ['About', 'Resume', 'Enterprise Software', 'Tools & Pipelines', '3D Art']
}