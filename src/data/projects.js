const files = [
    {
        category:'Python',
        route: "/projects/python",
        card_image: "/assets/images/python.png",
        projects:[
        {
            title: " Zillow Data Automation and Form Submission with Selenium",
            description: "A Python-based web scraper that extracts property data (price, address, and link) from a Zillow clone using BeautifulSoup and Selenium. The extracted data is automatically submitted to a Google Form using Selenium’s browser automation, demonstrating automated data extraction, form filling, and browser interaction.",
            link: "https://github.com/arian-gif/data-automation",
            image:"/assets/images/python/data-automation.png",
        },
        {
            title: "Top 10 Movies List",
            description: "A Flask-based movie management app that allows users to add, update, delete, and display movie records using a PostgreSQL database. It features form validation with Flask-WTF, responsive design with Flask-Bootstrap, and secure configuration using environment variables. The app includes functionality for ranking, reviewing, and storing movie details like titles, ratings, and images.",
            link: "https://github.com/arian-gif/top-10-movies",
            image:"/assets/images/web-dev/top10movies.png",
        },
        { 
            title: "Cafe Finder App with Flask",
            description: "This Flask-based web app lets users submit and browse café recommendations, storing data in a CSV file. It features Flask-WTF for form validation, Flask-Bootstrap for styling, and environment variables for security. This project showcases Python’s efficiency in web development, data handling, and seamless user interactions.",
            link: "https://github.com/arian-gif/cafe-page",
            image:"/assets/images/web-dev/cafe.png",
        },
        {
            title: "Pong Game with OOP",
            description: " A Python-based Pong game developed using object-oriented principles with custom Paddle, Ball, and Scoreboard classes. The game leverages the turtle module for graphical rendering and dynamic screen updates, while incorporating precise event handling for paddle movement and collision detection. The scoring system and game logic are managed through modular class-based architecture, showcasing structured and efficient Python programming.",
            link: "https://github.com/arian-gif/pong",
            image:"/assets/images/python/pong.png",
        },
        { 
            title: "Snake Game with OOP",
            description: "This classic Snake game is built entirely with Python, utilizing the Turtle module for graphics and animation. It follows an object-oriented approach, with separate classes managing the snake's movement, food generation, and scoring system. The game logic includes event-driven key controls, real-time updates, and collision detection for both the walls and the snake itself. This project showcases Python’s strengths in game development, object-oriented programming, and event handling.",
            link: "https://github.com/arian-gif/snake-game",
            image:"/assets/images/python/snake-game.png",
        },
        
        { 
            title: "Python GUI Quiz Game",
            description: "This Python-based quiz game presents users with true or false questions in an interactive format, leveraging OOP and Tkinter for a smooth experience. The Question class structures data, while QuizBrain manages game logic, scoring, and HTML-decoded questions. The Interface class handles the GUI, dynamically updating the canvas and providing real-time feedback with color changes. This project showcases my ability to build engaging applications using Python, demonstrating strengths in GUI development, event handling, and data processing.",
            link: "https://github.com/arian-gif/fun-quiz",
            image:"/assets/images/python/quiz.png",
        },
        ],
    },
    {
        category:'Database',
        route: "/projects/database",
        card_image: "/assets/images/database.png",
        projects:[
            {
                title: " Data Cleaning of a Dataset Using SQL",
                description: " Developed a SQL-based data cleaning project to optimize a layoffs dataset. Created a staging table to preserve raw data, removed duplicates using their row numbers and CTEs, and handled null values by aligning data across company branches. Fixed formatting by trimming whitespace, correcting industry labels, and converting dates to a consistent format. Streamlined the dataset by dropping unnecessary columns and rows, improving accuracy and making the data more reliable for analysis.",
                link: "https://github.com/arian-gif/SQL-Data-Cleaning",
                image:"/assets/images/database/data.png",
            },
            {
                title: 'Fantasy Basketball Draft with PostgreSQL',
                description: "This project is a fantasy basketball draft web app built with Node.js, Express, and PostgreSQL. It integrates Google authentication using Passport.js and handles user registration, login, and session management. PostgreSQL is used to store and manage user data, player information, and draft status. The app allows users to join a draft lobby, randomly assigns draft turns, and updates player availability in real time. Data from an external API is processed and stored in the database to populate player information. The project demonstrates secure authentication with bcrypt, efficient database queries using PostgreSQL, and dynamic updates using Express routes.",
                link: "https://github.com/arian-gif/fantasy-league",
                image:"/assets/images/database/dataguess.png",
            },
            {
                title: "Movie Database with Flask and PostgreSQL",
                description: "This Flask project manages a movie database using PostgreSQL and implements full CRUD (Create, Read, Update, Delete) functionality. Users can add, view, update, and delete movie records through a Flask web interface. The database stores details like movie titles, release years, ratings, rankings, reviews, and poster URLs. The project also displays the top 10 movies based on user-defined rankings, ensuring the list remains accurate and updated with every modification. Flask forms handle user input and validation, and psycopg2 manages secure and efficient database transactions.",
                link: "https://github.com/arian-gif/top-10-movies",
                image:"/assets/images/web-dev/top10movies.png",
            },

        ],
    },
    {
        category:'Engineering & Research',
        route: "/projects/engineering",
        card_image: "/assets/images/engineering.png",
        projects:[
               {
                    title: "EV3 Delivery Robot",
                    What:[
                        "Developed a smart delivery system capable of autonomous navigation and object handling using EV3 LEGO Mindstorms with 95% accuracy.",
                        "Engineered a reliable solution for automated delivery in various environments, enhancing convenience and efficiency."
                    ],
                    whatImage:"/assets/images/robot_draw.jpg",
                    How:[
                        "Programmed the robot using RobotC to handle autonomous navigation and real-time path adjustments based on sensor feedback.",
                        "Designed and implemented the sensor placement and motorized claw mechanism to optimize object detection and handling efficiency."
                    ],
                    howImage:"/assets/images/robot.jpg",
                    Result:"Achieved 95% delivery accuracy by combining precise sensor feedback, real-time path adjustments, and efficient object handling, ensuring reliable performance in various environments.",
                    resultVid:"https://www.youtube.com/embed/nHGaTSK0epw",
                    codeLink:"https://github.com/arian-gif/Robot-"
                },
                {
                    title: "Impact Reducing Bumper System",
                    What:[
                        "Designed and implemented a bumper system to reduce the impact of a collision by 50% while enhancing energy dissipation and structural integrity.",
                        "Developed a cost-effective solution using popsicle sticks and rubber bands to minimize object deformation and improve impact absorption in low-speed accidents."
                    ],
                    whatImage:"/assets/images/bumper-draw.jpeg",
                    How:[
                        "Applied engineering skills and GD&T principles to design and optimize the bumper system for maximum energy dissipation and structural integrity.",
                        "Developed a MATLAB simulation to calculate acceleration and velocity during multiple rebounds, analyzing real-time performance data to refine the bumper design."
                    ],
                    howImage:"/assets/images/bumper-product.jpg",
                    Result:"Achieved a 50% reduction in collision impact by optimizing the bumper system design for energy dissipation and structural integrity, enhancing safety and minimizing vehicle damage in low-speed accidents.",
                    resultVid:"https://www.youtube.com/embed/E1mUeeNmWD0",
                    codeLink:"https://github.com/arian-gif/bumper-code",
                },
        ],
    },
    {
        category:'Web Development',
        route: "/projects/web-development",
        card_image: "/assets/images/webDev.png",
        projects:[
            {
                title: 'Fantasy Basketball Draft App with Node.js',
                description: `This full-stack web app allows users to create and manage fantasy basketball drafts with real-time updates using Node.js, Express.js, PostgreSQL, and EJS. It includes secure user authentication with bcrypt and Google OAuth, dynamic player drafting with state management, and an interactive user interface. The app showcases strong backend integration, efficient data handling, and a seamless user experience.`,
                link: "https://github.com/arian-gif/fantasy-league",
                image:"/assets/images/web-dev/fantasy-draft.png",
            },
            {
                title: 'Anime guessing Game with Node',
                description: `Anime Guesser is a dynamic Node.js web app that challenges users to identify anime titles from images fetched via the Jikan API. Built with Express.js, EJS, and vanilla HTML, it features real-time scoring, dynamic API integration, and a responsive UI. The app demonstrates strong backend and frontend skills, including efficient state management and seamless user interaction.`,
                link: "https://github.com/arian-gif/anime-guessing-game",
                image:"/assets/images/web-dev/guess.png",
            },
            {
                title: "Top 10 Movies List",
                description: "A Flask-based movie management app that allows users to add, update, delete, and display movie records using a PostgreSQL database. It features form validation with Flask-WTF, responsive design with Flask-Bootstrap, and secure configuration using environment variables. The app includes functionality for ranking, reviewing, and storing movie details like titles, ratings, and images.",
                link: "https://github.com/arian-gif/top-10-movies",
                image:"/assets/images/web-dev/top10movies.png",
            },
            { 
                title: "Cafe Finder App with Flask",
                description: "A Flask-based cafe finder app that allows users to add and display cafes using a CSV file for data storage. It features a form built with Flask-WTF for adding cafe details like name, location, opening and closing times, coffee rating, WiFi strength, and power socket availability. The app uses Flask-Bootstrap for styling and flask for routing to different pages",
                link: "https://github.com/arian-gif/cafe-page",
                image:"/assets/images/web-dev/cafe.png",
            },
            { 
                title: "To do List App with JavaScript",
                description: "This task management app simplifies to-do lists by categorizing tasks based on their due dates. Built with JavaScript and Bootstrap, it dynamically adds tasks to Today, Tomorrow, Upcoming, or Overdue sections. Users input tasks, select a due date validated in YYYY-MM-DD format, and the app organizes them accordingly. Each task is displayed with a checkbox, allowing users to mark them as complete, which removes them from the list.",
                link: "https://github.com/arian-gif/to-do-list",
                image:"/assets/images/web-dev/todo.png",
            },
        ],
    },
    {
        category:"Java",
        route: "/projects/java",
        card_image: "/assets/images/java.png",
        projects:[
            {
                title: 'Spot It! Dynamic Card Matching Game',
                description: `Spot It! is a dynamic Java-based recreation of the classic card game, designed with functional programming to ensure modularity and efficiency. It offers five engaging modes—Infinite, Timed, Speed, Multiplayer, and Practice—each challenging players’ pattern recognition and reflexes. The game’s replay feature encourages players to refine their strategies and improve their scores, while the multiplayer mode adds a competitive edge for head-to-head battles.`,
                link: "https://github.com/arian-gif/Spot-it",
                image:"/assets/images/java/spoit-it.png",
            },
            { 
                title: "Online Banking System with Financial Management",
                description: "This Java-based Online Banking System delivers a seamless financial management experience. It allows users to create accounts, log in, and perform essential transactions like deposits, withdrawals, and e-transfers. Supporting both chequing and savings accounts, it enables inter-account transfers, bill payments, and automated interest calculations. Comprehensive transaction history tracking ensures precise and reliable financial oversight.",
                link: "https://github.com/arian-gif/online-bank",
                image:"/assets/images/java/online-bank.png",
            },
            { 
                title: "Connect Four with OOP and Java-based Logic",
                description: "This Connect Four project is a Java-based recreation of the classic game, showcasing object-oriented programming (OOP) and function-based logic. It features dynamic player turns, input validation, and comprehensive win-checking for horizontal, vertical, and diagonal victories. The structured grid system and efficient game state management ensure a competitive and seamless gaming experience.",
                link: "https://github.com/arian-gif/Connect4",
                image: "/assets/images/java/connect4.png",
            },
            { 
                title: "Electronic Voting Simulation with Data-Driven Analytics",
                description: "This Java-based Electronic Voting System simulates real-world elections using object-oriented programming (OOP) and data processing. It reads voting data from CSV files, calculates vote distribution, and generates detailed results, including party percentages and invalid ballots. The modular design, with Voting for data handling and Simulation for outcome generation, ensures accuracy and efficient result tracking.",
                link: "https://github.com/arian-gif/electronic-voting",
                image:"/assets/images/java/electronic-voting.png",
            },
            
        ],
    },
]

export default files;