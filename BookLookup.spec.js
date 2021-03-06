function BookLookup(AmazonService){
  this.service = AmazonService
  // this.echo = (isbn) =>{
  //   var n = 'xxx'
  //   var isbn = this.service(isbn)
  //   return `${isbn}`
  // }
  this.search = (isbn) => {
    var obj = this.service(isbn)
    return {
      bookName : obj.title ,
      cover : obj.image ,
      isbn : isbn
    }
  }

}

test('BookLookup Mock',()=>{
  const AmazonServiceMock = jest.fn()
          .mockReturnValue({
            title : 'basic node',
            image : ' : D ',
            isbn : 'isbn5555'
          })
  var book = new BookLookup(AmazonServiceMock)
  var isbn = 'isbn5555'
  //var result = app.echo(isbn)
  var bookInfo = book.search(isbn)
  expect(AmazonServiceMock).toHaveBeenCalled()
  expect(AmazonServiceMock).toHaveBeenCalledWith(isbn)
  //expect(result).toBe('12345679')
  expect(bookInfo.bookName).toBe('basic node')
  expect(bookInfo).toHaveProperty('isbn')
  expect(bookInfo.isbn).toHaveLength(8)

})
