class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}
	fix() {
		this.state = this.state * 1.5
	}
	set state(newState) {
		if (newState > 100) {
			this._state = 100
		} else if (newState < 0) {
			this._state = 0
		} else {
			this._state = newState
		}
	}
	get state() {
		return this._state
	}

}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
		super(name, releaseDate, pagesCount, state, type);
	}
}
class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
		super(name, releaseDate, pagesCount, state, type);
		this.author = author;
	}
}
class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}
class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}
class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
		super(author, name, releaseDate, pagesCount, state, type);
	}
}


class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}
	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}
	findBookBy(type, value) {
		let findedBooks = this.books.filter((book) => {
			return book[type] === value;
		})
		if (findedBooks.length === 1) {
			return findedBooks[0]
		} else if (findedBooks.length > 1) {
			return findedBooks
		} else {
			return null
		}
		// при поиске по типу может быть несколько книг одного года/автора/жанра
	}


	giveBookByName(bookName) {
		let index = this.books.findIndex(book => book.name === bookName)
		return index !== -1 ? this.books.splice(index, 1)[0] : null
	}
}

