document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fortuneForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the year from the input
        const year = parseInt(document.getElementById('year').value);

        // Define zodiac signs, their fortunes, and image paths
        const zodiacs = [
            { name: 'Rat', fortune: 'You are resourceful and intelligent. Your quick thinking will help you overcome challenges.', imgSrc: 'img/rat.png' },
            { name: 'Ox', fortune: 'You are reliable and methodical. Steady progress and hard work will lead to success.', imgSrc: 'img/ox.png' },
            { name: 'Tiger', fortune: 'You are courageous and dynamic. Embrace new opportunities with confidence.', imgSrc: 'img/tiger.png' },
            { name: 'Rabbit', fortune: 'You are gentle and compassionate. Your kindness will bring you closer to others.', imgSrc: 'img/rabbit.png' },
            { name: 'Dragon', fortune: 'You are confident and ambitious. Take bold steps to achieve your goals.', imgSrc: 'img/dragon.png' },
            { name: 'Snake', fortune: 'You are wise and enigmatic. Trust your intuition and be patient for the right moment.', imgSrc: 'img/snake.png' },
            { name: 'Horse', fortune: 'You are energetic and enthusiastic. Keep pursuing your passions and remain optimistic.', imgSrc: 'img/horse.png' },
            { name: 'Goat', fortune: 'You are creative and gentle. Nurture your ideas and let your creativity shine.', imgSrc: 'img/goat.png' },
            { name: 'Monkey', fortune: 'You are clever and versatile. Use your skills to adapt and find innovative solutions.', imgSrc: 'img/monkey.png' },
            { name: 'Rooster', fortune: 'You are confident and hardworking. Your efforts will be recognized and rewarded.', imgSrc: 'img/rooster.png' },
            { name: 'Dog', fortune: 'You are loyal and honest. Your integrity will build strong relationships and bring you support.', imgSrc: 'img/dog.png' },
            { name: 'Pig', fortune: 'You are kind and generous. Embrace abundance and share your blessings with others.', imgSrc: 'img/pig.png' }
        ];

        // Calculate zodiac index
        const index = (year - 4) % 12;
        const zodiac = zodiacs[index];

        // Display the result
        const resultDiv = document.getElementById('result');
        const zodiacImage = document.getElementById('zodiacImage');
        const zodiacText = document.getElementById('zodiacText');

        if (zodiacImage && zodiacText) {
            zodiacImage.src = zodiac.imgSrc;
            zodiacImage.alt = zodiac.name;
            zodiacImage.style.display = 'block';
            zodiacText.textContent = `Your zodiac sign is ${zodiac.name}. ${zodiac.fortune}`;
        } else {
            console.error('One or more elements are not found.');
        }
    });
});
