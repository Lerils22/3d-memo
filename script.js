const cubes = document.querySelectorAll('.cube');

document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const angleX = (clientY - centerY) / centerY * 45;
  const angleY = (clientX - centerX) / centerX * -45;

  cubes.forEach(cube => {
    cube.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  });
});
