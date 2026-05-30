// Nicole's Music Player - JavaScript Logic

// Playlist data - Olivia Rodrigo's GUTS album
const playlist = [
    {
        id: 1,
        title: "all-american bitch",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - all-american bitch (Official Lyric Video) [n2BnbpjpRdo].mp3",
        lyrics: "text/all-american bitch.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 2,
        title: "bad idea right?",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - bad idea right？ (Official Lyric Video) [zla_eLVFiDU].mp3",
        lyrics: "text/bad idea right-.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 3,
        title: "vampire",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - vampire (Official Lyric Video) [Fqey8LxQxFU].mp3",
        lyrics: "text/vampire.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 4,
        title: "lacy",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - lacy (Official Lyric Video) [_IB5EYuz3XM].mp3",
        lyrics: "text/lacy.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 5,
        title: "ballad of a homeschooled girl",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - ballad of a homeschooled girl (Official Lyric Video) [obSpLSnJ-wI].mp3",
        lyrics: "text/ballad of a homeschooled girl.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 6,
        title: "making the bed",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - making the bed (Official Lyric Video) [OuuBnf2aGCc].mp3",
        lyrics: "text/making the bed.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 7,
        title: "logical",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - logical (Official Lyric Video) [I6OeAufKDBg].mp3",
        lyrics: "text/logical.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 8,
        title: "get him back!",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - get him back! (Official Lyric Video) [vkAezOlnwtk].mp3",
        lyrics: "text/get him back-.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 9,
        title: "love is embarrassing",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - love is embarrassing (Official Lyric Video) [AXi213cWgYM].mp3",
        lyrics: "text/love is embarrassing.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 10,
        title: "the grudge",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - the grudge (Official Lyric Video) [Qt5wB7KXSaM].mp3",
        lyrics: "text/the grudge.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 11,
        title: "pretty isn't pretty",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - pretty isn’t pretty (Official Lyric Video) [G0R7Z2A0XeY].mp3",
        lyrics: "text/pretty isn’t pretty.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 12,
        title: "teenagedream",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - teenage dream (Official Lyric Video) [F33uCg-3XiY].mp3",
        lyrics: "text/teenage dream.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 13,
        title: "girl i've always been",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - girl i've always been (Official Lyric Video) [1-dT9r5nbks].mp3",
        lyrics: "text/girl i've always been.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 14,
        title: "obsessed",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - obsessed (Official Lyric Video) [CxFa6r8uRNw].mp3",
        lyrics: "text/obsessed.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 15,
        title: "scared of my guitar",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - scared of my guitar (Official Lyric Video) [02Ai_4eG6ug].mp3",
        lyrics: "text/scared of my guitar.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 16,
        title: "so american",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - so american (Official Lyric Video) [W-PGNyhmSKA].mp3",
        lyrics: "text/so american.txt",
        albumArt: "Guts.jpg"
    },
    {
        id: 17,
        title: "stranger",
        artist: "Olivia Rodrigo",
        audio: "mp3/Olivia Rodrigo - stranger (Official Lyric Video) [no0S6UzeRlA].mp3",
        lyrics: "text/stranger.txt",
        albumArt: "Guts.jpg"
    }
    // Note: You can add more songs here if you have additional files
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffled = false;
let isRepeating = false;
let audio = new Audio();

// DOM Elements
const playlistElement = document.getElementById('playlist');
const currentAlbumArt = document.getElementById('current-album-art');
const currentSongTitle = document.getElementById('current-song-title');
const currentSongArtist = document.getElementById('current-song-artist');
const lyricsDisplay = document.getElementById('lyrics-display');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressFill = document.getElementById('progress-fill');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume-slider');

// Initialize the player
function init() {
    loadPlaylist();
    loadSong(currentSongIndex);
    setupEventListeners();
    
    // Update progress bar as audio plays
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleSongEnded);
    
    // Initialize volume
    audio.volume = volumeSlider.value;
}

// Load playlist into the UI
function loadPlaylist() {
    playlistElement.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = `flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-colors duration-200 ${index === currentSongIndex ? 'bg-emerald-500/20' : ''}`;
        li.innerHTML = `
            <div class="flex-1">
                <h3 class="font-medium text-white">${song.title}</h3>
                <p class="text-sm text-gray-400">${song.artist}</p>
            </div>
        `;
        li.addEventListener('click', () => {
            loadSong(index);
            playSong();
            
            // Close sidebar on mobile when song is selected
            if (window.innerWidth < 640) {
                const sidebar = document.getElementById('sidebar');
                const mobileOverlay = document.getElementById('mobile-overlay');
                if (sidebar && mobileOverlay) {
                    sidebar.classList.add('-translate-x-full');
                    sidebar.classList.remove('translate-x-0');
                    mobileOverlay.classList.add('hidden');
                }
            }
        });
        playlistElement.appendChild(li);
    });
}

// Load a specific song
function loadSong(index) {
    if (index < 0 || index >= playlist.length) return;
    
    currentSongIndex = index;
    const song = playlist[currentSongIndex];
    
    // Update UI
    currentAlbumArt.src = song.albumArt || 'Guts.jpg';
    currentSongTitle.textContent = song.title;
    currentSongArtist.textContent = song.artist;
    
    // Load audio
    audio.src = song.audio;
    
    // Load lyrics
    loadLyrics(song.lyrics);
    
    // Update playlist active state
    document.querySelectorAll('#playlist li').forEach((li, i) => {
        li.classList.toggle('bg-emerald-500/20', i === currentSongIndex);
    });
}

// Load lyrics from text file
async function loadLyrics(lyricsFile) {
    try {
        const response = await fetch(lyricsFile);
        if (!response.ok) throw new Error('Failed to load lyrics');
        const lyricsText = await response.text();
        lyricsDisplay.textContent = lyricsText.trim() || 'No lyrics available';
    } catch (error) {
        console.error('Error loading lyrics:', error);
        lyricsDisplay.textContent = 'Failed to load lyrics';
    }
}

// Play the current song
function playSong() {
    audio.play()
        .then(() => {
            isPlaying = true;
            updatePlayPauseIcon();
        })
        .catch(error => {
            console.error('Error playing audio:', error);
            lyricsDisplay.textContent = 'Error playing audio';
        });
}

// Pause the current song
function pauseSong() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseIcon();
}

// Toggle play/pause
function togglePlayPause() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// Update play/pause button icon
function updatePlayPauseIcon() {
    const icon = playPauseBtn.querySelector('.material-icons');
    icon.textContent = isPlaying ? 'pause' : 'play_arrow';
}

// Go to previous song
function prevSong() {
    if (isShuffled) {
        loadSong(Math.floor(Math.random() * playlist.length));
    } else {
        loadSong((currentSongIndex - 1 + playlist.length) % playlist.length);
    }
    playSong();
}

// Go to next song
function nextSong() {
    if (isShuffled) {
        loadSong(Math.floor(Math.random() * playlist.length));
    } else {
        loadSong((currentSongIndex + 1) % playlist.length);
    }
    playSong();
}

// Toggle shuffle
function toggleShuffle() {
    isShuffled = !isShuffled;
    shuffleBtn.classList.toggle('text-emerald-500', isShuffled);
}

// Toggle repeat
function toggleRepeat() {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('text-emerald-500', isRepeating);
}

// Handle when song ends
function handleSongEnded() {
    if (isRepeating) {
        audio.currentTime = 0;
        playSong();
    } else {
        nextSong();
    }
}

// Update progress bar and time display
function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = progress + '%';
    
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
}

// Format time in MM:SS format
function formatTime(seconds) {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

        // Setup event listeners for controls
        function setupEventListeners() {
            playPauseBtn.addEventListener('click', togglePlayPause);
            prevBtn.addEventListener('click', prevSong);
            nextBtn.addEventListener('click', nextSong);
            shuffleBtn.addEventListener('click', toggleShuffle);
            repeatBtn.addEventListener('click', toggleRepeat);
            
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const sidebar = document.getElementById('sidebar');
            const mobileOverlay = document.getElementById('mobile-overlay');
            
            if (mobileMenuBtn && sidebar && mobileOverlay) {
                mobileMenuBtn.addEventListener('click', () => {
                    if (window.innerWidth < 640) {
                        sidebar.classList.toggle('-translate-x-full');
                        sidebar.classList.toggle('translate-x-0');
                        mobileOverlay.classList.toggle('hidden');
                    }
                });
                
                // Close sidebar when clicking overlay
                mobileOverlay.addEventListener('click', () => {
                    if (window.innerWidth < 640) {
                        sidebar.classList.add('-translate-x-full');
                        sidebar.classList.remove('translate-x-0');
                        mobileOverlay.classList.add('hidden');
                    }
                });
            }
            
            // Volume slider
    volumeSlider.addEventListener('input', (e) => {
        audio.volume = e.target.value;
    });
    
    // Allow clicking on progress bar to seek
    const progressContainer = document.querySelector('.progress-container');
    progressContainer.addEventListener('click', (e) => {
        const rect = progressContainer.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
            togglePlayPause();
        } else if (e.code === 'ArrowRight') {
            nextSong();
        } else if (e.code === 'ArrowLeft') {
            prevSong();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);