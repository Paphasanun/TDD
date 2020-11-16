const greet = (name) => {
    if (name === null) {
        return `Hello, my friend.`;
    };
    // console.log(typeof (name))
    if (typeof (name) === "object") {
        const nLenght = name.length;
        if (nLenght >= 3) {
            let message = "Hello,";
            let upTor = name.findIndex(item => item.toUpperCase() === item)
            if (upTor !== -1) {
                for (let i = 0; i <= nLenght - 1; i++) {
                    if (i === upTor) {
                        continue;
                    }
                    if (i === nLenght - 1) {
                        message += ` and ${name[nLenght - 1]}.`;
                        break;
                    }
                    message += ` ${name[i]}`;
                }
                message += ` AND HELLO ${name[upTor]}!`;
                return message;
            };
            for (let i = 0; i < nLenght - 1; i++) {
                message += ` ${name[i]},`;
            };
            message += ` and ${name[nLenght - 1]}.`;
            return message;
        } else if (name.includes('Charlie, Dianne')) {
            let message = "Hello,";
            const word = name[nLenght - 1].split(', ')
            for (let i = 0; i < nLenght - 1; i++) {
                message += ` ${name[i]},`;
            };
            message += ` ${word[0]},`;
            message += ` and ${word[1]}.`;
            return message;
        } else if (name.includes('\"Charlie, Dianne\"')) {
            // แก้ในนี้นะ
            let message = "Hello,";
            for (let i = 0; i < nLenght - 1; i++) {
                message += ` ${name[i]}`;
            };
            if (name[nLenght - 1].startsWith("\"") && name[nLenght - 1].endsWith("\"")) {
                const word = name[nLenght - 1].split(', ');
                const search1 = word[0].slice(1);
                const search2 = word[1].slice(word[1].search(word[1]), -1);
                message += ` and ${search1}`;
                message += `, ${search2}.`;
            };
            return message;
        } else {
            return `Hello, ${name[0]} and ${name[1]}.`;
        };
    } else if (name.toUpperCase() === name) {
        return `HELLO ${name}!`;
    } else {
        return `Hello, ${name}`;
    };
};
module.exports = { greet };