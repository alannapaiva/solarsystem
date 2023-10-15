import * as THREE from 'three';

// Function to create a starry background
export function createStars(textureLoader, particlesCount) {
  // Randomly generate star positions
  const vertices = new Float32Array(particlesCount).map(() => (Math.random() - 0.5) * 100);
  // Load a particle texture
  const particleTexture = textureLoader.load('./textures/star-removebg-preview.png');
  // Create a buffer geometry to hold the star positions
  const particlesGeometry = new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(vertices, 4));
  // Define the material for the star particles
  const particlesMaterial = new THREE.PointsMaterial({
    map: particleTexture,
    size: 0.3,
    sizeAttenuation: true,
    transparent: true,
  });
  // Create and return a Points object containing the stars' geometry and material
  return new THREE.Points(particlesGeometry, particlesMaterial);
}
