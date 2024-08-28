import { Row, Col, Card } from 'react-bootstrap';

function GridExample() {

  return (
    <>
      <h5 className='mt-4'>Grid and Cards</h5>
      <p>
        Here is an exmaple of how to work with the grid (rows and colomns) and card in react-bootstrap.<br/>
        A few anime shows that I like...
      </p>

      {/*
        Instead of <div class="row"> we use <Row>.
        Instead of <div class="col"> we use <Col>.

        Instead of setting row-cols-xs, we just set the xs attribute. The same is true for
        the other break points:
          - row-cols-xs => xs
          - row-cols-sm => sm
          - row-cols-md => md
          - row-cols-lg => lg
          - row-cols-xl => xl
          - row-cols-xxl => xxl

        You can read more at: https://react-bootstrap.netlify.app/docs/layout/grid
      */}
      <Row className='gy-4' xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>

        <Col>
          {/*
            Instead of <div class="card"> we use <Card>
            Instead of <img class="card-img-top"> we use <Card.Img variant='top'>
            Instead of <div class="card-title h5"> we use <Card.Title>
            Instead of we use <Card.Body>
            Instead of <p class="card-text"> we use <Card.Text>
            Instead of <div class="card-footer"> we use <Card.Footer>

            You can read more at: https://react-bootstrap.netlify.app/docs/components/cards
          */}
          <Card>
            <Card.Img variant='top' alt='Overlord' src='https://i.pinimg.com/originals/9f/1d/9f/9f1d9fde4c932a117843d9f43478722e.jpg' />
            <Card.Body>
              <Card.Title>Overlord</Card.Title>
              <Card.Text>
                A player gets stuck in an MMORPG for real. He has ton of power and seems to be the only real player there.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt4869896/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' alt='One Punch Man' src='https://static.posters.cz/image/750/plakaty/one-punch-man-destruction-i61317.jpg' />
            <Card.Body>
              <Card.Title>One Punch Man</Card.Title>
              <Card.Text>
                The main character is a hero for fun. But he isn't having as much fun as he'd like. He defeats all enemies with a single punch and has become very bored.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt4508902/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' alt='Death Note' src='https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg' />
            <Card.Body>
              <Card.Title>Death Note</Card.Title>
              <Card.Text>
                A young man finds a strange note book that turns out to come with even stranger powers - as well as a strange companion.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt0877057/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' alt='Hunter x Hunter' src='https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg' />
            <Card.Body>
              <Card.Title>Hunter x Hunter</Card.Title>
              <Card.Text>
                Youngster Gon embarks on a journey to become a professional hunter. He meets like minded friends along the way.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt2098220/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' alt='Invincible' src='https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' />
            <Card.Body>
              <Card.Title>Invincible</Card.Title>
              <Card.Text>
                A new show with a more traditional animation style (does it count as anime?... I would have said no but Google seems to disagree). Violent and grousome - not for the feignt of heart.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt6741278/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant='top' alt='Fist of the North Star' src='https://the-comics-journal.sfo3.digitaloceanspaces.com/wp-content/uploads/2022/03/Fistcover.jpg' />
            <Card.Body>
              <Card.Title>Fist of the North Star</Card.Title>
              <Card.Text>
                Kenshiro might be the most silly and OP human character in all of anime. This show is unintentionally funny but randomly awesome at the same time.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a href='https://www.imdb.com/title/tt0091211/' target='_blank' className='btn btn-primary'>Learn more</a>
            </Card.Footer>
          </Card>
        </Col>

      </Row>
    </>
  );
}

export default GridExample;