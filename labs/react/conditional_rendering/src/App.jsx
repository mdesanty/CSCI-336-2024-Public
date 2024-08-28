import './App.css';
import Greeting from './components/Greeting';

function App() {
  const greetings = [
    {greeting: 'Hello', firstName: 'Homer', lastName: 'Simpson'},
    {greeting: 'Hello', firstName: 'Pete', lastName: 'Jones'},
    {greeting: 'Hello', firstName: 'Pete', lastName: 'Jones'},
    {greeting: 'Hello', firstName: 'Pete', lastName: 'Jones'},
  ]
  return (
    <div id="greetings">
      {greetings.map(function(greeting, index) {
        return <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
      })}
    </div>
  );
}

export default App;
