# Sample image upload guide

Place real machining or factory sample photos in this folder when they are ready.

Recommended naming:

- `ai-liquid-cooling-plate.jpg`
- `ai-server-manifold.jpg`
- `ai-rack-bracket.jpg`
- `robotics-actuator-housing.jpg`
- `robotics-sensor-mount.jpg`
- `robotics-end-effector.jpg`
- `photonics-module-housing.jpg`
- `photonics-alignment-fixture.jpg`
- `photonics-thermal-carrier.jpg`
- `semiconductor-inspection-fixture.jpg`
- `semiconductor-equipment-plate.jpg`
- `semiconductor-process-tool.jpg`

Recommended image treatment:

- Use landscape photos when possible.
- Crop to approximately 4:3 or 16:10.
- Keep important details centered.
- Avoid showing customer logos, confidential drawings, serial numbers, or unreleased parts.
- If a real customer part cannot be shown, use a representative sample part instead.

When photos are added, replace the `.sample-photo` placeholder in each industry page with:

```html
<div class="sample-photo">
  <img src="assets/samples/example-file.jpg" alt="Short sample description" />
</div>
```
