import * as THREE from 'three';

export function createOrbit(radius, segments) {
    const orbitGeometry = new THREE.BufferGeometry();
    const vertices = [];
  
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      const x = radius * Math.cos(theta);
      const z = radius * Math.sin(theta);
      vertices.push(x, 0, z);
    }
  
    orbitGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x999999, linewidth: 5 });
    const orbit = new THREE.LineLoop(orbitGeometry, orbitMaterial);
  
    return orbit;
  }
  