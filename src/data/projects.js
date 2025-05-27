const files = [
    {
        category:'Python',
        route: "/projects/python",
        card_image: "/assets/images/python.png",
        projects:[
    {
            title: "Chatbot with Gemini API",
            description: "I developed a fully functional AI chatbot using Google's Gemini 2.0 Flash model integrated with a Flask backend. The app features a clean, responsive front-end built with HTML, CSS, and JavaScript, allowing users to chat with an AI assistant in real-time. Used Flask routes to manage the front-end and back-end communication.",
            link: "https://github.com/arian-gif/arian-chat",
            image:"/assets/images/deep-learning/gemini.png",       
        },     
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
            title: "Snake Game with OOP",
            description: "This classic Snake game is built entirely with Python, utilizing the Turtle module for graphics and animation. It follows an object-oriented approach, with separate classes managing the snake's movement, food generation, and scoring system. The game logic includes event-driven key controls, real-time updates, and collision detection for both the walls and the snake itself. This project showcases Python’s strengths in game development, object-oriented programming, and event handling.",
            link: "https://github.com/arian-gif/snake-game",
            image:"/assets/images/python/snake-game.png",
        },
        
        ],
    },
    {
        category:"Machine Learning",
        route: "/projects/machine-learning",
        card_image: "/assets/images/machine-learning.png",
        projects:[
            {
                title: "House Price Regression Model",
                description: "I developed a regression-based machine learning project to predict house prices using a Kaggle housing dataset containing both numerical and categorical features. This involved preprocessing steps such as encoding categorical variables, scaling features for models like Support Vector Regression, and splitting the data into training and test sets. Using scikit-learn, I implemented multiple regression models including Multiple Linear Regression, Polynomial Regression, Decision Tree, Random Forest, and SVR and evaluated their performance using R² scores. ",
                link: "https://github.com/arian-gif/Housing-Project",
                image:"/assets/images/machine-learning/House.jpg",       
            },
            {
                title: "Irish Species Clustering Model",
                description: "In this project, I applied clustering techniques such as K-Means and Hierarchical Clustering to analyze and group Irish species based on their features using a dataset from Kaggle. The goal was to discover natural patterns and meaningful clusters without labeled data. I implemented K-Means clustering, using methods like the Elbow Method to determine the optimal number of clusters, and Hierarchical Clustering, which builds a dendrogram to visualize nested groupings without predefining cluster counts.",
                link: "https://github.com/arian-gif/Irish-species-clustering",
                image:"/assets/images/machine-learning/irish.jpg",       
            },
            {
                title: "Spam Classifier Model",
                description: "I built an email spam classifier using natural language processing and machine learning techniques. The project involved cleaning and preprocessing raw email text data by removing non-alphabetic characters, converting to lowercase, stemming, and removing stopwords while preserving negations. I then created a Bag of Words representation to convert text into numerical features. Using scikit-learn, I encoded labels, split the dataset into training and test sets, and trained a Logistic Regression model to classify emails as spam or not. This classifier achieved a 97% accuracy.",
                link: "https://github.com/arian-gif/Spam-classifier",
                image:"/assets/images/machine-learning/spam.jpg",       
            },
             {
                title: "Social Network Ads Classification Model",
                description: "In this project, I developed multiple machine learning models to classify whether users from a social network would purchase a product based on their age and estimated salary. Using a Kaggle dataset, I applied data preprocessing steps including feature scaling and a training-test split. I implemented and compared several classifiers using scikit-learn, including Logistic Regression, Naive Bayes, SVM, Kernel SVM, Decision Tree, Random Forest, and K-Nearest Neighbors. Kernel SVM and KNN achieved the highest accuracy of 93%, demonstrating strong classification performance.",
                link: "https://github.com/arian-gif/Social-network-classication",
                image:"/assets/images/machine-learning/ad.jpg",       
            },
        ]

    },
    {
        category:"Deep Learning",
        route: "/projects/deep-learning",
        card_image: "/assets/images/deep-learning.png",
        projects:[
            {
                title: "Mango or Not",
                description: "I developed a convolutional neural network (CNN) using TensorFlow to classify images as mango or not mango, demonstrating the entire workflow from data collection and augmentation to model training and used live picture from webcam. I used Docker to create a consistent environment ensuring Python compatibility with TensorFlow, and sourced image data efficiently through the icrawler library for diverse and relevant training samples.",
                link: "https://github.com/arian-gif/Mango-CNN",
                image:"/assets/images/deep-learning/mango.jpg", 
            },
            {
                title: "Chatbot with Gemini API",
                description: "I developed a fully functional AI chatbot using Google's Gemini 2.0 Flash model integrated with a Flask backend. The app features a clean, responsive front-end built with HTML, CSS, and JavaScript, allowing users to chat with an AI assistant in real-time. I handled environment variable management with dotenv, structured the conversation history to maintain a smooth user experience, and used Flask routes to manage the front-end and back-end communication via JSON. The project demonstrates my ability to integrate advanced AI models into web applications and build interactive UIs.",
                link: "https://github.com/arian-gif/arian-chat",
                image:"/assets/images/deep-learning/gemini.png",       
            },
            {
                title: "ANN for Heart Disease Prediction",
                description: "I developed an Artificial Neural Network (ANN) using TensorFlow to predict heart disease based on patient data. The project involved comprehensive data preprocessing, including handling missing values, encoding categorical variables, and feature scaling. I designed a sequential ANN with two hidden layers using ReLU activation and a sigmoid output layer for binary classification. The model was trained on a cleaned dataset using the Adam optimizer and evaluated with a confusion matrix and accuracy score, showcasing effective prediction performance. This project highlights my skills in data cleaning, model building, and applying deep learning to healthcare analytics.",
                link: "https://github.com/arian-gif/Heart-Disease",
                image:"/assets/images/deep-learning/heart.jpg",       
            },
        ]
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