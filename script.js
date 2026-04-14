
const images = ['AtelieDeRecordacoes-1.jpg', 'AtelieDeRecordacoes-10.jpg', 'AtelieDeRecordacoes-14.jpg', 'AtelieDeRecordacoes-2.jpg', 'AtelieDeRecordacoes-3.jpg', 'AtelieDeRecordacoes-4.jpg', 'AtelieDeRecordacoes-6 (1).jpg', 'AtelieDeRecordacoes-6.jpg', 'AtelieDeRecordacoes-7.jpg', 'IMG-20240630-WA0024.jpg', 'IMG-20240707-WA0051.jpg', 'IMG-20250731-WA0051(2).jpg', 'IMG-20250731-WA0052(2).jpg', 'IMG-20250731-WA0053.jpg', 'IMG-20250731-WA0054.jpg', 'IMG-20250731-WA0055(3).jpg', 'IMG-20250731-WA0056.jpg', 'IMG-20250731-WA0057.jpg', 'IMG-20250731-WA0058(2).jpg', 'IMG-20250731-WA0059.jpg', 'IMG-20250731-WA0060.jpg', 'IMG-20250731-WA0061.jpg', 'IMG-20250731-WA0062.jpg', 'IMG-20250731-WA0063.jpg', 'IMG-20250731-WA0064.jpg', 'IMG-20250731-WA0065.jpg', 'IMG-20250731-WA0066.jpg', 'IMG-20250731-WA0067.jpg', 'IMG-20250731-WA0068.jpg', 'IMG-20250731-WA0069.jpg', 'IMG-20250731-WA0070.jpg', 'IMG-20250731-WA0071.jpg', 'IMG-20250731-WA0072.jpg', 'IMG-20250731-WA0073.jpg', 'IMG-20250731-WA0074.jpg', 'IMG-20250731-WA0075.jpg', 'IMG-20250731-WA0076.jpg', 'IMG-20250731-WA0077.jpg', 'IMG-20250731-WA0078.jpg', 'IMG-20250731-WA0079.jpg', 'IMG-20250731-WA0080.jpg', 'IMG-20250731-WA0081.jpg', 'IMG-20250731-WA0082.jpg', 'IMG-20250731-WA0083.jpg', 'IMG-20250731-WA0084.jpg', 'IMG-20250731-WA0085.jpg', 'IMG-20250731-WA0086.jpg', 'IMG-20250731-WA0087.jpg', 'IMG-20250731-WA0088.jpg', 'IMG-20250731-WA0089.jpg', 'IMG-20250731-WA0090.jpg', 'IMG-20250731-WA0091.jpg', 'IMG-20250731-WA0092.jpg', 'IMG-20250731-WA0093.jpg', 'IMG-20250731-WA0094.jpg', 'IMG-20250731-WA0095.jpg', 'IMG-20250731-WA0096.jpg', 'IMG-20250731-WA0097.jpg', 'IMG-20250731-WA0098.jpg', 'IMG-20250731-WA0099.jpg', 'IMG-20250731-WA0100(2).jpg', 'IMG-20250731-WA0101.jpg', 'IMG-20250731-WA0102(3).jpg', 'IMG-20250731-WA0103.jpg', 'IMG-20250731-WA0104(1).jpg', 'IMG-20250731-WA0105.jpg', 'IMG-20250731-WA0106.jpg', 'IMG-20250731-WA0107.jpg', 'IMG-20250731-WA0108.jpg', 'IMG-20250731-WA0109.jpg', 'IMG-20250731-WA0110.jpg', 'IMG-20250731-WA0111.jpg', 'IMG_20240621_170858455.jpg', 'IMG_20240714_171556155.jpg', 'IMG_20240714_171558233.jpg', 'IMG_20240714_171731856.jpg', 'IMG_20240908_165658779.jpg', 'IMG_20241107_144746403.jpg', 'IMG_20241107_144747336.jpg', 'IMG_20241107_210128780.jpg', 'IMG_20241107_210129195.jpg', 'IMG_20250101_000336275.jpg', 'IMG_20250101_000341186.jpg', 'IMG_20250227_210434328.jpg', 'IMG_20250227_210435393.jpg', 'IMG_20250227_210436017.jpg', 'IMG_20250227_210527568.jpg', 'IMG_20250227_210531472.jpg', 'IMG_20250227_210538597.jpg', 'IMG_20250227_210544228.jpg', 'IMG_20250306_212259133.jpg', 'IMG_20250306_212259939.jpg', 'IMG_20250306_212302118.jpg', 'IMG_20250528_113256872.jpg', 'IMG_20250528_113257735.jpg', 'IMG_20250711_110541546.jpg', 'IMG_20250711_110620137.jpg', 'IMG_20250711_110622811.jpg', 'IMG_20250711_110628983.jpg', 'IMG_20250711_110633791.jpg', 'IMG_20250711_110636123.jpg', 'IMG_20250711_110859909.jpg', 'IMG_20250711_110919149.jpg', 'IMG_20250711_110921102.jpg', 'IMG_20260216_182433855.jpg', 'Screenshot_20241129-084122~2.png'];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const heartContainer = document.getElementById('heart-container');

// Load Images
images.forEach(imgSrc => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${imgSrc}" loading="lazy" alt="Momento Especial">`;
    item.onclick = () => {
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    };
    gallery.appendChild(item);
});

// Lightbox Close
lightbox.onclick = () => {
    lightbox.style.display = 'none';
};

// Intersection Observer for Letter Card
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

observer.observe(document.getElementById('letter-card'));

// Floating Hearts Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Smooth Hero Parallax
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelector('.hero').style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// YouTube API Logic
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: '1v2LnfyDjig',
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'playlist': '1v2LnfyDjig'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    const musicToggle = document.getElementById('music-toggle');
    const landingOverlay = document.getElementById('landing-overlay');
    const startBtn = document.querySelector('.start-btn');
    let isPlaying = false;

    // Handle Landing Overlay Click (This enables Autoplay)
    startBtn.onclick = () => {
        player.playVideo();
        isPlaying = true;
        musicToggle.classList.add('playing');
        musicToggle.querySelector('span').innerText = 'Pause';
        landingOverlay.classList.add('fade-out');
        
        // Remove overlay from DOM after animation
        setTimeout(() => {
            landingOverlay.style.display = 'none';
        }, 1500);
    };

    musicToggle.onclick = () => {
        if (isPlaying) {
            player.pauseVideo();
            musicToggle.classList.remove('playing');
            musicToggle.querySelector('span').innerText = 'Play';
        } else {
            player.playVideo();
            musicToggle.classList.add('playing');
            musicToggle.querySelector('span').innerText = 'Pause';
        }
        isPlaying = !isPlaying;
    };
}

// Load YouTube API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
