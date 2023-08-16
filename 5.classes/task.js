class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } if (number > 100) {
            this._state = 100;
        } else {
            this._state = number
        };
    }
    get state() {
        return this._state;
    }

};

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    };
};

class Book extends PrintEditionItem {
    constructor(author, name,  releaseDate, pagesCount, type) {
        super(author, name,  releaseDate, pagesCount, type);
        this.author = author;
        this.type = 'book';
    };
};

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'novel';
    };
};

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'fantastic';
    };
};

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount, state, type, author) {
        super(name, releaseDate, pagesCount, state, author);
        this.type = 'detective';
    };
};



const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

// Задание 2

// class Library {
//     name = "";
//     books = [];
// }