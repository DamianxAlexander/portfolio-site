export const PROJECT_DETAILS: Record<string, any> = {
  'terrainBuilder': [
    {
      title: 'Real Time Property Binding',
      description: 'To achieve real time updates without forcing the user to click a rebuild button I wired the slider properties directly into a live update event listener.',
      language: 'Python',
      codeFile: '__init__.py',
      codeSnippet: `def live_update(self, context):
    generator.build_landscape(context.scene)`
    },
    {
      title: 'Procedural Vector Math',
      description: 'The core generation engine iterates over a densely subdivided mesh using normalized noise values to calculate the Z axis.',
      language: 'Python',
      codeFile: 'generator.py',
      codeSnippet: `for vertex in mesh.vertices:
    coord = mathutils.Vector(((vertex.co.x + seed) / 20.0, (vertex.co.y + seed) / 20.0, 0.0))
    base_noise = mathutils.noise.noise(coord)
    n = (base_noise + 1.0) / 2.0
    z = n * hills
    vertex.co.z = z`
    }
  ],
  'oasis': [
    {
      title: 'The Bottleneck & Architectural Solution',
      description: 'Generating complex compliance documents directly on the primary web servers caused massive CPU spikes. I established strict boundaries around inherited legacy NgRx patterns to ensure stability under tight deadlines while roadmapping a migration to Angular Signals. We successfully offloaded all heavy document generation to a dedicated Aspose microservice paired with a SQL FileStream database.',
      codeFile: '',
      codeSnippet: ''
    },
    {
      title: 'Strict Entity Framework Architecture',
      description: 'To handle the massive relational data needs of OASIS I enforced a strict separation between our database schema and application logic. The EF Core context relies entirely on explicit foreign key mapping to ensure deterministic migrations and perfect sync with our SQL clusters.',
      language: 'C#',
      codeFile: 'OasisContext.cs',
      codeSnippet: `public class OasisContext : DbContext {\n  public DbSet<Student> Students { get; set; }\n\n  protected override void OnModelCreating(ModelBuilder modelBuilder) {\n    modelBuilder.Entity<Student>()\n      .HasOne(s => s.Profile)\n      .WithOne(p => p.Student)\n      .HasForeignKey<StudentProfile>(p => p.StudentId)\n      .OnDelete(DeleteBehavior.Restrict);\n  }\n}`
    },
    {
      title: 'Modernizing State Management',
      description: 'Maintaining the inherited NgRx architecture required significant boilerplate. I established the architectural roadmap to migrate our shared state to Angular Signals to drastically improve rendering performance through fine-grained reactivity.',
      language: 'TypeScript',
      codeFile: 'student-state.service.ts',
      codeSnippet: `@Injectable({ providedIn: 'root' })\nexport class StudentStateService {\n  private studentData = signal<Student[]>([]);\n  private activeFilters = signal<FilterCriteria>({});\n\n  readonly filteredStudents = computed(() => {\n    const students = this.studentData();\n    const filters = this.activeFilters();\n    return students.filter(s => s.status === filters.status);\n  });\n\n  async loadStudents() {\n    const data = await this.api.getStudents();\n    this.studentData.set(data);\n  }\n}`
    },
    {
      title: 'Dynamic Model-Driven Form Building',
      description: 'Instead of manually wiring hundreds of forms I architected a shared library that consumes strict TypeScript models to build Angular Reactive Forms dynamically. This enforced absolute consistency between our .NET DTOs and our frontend state.',
      language: 'TypeScript',
      codeFile: 'form-builder.ts',
      codeSnippet: `export class FormBuilderFactory {\n  static createFormFromModel<T>(model: new () => T, fb: FormBuilder): FormGroup {\n    const instance = new model();\n    const formGroup = {};\n    \n    Object.keys(instance).forEach(key => {\n      const validators = ValidationMetadata.get(model, key) || [];\n      formGroup[key] = [instance[key], validators];\n    });\n    \n    return fb.group(formGroup);\n  }\n}`
    }
  ]
}