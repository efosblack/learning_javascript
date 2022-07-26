//arguments and parameters

const speak = function(name = 'human', time = 'day'){
    console.log(`good ${time} ${name}`);
};

speak('john', 'night');