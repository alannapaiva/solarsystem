import * as THREE from 'three';
// Function to create an orbit or circle in a Three.js scene
export function createOrbit(radius, segments) {
    // Create an empty buffer geometry for the orbit
    const orbitGeometry = new THREE.BufferGeometry();
    const vertices = [];
    // Calculate the vertices of the orbit in a loop
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);
      vertices.push(x, 0, z);
    }
    // Set the position attribute of the orbit geometry
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x999999, linewidth: 5 });
    // Create a LineLoop, which is a closed loop of line segments
    const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
    // Return the orbit object
    return orbit;
  }
  