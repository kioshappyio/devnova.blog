const mediaList = [
    // {file: 'foto-kamu1.jpg', caption: 'Pemandangan Indah 1'},
    // {file: 'foto-kamu2.jpg', caption: 'Petualangan Seru 2'},
    // {file: 'foto-kamu3.jpg', caption: 'Momen Menakjubkan 3'},
    // {file: '', caption: ''},
];

let currentIndex = 0;
const modal = new bootstrap.Modal('#lightboxModal');
const mediaContainer = document.querySelector('.media-container');

// Gallery Creation with Modern Features
function createGallery() {
    gallery.innerHTML = mediaList.map((media, index) => {
        const isVideo = media.file.match(/\.(mp4|mov|avi)$/i);
        return `
            <div class="gallery-item ${isVideo ? 'video-thumbnail' : ''} position-relative" data-index="${index}">
                ${isVideo ? `
                    <video class="thumbnail-video" 
                           src="../../asset/galeri/${media.file}" 
                           muted 
                           playsinline
                           preload="metadata"
                           style="width:100%;height:100%;object-fit:cover">
                        Your browser does not support the video tag.
                    </video>
                    <div class="video-controls d-flex align-items-center justify-content-center">
                        <button class="play-button btn btn-link text-white fs-2 p-0">
                            <i class="bi bi-play-circle"></i>
                        </button>
                    </div>
                ` : `
                    <img src="../../asset/galeri/${media.file}" 
                         alt="${media.caption}" 
                         class="img-fluid" 
                         loading="lazy">
                `}
                <div class="caption-overlay">${media.caption}</div>
            </div>`;
    }).join('');

    // Event listener untuk tombol play
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Penting: cegah trigger lightbox
            const video = this.closest('.video-thumbnail').querySelector('video');
            const icon = this.querySelector('i');
            
            if(video.paused) {
                video.play()
                    .then(() => {
                        icon.classList.replace('bi-play-circle', 'bi-pause-circle');
                        video.controls = true;
                    })
                    .catch(error => {
                        console.error('Gagal memutar video:', error);
                        video.controls = true;
                    });
            } else {
                video.pause();
                icon.classList.replace('bi-pause-circle', 'bi-play-circle');
                video.controls = false;
            }
        });
    });

    // Event listener untuk video di lightbox
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', (e) => {
            if(!e.target.closest('.play-button')) {
                openLightbox(Number(thumbnail.dataset.index));
            }
        });
    });
}

// Enhanced Lightbox with Keyboard Navigation
function openLightbox(index) {
    currentIndex = index;
    updateLightboxMedia();
    modal.show();
}

function updateLightboxMedia() {
    const media = mediaList[currentIndex];
    const isVideo = media.file.match(/\.(mp4|mov|avi)$/i);
    
    mediaContainer.innerHTML = `
        ${isVideo ? `
            <video class="w-100" controls autoplay>
                <source src="../../asset/galeri/${media.file}" type="video/mp4">
            </video>
        ` : `
            <img src="../../asset/galeri/${media.file}" 
                 alt="${media.caption}" 
                 class="img-fluid rounded-3 animate__animated animate__fadeIn">
        `}
        <div class="caption text-center mt-3 fs-5">${media.caption}</div>
    `;
}

// Event Listeners with Modern Features
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => openLightbox(Number(item.dataset.index)));
});

document.addEventListener('keydown', (e) => {
    if (modal._element.classList.contains('show')) {
        if (e.key === 'ArrowLeft') navigate(-1);
        if (e.key === 'ArrowRight') navigate(1);
        if (e.key === 'Escape') modal.hide();
    }
});

document.querySelector('.prev').addEventListener('click', () => navigate(-1));
document.querySelector('.next').addEventListener('click', () => navigate(1));

function navigate(direction) {
    currentIndex = (currentIndex + direction + mediaList.length) % mediaList.length;
    updateLightboxMedia();
}

// Initialize with Intersection Observer for Lazy Loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    observer.observe(img);
});

createGallery();