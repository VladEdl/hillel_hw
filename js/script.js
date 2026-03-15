const userSelect = document.getElementById('userSelect');
const albumSelect = document.getElementById('albumSelect');
const loadBtn = document.getElementById('loadBtn');
const statusDiv = document.getElementById('status');
const photosDiv = document.getElementById('photos');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const API = 'https://jsonplaceholder.typicode.com';
const STEP = 12;
const FALLBACK_IMG = 'https://picsum.photos/150';

let allPhotos = [];
let offset = 0;

async function request(url, msg) {
    statusDiv.textContent = msg;
    statusDiv.classList.remove('error');
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        statusDiv.textContent = '';
        return data;
    } catch (err) {
        statusDiv.textContent = `Error: ${err.message}`;
        statusDiv.classList.add('error');
        throw err;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const users = await request(`${API}/users`, 'Loading users...');
        users.forEach(u => userSelect.add(new Option(u.name, u.id)));
    } catch (e) {}
});

userSelect.addEventListener('change', async (e) => {
    const uid = e.target.value;
    photosDiv.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    albumSelect.innerHTML = '<option value="">Select album…</option>';
    albumSelect.disabled = true;
    loadBtn.disabled = true;
    if (!uid) return;
    try {
        const albums = await request(`${API}/albums?userId=${uid}`, 'Loading albums...');
        albums.forEach(a => albumSelect.add(new Option(a.title, a.id)));
        albumSelect.disabled = false;
    } catch (e) {}
});

albumSelect.addEventListener('change', (e) => {
    loadBtn.disabled = !e.target.value;
});

loadBtn.addEventListener('click', async () => {
    const aid = albumSelect.value;
    photosDiv.innerHTML = '';
    offset = 0;
    loadMoreBtn.style.display = 'none';
    try {
        allPhotos = await request(`${API}/photos?albumId=${aid}`, 'Loading photos...');
        render();
    } catch (e) {}
});

function render() {
    const slice = allPhotos.slice(offset, offset + STEP);
    slice.forEach(p => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.innerHTML = `
            <img src="${p.thumbnailUrl}" 
                 onerror="this.onerror=null;this.src='${FALLBACK_IMG}?sig=${p.id}';" 
                 alt="">
            <p>${p.title.length > 40 ? p.title.substring(0, 40) + '...' : p.title}</p>
            <a href="${p.url}" target="_blank">Open</a>
        `;
        photosDiv.appendChild(card);
    });
    offset += STEP;
    loadMoreBtn.style.display = offset < allPhotos.length ? 'block' : 'none';
}

loadMoreBtn.addEventListener('click', render);