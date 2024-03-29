const generate = () => {
    const quoetes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "You may say I'm a dreamer, but I'm not the only one.I hope someday you'll join us. And the world will live as one.",
        "You must be the change you wish to see in the world.",
        "Spread love everywhere you go.Let no one ever come to you without leaving happier.",
        "The only thing we have to fear is fear itself.",
        "Darkness cannot drive out darkness: only light can do that.Hate cannot drive out hate: only love can do that.",
        "Do one thing every day that scares you.",
        "Well done is better than well said.",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "It is during our darkest moments that we must focus to see the light.",
        "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        "Be yourself; everyone else is already taken.",
        "You will face many defeats in life, but never let yourself be defeated.",
        "Go confidently in the direction of your dreams! Live the life you've imagined.",
        "In the end, it's not the years in your life that count. It's the life in your years."
    ]

    // console.log(quoetes[Math.floor(Math.random()*quoetes.length)]);
    document.getElementById('quote').innerHTML = "<q>" + quoetes[Math.floor(Math.random()*quoetes.length)] ;
}