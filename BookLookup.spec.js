function BookLookup(AmazonService){
  this.service = AmazonService
  this.echo = (isbn) =>{
    var n = 'xxx'
    var isbn = this.service(isbn)
    return `${isbn}`
  }

}

test('BookLookup Mock',()=>{
  const AmazonServiceMock = jest.fn()
          .mockReturnValue({
            bookName : 'basic node',
            cover : ' : D ',
            isbn : 'isbn555'
          })
  var book = new BookLookup(AmazonServiceMock)
  var isbn = 'isbn555'
  //var result = app.echo(isbn)
  var bookInfo = book.search(isbn)
  expect(AmazonServiceMock).toHaveBeenCalled()
  expect(AmazonServiceMock).toHaveBeenCalledWith(isbn)
  //expect(result).toBe('12345679')
  expect(bookInfo.title).tobe('basic node')
  expect(bookInfo).toHaveProperty('isbn')
  expect(bookInfo.isbn).toHaveLength(8)

})
