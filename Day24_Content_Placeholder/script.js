const header = document.getElementById('card-header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const Uname = document.getElementById('name')
const date = document.getElementById('date')
const btn = document.getElementById('btn')

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

btn.addEventListener('click', () => {
    location.reload();
})


function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
        return text;
    }
    return text.slice(0, maxLength).trim() + '...';
}

function getData() {
    const postId = Math.floor(Math.random() * 100) + 1;

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => {
            title.textContent = truncateText(post.title, 45);
            excerpt.textContent = post.body;
            header.innerHTML = `<img src="https://picsum.photos/800/450?random=${postId}" alt="Random Image">`;
            return fetch('https://randomuser.me/api/');
        })
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            Uname.textContent = `${user.name.first} ${user.name.last}`;
            profile_img.innerHTML = `<img src="${user.picture.medium}" alt="">`;
            date.textContent = new Date(user.registered.date).toDateString();

            animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
            animated_bgs_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
        })
        .catch(err => console.error('Error fetching data:', err));
}
