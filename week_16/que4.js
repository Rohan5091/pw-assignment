// Write a program that takes a list of books, including their authors and publication years as input. The program
// should then filter out all books that were published before 2010 and create a new array with the remaining
// books, but with their author names capitalized.

const list_of_books=[
  {
    author:"auther1",
    publication_year:2009
  },
  {
    author:"auther2",
    publication_year:2000
  },
  {
    author:"auther3",
    publication_year:2022
  },
  {
    author:"auther4",
    publication_year:2020
  },
  {
    author:"auther5",
    publication_year:2006
  },
  {
    author:"auther6",
    publication_year:2008
  }
]


const remaining_books=list_of_books.filter((books)=>{
  books.author=books.author.toUpperCase()
  return books.publication_year<2010 
})

console.log(remaining_books);