import * as THREE from 'three';

export function createStars(textureLoader, particlesCount) {
  // Randomly generate star positions
  const vertices = new Float32Array(particlesCount).map(() => (Math.random() - 0.5) * 100);

  const particleTexture = textureLoader.load('./textures/star-removebg-preview.png');

  const particlesGeometry = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(vertices, 4));

  const particlesMaterial = new THREE.PointsMaterial({
    map: particleTexture,
    size: 0.3,
    sizeAttenuation: true,
    transparent: true,
  });

  return new THREE.Points(particlesGeometry, particlesMaterial);
}
