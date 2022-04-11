const galleryp = document.getElementById('galleryp');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5];
const selectedIndex = null; 

imageIndexes.forEach((i) => 
{
    const imagep = document.createElement('img');
    imagep.src= `/Dungeon/cover_episode-${i}.jpg`;
    imagep.alt = `Cover for Episode ${i} of Project`; 
    imagep.classList.add('galleryImg');

    imagep.addEventListener('click', () => 
    {
        // Pop-up 
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/Dungeon/cover_episode-${i}.jpg`;
        selectedImage.alt = `Cover for Episode ${i} of Project`; 
    });

    galleryp.appendChild(imagep);
});

popup.addEventListener('click', () =>
{
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
});