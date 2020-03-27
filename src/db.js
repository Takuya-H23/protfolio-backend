const testimonials = [
  {
    id: '1',
    name: 'Gail Thornton',
    company: 'Centre for Academic and Faculty Enrichment at Durham College',
    text:
      'Takuya is a pleasure to work with. He has enthusiastically taken on the project outlined, asks good questions, and finds resources to help problem solve issues. He is a very intelligent and motivated student in this field placement working well individually and with a team.'
  },
  {
    id: '2',
    name: 'Daniel Kulangiev',
    company: 'Nobul Corporation',
    text:
      'Takuya is one of the most dedicated and hard-working Web Developers that I have come across. He is always learning in his free time and always experimenting with new technologies released into the programming world (not just web development). I can always count on Takuya to get his tasks done on time and get through tough times.'
  }
]

const projects = [
  {
    id: '6',
    name: 'GITHUB FINDER',
    overview:
      'To search for github users and their public repositories. React Hooks are used for state management',
    objective:
      'To implement React Hooks such as useState, useEffect, useContext and useReducer. Consider when to use Redux or Hooks for state management. Practice how to keep information such as API keys safe.',
    tools: ['React', 'Github API'],

    liveAt: 'https://github-finder-23.netlify.com/',
    gitAt: 'https://github.com/Takuya-H23/github-finder',
    deployedAt: 'July 2019'
  },
  {
    id: '5',
    name: 'Q&A REST API',
    overview:
      'REST API for Q&A sites. Handles post/delete questions, answer questions, vote/edit answers.',
    objective:
      'Build REST API using Node.js, Express.js, MongoDB and Mongoose. Practice creating schema and Model, handling errors, and providing proper data and status code.',
    tools: ['Node', 'Express', 'Database', 'Mongoose'],

    gitAt: 'https://github.com/Takuya-H23/qa-rest',
    deployedAt: 'June 2019'
  },
  {
    id: '4',
    name: 'PORTFOLIO SITE',
    overview: 'Portfolio site using React. ',
    objective:
      'Build a react application that is maintainable and organized well. Practice using React Router and React Context API to improve state management skills. Use Sass to style efficiently, and Sketch to create comps.',
    tools: [
      'Sass',
      'JavaScript',
      'React',
      'Sketch',
      'Photoshop',
      'Illustrator'
    ],

    liveAt: 'http://takuyahirata.com',
    gitAt: 'https://github.com/Takuya-H23/my_portfolio',
    deployedAt: 'July 2019'
  },
  {
    id: '2',
    name: 'PREVIOUS PORTFOLIO SITE',
    overview: 'My first portfolio site when I was a student in College.',
    objective:
      'Create a responsive website that is compatible with any browsers. Write maintainable code by using modern JavaScript and Sass',
    tools: ['HTML', 'Sass', 'JavaScript', 'Photoshop', 'Illustrator'],

    liveAt: 'http://dev.takuyahirata.com',
    gitAt: 'https://github.com/Takuya-H23/portfolio',
    deployedAt: 'May 2019'
  },
  {
    id: '1',
    name: 'REAL TIME CHAT',
    overview: 'Real time chat application using Socket.io and Node.js.',
    objective:
      'My first application using Socket.io. Create Node.js application and practice basic Node.js and Express skills and deploy onto live server.',
    tools: ['HTML', 'CSS', 'JavaScript', 'Node', 'Express'],

    liveAt: 'https://chat-in-node.herokuapp.com/',
    gitAt: 'https://github.com/Takuya-H23/real-time-chat',
    deployedAt: 'January 2019'
  }
]

const user = {
  id: '1',
  name: 'Takuya',
  email: 'takuyahirata4@gmail.com',
  password: 'password'
}

const db = {
  testimonials,
  projects,
  user
}

export default db
