import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
const [orbitFile, chaosFile] = process.argv.slice(2)
if (!orbitFile || !chaosFile) throw new Error('Usage: node scripts/prepare-visuals.mjs <orbital-data.txt> <chaos-data.txt>')
const readRows = (file, count) => readFileSync(file, 'utf8').trim().split(/\r?\n/).slice(0, count).map(line => line.trim().split(/\s+/).map(Number))
const orbit = readRows(orbitFile, 4000)
const chaos = readRows(chaosFile, 1600)
if (orbit.some(row => row.length < 10 || row.some(n => !Number.isFinite(n))) || chaos.some(row => row.length < 4 || row.some(n => !Number.isFinite(n)))) throw new Error('Invalid simulation data')
const path = points => points.map(([x, y], i) => (i ? 'L' : 'M') + x.toFixed(2) + ',' + y.toFixed(2)).join(' ')
const circle = (x,y,r,color) => '<circle cx="' + x + '" cy="' + y + '" r="' + r + '" fill="' + color + '"/>'
const curve = (points, color, width = 1.3) => '<path d="' + path(points) + '" fill="none" stroke="' + color + '" stroke-width="' + width + '" opacity=".75"/>'
const grid = '<path d="M80 230h560M360 35v390" stroke="#ffffff12" stroke-dasharray="3 6"/>'
const wrap = (title, contents, label) => '<svg xmlns="http://www.w3.org/2000/svg" width="720" height="480" viewBox="0 0 720 480" role="img"><title>' + title + '</title><defs><radialGradient id="bg"><stop stop-color="#261b35"/><stop offset="1" stop-color="#100e17"/></radialGradient></defs><rect width="720" height="480" fill="url(#bg)"/>' + grid + contents + '<text x="360" y="458" text-anchor="middle" fill="#b8abc8" font-family="monospace" font-size="10" letter-spacing="2">' + label + '</text></svg>'
let curves = ''
const colors = ['#9c8db2', '#b99be0', '#d6bfff', '#c86575']
for (let body = 1; body <= 4; body++) {
  const points = orbit.filter((_, i) => i % 3 === 0).map(row => [360 + row[body * 2] * 110, 230 - row[body * 2 + 1] * 110])
  const last = points.at(-1)
  curves += curve(points, colors[body - 1]) + circle(last[0], last[1], 4, colors[body - 1])
}
curves += circle(360,230,6,'#ead9b9') + '<text x="625" y="251" fill="#a497b6" font-family="monospace" font-size="10">x / AU</text>'
mkdirSync('public/images', { recursive: true })
writeFileSync('public/images/orbital-trajectories.svg', wrap('Inner-planet trajectories from saved simulation output', curves, 'C++ SIMULATION / FIRST 4,000 SAMPLES'))
const points = chaos.map(row => [360 + (Math.sin(row[0]) + Math.sin(row[1])) * 96, 230 + (Math.cos(row[0]) + Math.cos(row[1])) * 96])
const last = points.at(-1)
const angle = chaos.at(-1)
const joint = [360 + Math.sin(angle[0]) * 96, 230 + Math.cos(angle[0]) * 96]
const pendulum = curve(points, '#ab84d5', 1) + curve([[360,230],joint,last], '#e1c9ff', 2) + circle(360,230,3,'#eee2ff') + circle(joint[0],joint[1],5,'#d4b4ff') + circle(last[0],last[1],6,'#c86575')
writeFileSync('public/images/pendulum-trajectory.svg', wrap('Double-pendulum trajectory from saved angular states', pendulum, 'UNIT-LENGTH RODS / FIRST 1,600 SAMPLES'))
console.log('Created two SVG previews from existing simulation datasets. No simulations were rerun.')