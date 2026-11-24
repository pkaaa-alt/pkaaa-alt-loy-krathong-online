const form = document.getElementById('krathongForm');
const river = document.getElementById('river');

const krathongIcons = {
  banana: '🌼',
  lotus: '🪷',
  candle: '🕯️'
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const wish = document.getElementById('wish').value.trim();
  const style = form.querySelector('input[name="style"]:checked').value;

  if (!name || !wish) {
    alert('กรุณากรอกชื่อและคำอธิษฐานให้ครบถ้วน');
    return;
  }

  const krathong = document.createElement('div');
  krathong.className = 'krathong';

  const boat = document.createElement('div');
  boat.className = 'boat';
  boat.textContent = krathongIcons[style];

  const card = document.createElement('div');
  card.className = 'wish-card';

  const owner = document.createElement('strong');
  owner.textContent = `จาก ${name}`;
  const message = document.createElement('span');
  message.textContent = wish;

  card.append(owner, message);
  krathong.append(boat, card);
  river.appendChild(krathong);

  krathong.addEventListener('animationend', () => krathong.remove());
  form.reset();
});
