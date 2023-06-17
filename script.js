const books = [
  {
    title: "Python",
    author: "Philip Robbins",
    price: 10,
    year: 2020,
    availability: true,
    copies: 5,
    imageUrl: "https://m.media-amazon.com/images/I/51snsA3+JOL.jpg"
  },
  {
    title: "Interview Questions",
    author: "Narasimha Karumanchi",
    price: 15,
    year: 2018,
    availability: false,
    copies: 0,
    imageUrl: "https://m.media-amazon.com/images/I/51UeV3rEQKL.jpg"
  },
  {
    title: "Java Programming",
    author: "Scott Bernard",
    price: 20,
    year: 2021,
    availability: true,
    copies: 10,
    imageUrl: "https://m.media-amazon.com/images/I/51eS3MxQ1YL.jpg"
  },
  {
    title: "C Programming",
    author: "Darrell",
    price: 12,
    year: 2019,
    availability: true,
    copies: 3,
    imageUrl: "https://m.media-amazon.com/images/I/51HTieS6nkL.jpg"
  },
  {
    title: "Pilgrim's Progress",
    author: "John Bunyan",
    price: 10.99,
    year: 2018,
    availability: true,
    copies: 2,
    imageUrl: "https://m.media-amazon.com/images/P/0991277619.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    title: "Robinson Crusoe",
    author: "Daniel Defoe",
    price: 7,
    year: 2018,
    availability: false,
    copies: 0,
    imageUrl: "https://d1b14unh5d6w7g.cloudfront.net/0486404277.01.S001.LXXXXXXX.jpg?Expires=1687029809&Signature=bJ8jXZmQCC03tuypIUb3BGuriG-XVDoQgxoMgoYJCXkHha6DVdna4yzD0o55GGAU9DVmTrpIaq1vrRQWwHDpNMeBHfRZBvpKyxQDZNVydu-5by6YtNGNcKC-K-BiJT0~I1q0ajuSVe3AvmzE8-Lu7EXB1ZPLVlwDwERgyXLJumM_&Key-Pair-Id=APKAIUO27P366FGALUMQ"
  },
  {
    title: "Nightmare Abbey",
    author: "Thomas Love Peacock",
    price: 5,
    year: 2000,
    availability: true,
    copies: 20,
    imageUrl: "https://m.media-amazon.com/images/P/B01LXZVVDZ.01._SCLZZZZZZZ_SX500_.jpg"
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    price: 15,
    year: 1990,
    availability: true,
    copies: 7,
    imageUrl: "https://m.media-amazon.com/images/I/61pLRWYTbXL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "PHP and MySQL",
    author: "Larry E. Ullman",
    price: 15,
    year: 2018,
    availability: false,
    copies: 0,
    imageUrl: "https://m.media-amazon.com/images/I/41mqRxuZWPL._SX362_BO1,204,203,200_.jpg"
  },
  {
    title: "The Girl in Room 105",
    author: "Chetan Bhagat ",
    price: 198,
    year: 2013,
    availability: true,
    copies: 0,
    imageUrl: "https://m.media-amazon.com/images/I/51J+KYDiEYL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Believe in Yourself",
    author: "Dr Joseph Murphy",
    price: 100,
    year: 2014,
    availability: true,
    copies: 10,
    imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432297052l/25581383.jpg"
  },
  {
    title: "Touch of Eternity",
    author: "Durjoy, Datta",
    price: 15,
    year: 2021,
    availability: false,
    copies: 0,
    imageUrl: "https://m.media-amazon.com/images/P/B079ZZ721X.01._SCLZZZZZZZ_SX500_.jpg"
  },
];


    let currentUser = null;
    let cartItems = [];

    function showSignup() {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("signupPage").style.display = "block";
    }

    function showLogin() {
      document.getElementById("signupPage").style.display = "none";
      document.getElementById("loginPage").style.display = "block";
    }

    let users = [];

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username.trim() === "") {
    alert("Please enter a valid username.");
    return;
  }

  // Check if the username and password match any user in the users array
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    currentUser = user.username;
    showHomePage();
  } else {
    alert("Invalid username or password. Please try again.");
    document.getElementById("username").value = ""; // Clear the username field
    document.getElementById("password").value = ""; // Clear the password field
  }
}

function signup() {
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  if (newUsername.trim() === "" || newPassword.trim() === "") {
    alert("Please enter a valid username and password.");
    return;
  }

  if (
    newPassword.length < 7 ||
    !uppercaseRegex.test(newPassword) ||
    !lowercaseRegex.test(newPassword) ||
    !specialCharRegex.test(newPassword)
  ) {
    alert(
      "Password must be at least 7 characters long, contain at least one uppercase letter, one lowercase letter, and one special character."
    );
    return;
  }

  // Check if the username is already taken
  const usernameTaken = users.some((user) => user.username === newUsername);
  if (usernameTaken) {
    alert("Username already taken. Please choose a different username.");
    return;
  }

  // Create a new user object
  const newUser = { username: newUsername, password: newPassword };

  // Add the new user to the users array
  users.push(newUser);

  // Clear the input fields
  document.getElementById("newUsername").value = "";
  document.getElementById("newPassword").value = "";

  // Go back to the login page
  showLogin();
}



    function showHomePage() {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("signupPage").style.display = "none";
      document.getElementById("homePage").style.display = "block";
      displayBooks();
    }

    

    function addToCart(index) {
      const book = books[index];
      if (book.availability && book.copies > 0) {
        cartItems.push(book);
        book.copies--;
        if (book.copies === 0) {
          book.availability = false; // Update availability to false
        }
        updateCart();
        updateAvailabilityAndCopies(index);
      } else {
        alert("This book is currently out of stock.");
      }
    }
    
    
    function updateAvailabilityAndCopies(index) {
      const book = books[index];
      const bookListItems = document.getElementById("bookList").querySelectorAll(".book-box");
    
      for (let i = 0; i < bookListItems.length; i++) {
        const item = bookListItems[i];
        const titleElement = item.querySelector("span");
        if (titleElement.innerText === "Title: " + book.title) {
          const availabilityElement = item.querySelector(".availability");
          const copiesElement = item.querySelector(".copies");
          availabilityElement.innerText = book.availability ? "Availability: In Stock" : "Availability: Out of Stock";
          copiesElement.innerText = "Copies: " + book.copies;
          break;
        }
      }
    }
    

    function removeFromCart(index) {
        const removedBook = cartItems.splice(index, 1)[0];
        const bookIndex = books.findIndex(book => book.title === removedBook.title);
        if (bookIndex !== -1) {
          books[bookIndex].copies++;
          books[bookIndex].availability = true;
        }
        updateCart();
        updateAvailabilityAndCopies(bookIndex);
      }
      
      function updateCart() {
        const cartList = document.getElementById("cartList");
        const cartTotal = document.getElementById("cartTotal");
        cartList.innerHTML = "";
      
        let total = 0;
      
        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
          const li = document.createElement("li");
          li.innerText = `${item.title} - $${item.price}`;
          li.style.color = "white";
          li.style.fontSize = "20px";
      
          const removeButton = document.createElement("button");
          removeButton.innerText = "Remove";
          removeButton.style.fontSize = "20px";
          removeButton.addEventListener("click", () => removeFromCart(i));
          li.appendChild(removeButton);
      
          cartList.appendChild(li);
          total += item.price;
        }
      
        cartTotal.innerText = `Total: $${total}`;
        cartTotal.style.color = "red";
        cartTotal.style.fontSize = "30px";
      }
      
      
    

    
    document.getElementById("searchInput").addEventListener("input", function () {
      const searchText = this.value.toLowerCase();
      const filteredBooks = books.filter(function (book) {
        return (
          book.title.toLowerCase().includes(searchText) ||
          book.author.toLowerCase().includes(searchText) ||
          book.year.toString().includes(searchText)
        );
      });

      displayFilteredBooks(filteredBooks);
    });

    document.getElementById("sortSelect").addEventListener("change", function () {
      const sortValue = this.value;
      let sortedBooks = [...books];

      switch (sortValue) {
        case "title":
          sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "author":
          sortedBooks.sort((a, b) => a.author.localeCompare(b.author));
          break;
        case "year":
          sortedBooks.sort((a, b) => a.year - b.year);
          break;
      }

      displayFilteredBooks(sortedBooks);
    });

    function displayBooks() {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";
    
      for (let i = 0; i < books.length; i++) {
        const book = books[i];
        const div = document.createElement("div");
        div.classList.add("book-box");
        const lineBreak10 = document.createElement("br");
        div.appendChild(lineBreak10);
        const lineBreak20 = document.createElement("br");
        div.appendChild(lineBreak20);
        // Add a border around each book and center align the contents
        
        const image = document.createElement("img");
        image.src = book.imageUrl;
        image.alt = book.title;
    
        // Decrease the size of the image and align it to the center
        image.style.maxWidth = "200px"; // Adjust the maximum width of the image as per your requirements
    
        div.appendChild(image);
        const lineBreak = document.createElement("br");
        div.appendChild(lineBreak);
        const title = document.createElement("span");
        title.innerText = "Title : " + book.title;
        title.style.fontSize = "21px"; // Adjust the font size as per your requirements
        title.style.color = "white"; // Set the font color to white
        title.style.paddingLeft = "10px";
        div.appendChild(title);
        const lineBreak1 = document.createElement("br");
        div.appendChild(lineBreak1);
        const lineBreak11 = document.createElement("br");
        div.appendChild(lineBreak11);
        const author = document.createElement("span");
        author.innerText = "Author : " + book.author;
        author.style.fontSize = "21px"; // Adjust the font size as per your requirements
        author.style.color = "white"; // Set the font color to white
        author.style.paddingLeft = "10px";
        div.appendChild(author);
        const lineBreak2 = document.createElement("br");
        div.appendChild(lineBreak2);
        const lineBreak12 = document.createElement("br");
        div.appendChild(lineBreak12);
        const year = document.createElement("span");
        year.innerText = "year : " + book.year;
        year.style.fontSize = "21px"; // Adjust the font size as per your requirements
        year.style.color = "white"; // Set the font color to white
        year.style.paddingLeft = "10px";
        div.appendChild(year);
        const lineBreak222= document.createElement("br");
        div.appendChild(lineBreak222);
        const lineBreak121 = document.createElement("br");
        div.appendChild(lineBreak121);
        const price = document.createElement("span");
        price.innerText = "Price : " + "$" + book.price;
        price.style.fontSize = "21px"; // Adjust the font size as per your requirements
        price.style.color = "white"; // Set the font color to white
        price.style.paddingLeft = "10px";
        div.appendChild(price);
        const lineBreak3 = document.createElement("br");
        div.appendChild(lineBreak3);
        const lineBreak13 = document.createElement("br");
        div.appendChild(lineBreak13);
        const availability = document.createElement("span");
        availability.innerText = book.availability ? "Availability : " + "In Stock" : "Availability : "+"Out of Stock";
        availability.style.fontSize = "21px"; // Adjust the font size as per your requirements
        availability.style.color = "white"; // Set the font color to white
        div.appendChild(availability);
        const lineBreak4 = document.createElement("br");
        div.appendChild(lineBreak4);
        const lineBreak14 = document.createElement("br");
        div.appendChild(lineBreak14);
        const copies = document.createElement("span");
        copies.innerText = "Copies: " + book.copies;
        copies.style.fontSize = "21px"; // Adjust the font size as per your requirements
        copies.style.color = "white"; // Set the font color to white
        div.appendChild(copies);
        const lineBreak5 = document.createElement("br");
        div.appendChild(lineBreak5);
        const lineBreak15 = document.createElement("br");
        div.appendChild(lineBreak15);
        const addButton = document.createElement("button");
        addButton.innerText = "Add to Cart";
        addButton.style.fontSize="18px";
        addButton.disabled = !book.availability || book.copies === 0;
        addButton.addEventListener("click", () => addToCart(i));
        div.appendChild(addButton);
    
        bookList.appendChild(div);
      }
    
      updateBookCount();
    }
    
    
    function displayFilteredBooks(filteredBooks) {
      const bookList = document.getElementById("bookList");
      bookList.innerHTML = "";
    
      for (let i = 0; i < filteredBooks.length; i++) {
        const book = filteredBooks[i];
        const div = document.createElement("div");
        div.classList.add("book-box");
    
        // Add a border around each book
        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.marginBottom = "10px";
    
        const lineBreak10 = document.createElement("br");
        div.appendChild(lineBreak10);
        const lineBreak20 = document.createElement("br");
        div.appendChild(lineBreak20);
    
        const image = document.createElement("img");
        image.src = book.imageUrl;
        image.alt = book.title;
        image.style.maxWidth = "200px"; // Adjust the maximum width of the image as per your requirements
        div.appendChild(image);
    
        const lineBreak = document.createElement("br");
        div.appendChild(lineBreak);
       
        const title = document.createElement("span");
        title.innerText = "Title : "+book.title;
        title.style.fontSize = "21px"; // Adjust the font size as per your requirements
        title.style.color = "white"; // Set the font color to white
        title.style.paddingLeft = "10px";
        div.appendChild(title);
        
        const lineBreak21 = document.createElement("br");
        div.appendChild(lineBreak21);
        const lineBreak1211 = document.createElement("br");
        div.appendChild(lineBreak1211);

        const author = document.createElement("span");
        author.innerText = "Author : " + book.author;
        author.style.fontSize = "21px"; // Adjust the font size as per your requirements
        author.style.color = "white"; // Set the font color to white
        author.style.paddingLeft = "10px";
        div.appendChild(author);
    
        const lineBreak2 = document.createElement("br");
        div.appendChild(lineBreak2);
        const lineBreak12 = document.createElement("br");
        div.appendChild(lineBreak12);

        const year = document.createElement("span");
        year.innerText = "year : " + book.year;
        year.style.fontSize = "21px"; // Adjust the font size as per your requirements
        year.style.color = "white"; // Set the font color to white
        year.style.paddingLeft = "10px";
        div.appendChild(year);
    
        const lineBreak221 = document.createElement("br");
        div.appendChild(lineBreak221);
        const lineBreak121 = document.createElement("br");
        div.appendChild(lineBreak121);
    
        const price = document.createElement("span");
        price.innerText = "Price : "+"$" + book.price;
        price.style.fontSize = "21px"; // Adjust the font size as per your requirements
        price.style.color = "white"; // Set the font color to white
        price.style.paddingLeft = "10px";
        div.appendChild(price);
    
        const lineBreak3 = document.createElement("br");
        div.appendChild(lineBreak3);
        const lineBreak13 = document.createElement("br");
        div.appendChild(lineBreak13);
    
        const availability = document.createElement("span");
        availability.innerText = book.availability ?"Availability : "+ "In Stock" : "Availability : "+"Out of Stock";
        availability.style.fontSize = "21px"; // Adjust the font size as per your requirements
        availability.style.color = "white"; // Set the font color to white
        div.appendChild(availability);
    
        const lineBreak4 = document.createElement("br");
        div.appendChild(lineBreak4);
        const lineBreak14 = document.createElement("br");
        div.appendChild(lineBreak14);
        const copies = document.createElement("span");
        copies.innerText = "Copies: " + book.copies;
        copies.style.fontSize = "21px"; // Adjust the font size as per your requirements
        copies.style.color = "white"; // Set the font color to white
        div.appendChild(copies);
        const lineBreak5 = document.createElement("br");
        div.appendChild(lineBreak5);
        const lineBreak15 = document.createElement("br");
        div.appendChild(lineBreak15);
        const addButton = document.createElement("button");
        addButton.innerText = "Add to Cart";
        addButton.style.fontSize="18px";
        addButton.disabled = !book.availability || book.copies === 0;
        addButton.addEventListener("click", () => addToCart(books.indexOf(book)));
        div.appendChild(addButton);
    
        bookList.appendChild(div);
      }
    
      updateBookCount();
    }
    
    
    

    function updateBookCount() {
      const bookCount = document.getElementById("bookCount");
      const filteredBooks = document.getElementById("bookList").getElementsByTagName("li");
      bookCount.innerText = `Books: ${filteredBooks.length}`;

      
    }
    function checkout() {
      if (cartItems.length === 0) {
        alert("Your cart is empty. Please add books to your cart before checking out.");
        return;
      }
    
      // Perform the checkout process
      // ...
    
      // Clear the cart and update the UI
      cartItems = [];
      updateCart();
    
      alert("Thank you for your purchase! Your order has been placed.");
    }
    

    // Initialize the page
    showLogin();

