import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';

function Game(props) {
  return (
    <div className='' style={{backgroundColor: 'black'}}>
    <Card className='col-3' style={{ width: '18rem', backgroundColor: 'black' }}>
      <Card.Img className='card-prop-img' variant="top" src={props.imgSrc} />
      <Card.Body>
        <Card.Title className='card-text-title'>{props.title}</Card.Title>
        <Card.Text className='card-text-data'>
          Rating:{props.rating}
        </Card.Text>
        <Card.Text className='card-text-data'>
          Released On:{props.released}
        </Card.Text>
        <Button variant="secondary">Install</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Game;