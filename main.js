let messages = [
    'Do not lose hope, nor be sad',
    'Never underestimate the power of Dua (supplication)',
    'Be like a diamond, precious and rare, not like a stone, found everywhere.',
    'For indeed, with hardship comes ease',
    'Before going to sleep every night, forgive everyone and sleep with a clean heart.',
    'The heart that beats for Allah is always a stranger among the hearts that beat for the Dunya (world).',
    'The more you let go, the higher you rise.',
    'Taking pains to remove the pains of others is the true essence of generosity.',
    'Suffering is a gift. In it is hidden mercy.',
    'Reflection is the lamp of the heart. If it departs, the heart will have no light.'
]

const randomMessage = () => {
    return messages[Math.floor(Math.random() * messages.length)]
}

console.log(randomMessage());
