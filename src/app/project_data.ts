export const PROJECT_DETAILS: Record<string, any> = {
  'terrainBuilder': [
    {
      title: 'Real Time Property Binding',
      description: 'To achieve real time updates without forcing the user to click a rebuild button I wired the slider properties directly into a live update event listener.',
      codeFile: '__init__.py',
      codeSnippet: `def live_update(self, context):
    generator.build_landscape(context.scene)`
    },
    {
      title: 'Procedural Vector Math',
      description: 'The core generation engine iterates over a densely subdivided mesh using normalized noise values to calculate the Z axis.',
      codeFile: 'generator.py',
      codeSnippet: `for vertex in mesh.vertices:
    coord = mathutils.Vector(((vertex.co.x + seed) / 20.0, (vertex.co.y + seed) / 20.0, 0.0))
    base_noise = mathutils.noise.noise(coord)
    n = (base_noise + 1.0) / 2.0
    z = n * hills
    vertex.co.z = z`
    }
  ]
}