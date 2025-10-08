const {connectDB, mongoose} = require('./mongodb-data-layer-fundamentals-and-advanced-techniques-johnpaulmaduakolam/config/connect'); 
const Book = require('./mongodb-data-layer-fundamentals-and-advanced-techniques-johnpaulmaduakolam/models/book');    

const main = async () => {
  await connectDB();  // Connect to MongoDB

  await Book.deleteMany({}); // Clear collection

  try {
    await Book.insertMany([
      { title: "Clean Code", author: "Robert C. Martin", genre: "Programming", published_year: 2008, price: 30, pages: 464, publisher: "Prentice Hall", in_stock: true },
      { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 22, pages: 320, publisher: "Penguin", in_stock: true },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt", genre: "Programming", published_year: 1999, price: 35, pages: 352, publisher: "Addison-Wesley", in_stock: false },
      { title: "The Design of Everyday Things", author: "Don Norman", genre: "Design", published_year: 1988, price: 25, pages: 368, publisher: "Basic Books", in_stock: true },
      { title: "Deep Work", author: "Cal Newport", genre: "Productivity", published_year: 2016, price: 20, pages: 304, publisher: "Grand Central Publishing", in_stock: true },
      { title: "Refactoring", author: "Martin Fowler", genre: "Programming", published_year: 1999, price: 40, pages: 448, publisher: "Addison-Wesley", in_stock: false },
      { title: "Hooked", author: "Nir Eyal", genre: "Behavioral Design", published_year: 2014, price: 28, pages: 256, publisher: "Portfolio", in_stock: true },
      { title: "Don’t Make Me Think", author: "Steve Krug", genre: "UX Design", published_year: 2000, price: 26, pages: 216, publisher: "New Riders", in_stock: true },
      { title: "Zero to One", author: "Peter Thiel", genre: "Business", published_year: 2014, price: 18, pages: 224, publisher: "Crown Business", in_stock: false },
      { title: "The Lean Startup", author: "Eric Ries", genre: "Entrepreneurship", published_year: 2011, price: 24, pages: 336, publisher: "Crown Business", in_stock: true }
    ]);

    console.log("Books Inserted Successfully!");
  } catch (error) {
    console.error("Error inserting books:", error.message);
  }

  await mongoose.disconnect(); // Disconnect
  console.log("MongoDB Disconnected.");
};

main();
