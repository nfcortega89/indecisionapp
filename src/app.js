console.log('App.js is running');

const template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const templateTwo = (
  <div>
    <h1>Nikko Ortega</h1>
    <p>Age: 28</p>
    <pl>Location: Los Angeles</pl>
  </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
