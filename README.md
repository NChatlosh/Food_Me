# Food_Me
This was a project I worked on in my capstone class at Columbia. I worked with a team of artists, designers, and developers to build this simple web app, optimized for both desktop and mobile. It allows users to choose from a variety of options to narrow down a search for a restaurant to eat at(or order delivery from). It includes options such as estabishment type, cuisine/cultural type, budget, location, and many others. The user also gets the option to add in a zip code or use current location to find restaurants nearby. At any point, the user can click the FoodMe button, even if he or she added no input, and be taken to the results tab, which will give the user a restaurant from a narrowed down list of restaurants. The results tab also includes the location, ratings, and links to the menu and website information of the restaurant, all provided by Zomato. All options selected by the user is sent in a HTTP GET request to the Zomato API with Javascript, where it is queried and a list of restaurants is returned in the form of JSON text. The app will then parse the JSON into restaurant objects and from there one is randomly selected. If the user does not like the results, he or she can simply click the FoodMe button again and get a different result.

Artists:
Han Xu

Desiginers/Copy/Content/Testing:
Saman Mirza
Colin Orr
Jamie Woods
Nick Bernstein
Maneet Mander
Noah Ribaudo
Jay Fox
Shivani Kumar
Alexis Marts
Drew Ferguson
Maura Molloy

Developers: 
Nick Chatlosh (HTML, CSS, Javascript)
Zach Daniel (HTML, CSS, Javascript)
Trevor Reeg (HTML, CSS, Javascript)
Colin Orr (HTML, CSS)
Alexis Marts (HTML, CSS)
Noah Ribaudo (HTML, CSS)
Nick Bernstein (HTML, Javascript)
