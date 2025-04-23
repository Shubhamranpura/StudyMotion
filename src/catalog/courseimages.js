import Reactbasic from "../../public/Courseimage/reactbasic.jpg";
import Javascriptimage from "../../public/Courseimage/Javascriptimage.jpg";
import AdvanceReact from "../../public/Courseimage/AdvanceReact.jpg";
import Nodejs from "../../public/Courseimage/Nodejs.jpg";
import Htmlcss from "../../public/Courseimage/Htmlcss.jpg";
import Nextjs from "../../public/Courseimage/Nextjs.jpg";
import Dlcourse from "../../public/Courseimage/Dlcourse.jpg";
import NLPimage from "../../public/Courseimage/Nlpimage.jpg";
import Tensorflow from "../../public/Courseimage/Tanserflow.jpg";
import Mlimage from "../../public/Courseimage/Mlimage.jpg";

const courseData = {
  "Web Development": [
  { 
    "id": 1, 
    "title": "React Basics", 
    "description": "Learn the basics of React.", 
    "fulldescription": "React is a powerful JavaScript library used for building user interfaces. In this course, you will learn about JSX, components, props, state management, and handling events. By the end, you will be able to build interactive web applications with React.", 
    "Cardimg": Reactbasic, 
    "instructor": "Code with Harry", 
    "rating": 3.5, 
    "price": 299, 
    "lessons": 25, 
    "totalHours": 12 
  },
  { 
    "id": 2, 
    "title": "Advanced React", 
    "description": "Dive deeper into React concepts.", 
    "fulldescription": "Take your React skills to the next level with advanced concepts like React Hooks, Context API, Redux, and performance optimization techniques. This course is designed for developers who already have basic React knowledge and want to build dynamic and efficient applications.", 
    "Cardimg": AdvanceReact, 
    "instructor": "Akshay Saini", 
    "rating": 4.8, 
    "price": 499, 
    "lessons": 30, 
    "totalHours": 15 
  },
  { 
    "id": 3, 
    "title": "JavaScript Mastery", 
    "description": "Master JavaScript for web development.", 
    "fulldescription": "This course will help you master JavaScript from the ground up. You will learn about ES6+ features, closures, promises, asynchronous JavaScript, event delegation, and object-oriented programming. You will also build real-world projects to solidify your knowledge.", 
    "Cardimg": Javascriptimage, 
    "instructor": "Pro Coder", 
    "rating": 4, 
    "price": 299, 
    "lessons": 20, 
    "totalHours": 10 
  },
  { 
    "id": 4, 
    "title": "Node.js", 
    "description": "Dive into Node.js for backend development.", 
    "fulldescription": "Node.js is a runtime environment that lets you execute JavaScript on the server side. This course covers modules, file systems, event-driven architecture, Express.js, middleware, databases, and API development. By the end, you will be able to create scalable backend applications.", 
    "Cardimg": Nodejs, 
    "instructor": "Code With Harry", 
    "rating": 4.2, 
    "price": 1299, 
    "lessons": 18, 
    "totalHours": 9 
  },
  { 
    "id": 5, 
    "title": "HTML and CSS", 
    "description": "Master HTML and CSS for frontend design.", 
    "fulldescription": "HTML and CSS form the backbone of the web. This course covers HTML structure, CSS styling, flexbox, grid, animations, and responsive design principles. By the end, you will be able to build visually appealing and well-structured web pages.", 
    "Cardimg": Htmlcss, 
    "instructor": "Pro Coder", 
    "rating": 4.5, 
    "price": 199, 
    "lessons": 15, 
    "totalHours": 8 
  },
  { 
    "id": 6, 
    "title": "Next.js", 
    "description": "Master Next.js for modern web apps.", 
    "fulldescription": "Next.js is a React framework that enables server-side rendering and static site generation. This course covers routing, data fetching, API integration, authentication, and deployment strategies. By the end, you will be able to build high-performance web applications with Next.js.", 
    "Cardimg": Nextjs, 
    "instructor": "Code with Harry", 
    "rating": 4.5, 
    "price": 799, 
    "lessons": 22, 
    "totalHours": 11 
  }
],


  "Machine Learning": [
  { 
    "id": 7, 
    "title": "Intro to ML", 
    "description": "Learn the basics of Machine Learning.", 
    "fulldescription": "This course introduces you to the fundamentals of Machine Learning, including supervised and unsupervised learning, regression, classification, and clustering techniques. You will also explore key ML algorithms and gain hands-on experience through real-world applications.", 
    "Cardimg": Mlimage, 
    "instructor": "Andrew Ng", 
    "rating": 4.7, 
    "price": 2999, 
    "lessons": 28, 
    "totalHours": 14 
  },
  { 
    "id": 8, 
    "title": "Deep Learning", 
    "description": "Understand the concepts of Deep Learning.", 
    "fulldescription": "This course dives deep into neural networks, backpropagation, and optimization techniques. You will learn about convolutional neural networks (CNNs), recurrent neural networks (RNNs), long short-term memory (LSTMs), and autoencoders. Hands-on projects will reinforce key deep learning concepts.", 
    "Cardimg": Dlcourse, 
    "instructor": "Yann LeCun", 
    "rating": 4.9, 
    "price": 3499, 
    "lessons": 35, 
    "totalHours": 18 
  },
  { 
    "id": 9, 
    "title": "NLP with Python", 
    "description": "Learn Natural Language Processing techniques.", 
    "fulldescription": "Natural Language Processing (NLP) is essential for building intelligent systems that understand human language. This course covers tokenization, stemming, lemmatization, named entity recognition, sentiment analysis, and deep learning techniques for NLP using Python libraries such as NLTK and spaCy.", 
    "Cardimg": NLPimage, 
    "instructor": "Sebastian Ruder", 
    "rating": 4.5, 
    "price": 3199, 
    "lessons": 24, 
    "totalHours": 12 
  },
  { 
    "id": 10, 
    "title": "TensorFlow & PyTorch", 
    "description": "Master TensorFlow & PyTorch for ML models.", 
    "fulldescription": "This course focuses on deep learning frameworks—TensorFlow and PyTorch. You will learn how to build and train neural networks, optimize models, and implement real-world ML applications using these powerful libraries. The course includes hands-on projects to solidify your understanding.", 
    "Cardimg": Tensorflow, 
    "instructor": "Francois Chollet", 
    "rating": 4.7, 
    "price": 3799, 
    "lessons": 30, 
    "totalHours": 15 
  }
],


  "Blockchain": [
  { 
    "id": 11, 
    "title": "Blockchain Basics", 
    "description": "Introduction to blockchain technology.", 
    "fulldescription": "This course provides a foundational understanding of blockchain technology, covering key concepts such as decentralized ledgers, cryptographic hashing, consensus mechanisms, and smart contracts. You will also learn about real-world applications in finance, supply chain, and more.", 
    "instructor": "Vitalik Buterin", 
    "rating": 4.6, 
    "price": 1999, 
    "lessons": 20, 
    "totalHours": 10 
  },
  { 
    "id": 12, 
    "title": "Ethereum & Smart Contracts", 
    "description": "Learn how to build smart contracts.", 
    "fulldescription": "This course covers the Ethereum blockchain and smart contract development using Solidity. You will explore Ethereum’s architecture, gas fees, and decentralized applications (DApps). Hands-on projects will help you create and deploy your own smart contracts on the Ethereum network.", 
    "instructor": "Gavin Wood", 
    "rating": 4.8, 
    "price": 2799, 
    "lessons": 25, 
    "totalHours": 12 
  },
  { 
    "id": 13, 
    "title": "Solidity for Beginners", 
    "description": "Master Solidity for DApps.", 
    "fulldescription": "This course is designed for those who want to learn Solidity programming from scratch. You will understand smart contract security, best practices, and how to write efficient, secure Solidity code for decentralized applications. Real-world examples and projects will reinforce your learning.", 
    "instructor": "Andreas Antonopoulos", 
    "rating": 4.7, 
    "price": 2499, 
    "lessons": 22, 
    "totalHours": 11 
  },
  { 
    "id": 14, 
    "title": "Decentralized Finance (DeFi)", 
    "description": "Deep dive into DeFi concepts.", 
    "fulldescription": "This course explores the rapidly evolving world of Decentralized Finance (DeFi). You will learn about DeFi protocols, liquidity pools, decentralized exchanges, yield farming, staking, and how blockchain is revolutionizing traditional financial systems.", 
    "instructor": "Robert Leshner", 
    "rating": 4.6, 
    "price": 2999, 
    "lessons": 28, 
    "totalHours": 14 
  }
],

  "Artificial Intelligence": [
  { 
    "id": 19, 
    "title": "AI for Everyone", 
    "description": "AI fundamentals for all.", 
    "fulldescription": "This beginner-friendly course provides an overview of Artificial Intelligence, its applications, and its impact on various industries. You will learn about machine learning, deep learning, and AI ethics. No programming experience is required, making it perfect for business leaders, policymakers, and enthusiasts.", 
    "instructor": "Andrew Ng", 
    "rating": 4.8, 
    "price": 1599, 
    "lessons": 18, 
    "totalHours": 9 
  },
  { 
    "id": 20, 
    "title": "Deep Reinforcement Learning", 
    "description": "Master reinforcement learning.", 
    "fulldescription": "This advanced course covers the principles of reinforcement learning, including Q-learning, policy gradients, and deep Q-networks (DQN). You will explore how AI agents make decisions, solve complex problems, and learn through rewards. Real-world applications include robotics, gaming, and automated trading.", 
    "instructor": "Richard Sutton", 
    "rating": 4.7, 
    "price": 3499, 
    "lessons": 32, 
    "totalHours": 16 
  },
  { 
    "id": 21, 
    "title": "GANs & Image Synthesis", 
    "description": "Learn Generative Adversarial Networks.", 
    "fulldescription": "This course dives deep into Generative Adversarial Networks (GANs), explaining how they work and how to train them for image synthesis. You will learn about neural network architectures, loss functions, and applications like deepfake generation, image enhancement, and AI-driven art creation.", 
    "instructor": "Ian Goodfellow", 
    "rating": 4.6, 
    "price": 3299, 
    "lessons": 30, 
    "totalHours": 15 
  },
  { 
    "id": 22, 
    "title": "AI Ethics", 
    "description": "Understand ethical concerns in AI.", 
    "fulldescription": "This course explores the ethical implications of Artificial Intelligence, including bias in machine learning models, privacy concerns, and the social impact of automation. You will learn about fairness, transparency, and responsible AI deployment in various industries.", 
    "instructor": "Kate Crawford", 
    "rating": 4.5, 
    "price": 1799, 
    "lessons": 15, 
    "totalHours": 7 
  },
  { 
    "id": 23, 
    "title": "Self-Driving Cars", 
    "description": "AI applications in autonomous vehicles.", 
    "fulldescription": "This course covers the AI technologies behind self-driving cars, including computer vision, sensor fusion, path planning, and reinforcement learning. You will work on projects related to lane detection, object recognition, and autonomous decision-making.", 
    "instructor": "Sebastian Thrun", 
    "rating": 4.8, 
    "price": 3899, 
    "lessons": 40, 
    "totalHours": 20 
  },
  { 
    "id": 24, 
    "title": "AI in Healthcare", 
    "description": "Explore AI innovations in medicine.", 
    "fulldescription": "This course explores how Artificial Intelligence is transforming healthcare, from predictive analytics and diagnostics to robotic surgery and personalized medicine. You will learn about AI-driven medical imaging, drug discovery, and patient data analysis.", 
    "instructor": "Eric Topol", 
    "rating": 4.7, 
    "price": 2999, 
    "lessons": 25, 
    "totalHours": 13 
  }
]

};



export default courseData;
