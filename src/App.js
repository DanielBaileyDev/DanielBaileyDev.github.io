import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Part from './components/Part/Part';

function App() {
  return (
    <div>
      <Hero background={'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1)), url(imgs/hero.jpg) center / cover no-repeat'} title={'AFFORDABLE'}>
        <Header title='CARS'>
        </Header>
      </Hero>
      <Part background={'black'} color={'white'}>
        <div>
          <div className='text-container'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt.</p>
          </div>
        </div>
        <img src='imgs/car1.png' alt='Car' />
      </Part>
      <Part background={'white'} color={'black'}>
        <div>
          <div className='text-container'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt. Vivamus laoreet, libero at facilisis lacinia, nulla ex pharetra augue, non lobortis felis purus sit amet eros. Nunc eu tellus ut sem malesuada pretium sed eget magna. Quisque tincidunt gravida convallis. Proin mattis tristique ligula vitae venenatis.</p>
          </div>
        </div>
        <img src='imgs/car2.png' alt='Car' />
      </Part>
      <Part background={'white'} color={'black'}>
        <img className='border' src='imgs/speed1.jpg' alt='Car' />
        <div>
          <div className='text-container'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt. Vivamus laoreet, libero at facilisis lacinia, nulla ex pharetra augue, non lobortis felis purus sit amet eros. Nunc eu tellus ut sem malesuada pretium sed eget magna. Quisque tincidunt gravida convallis. Proin mattis tristique ligula vitae venenatis.</p>
          </div>
        </div>
      </Part>
      <Part background={'white'} color={'black'}>
        <div>
          <div className='text-container'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt. Vivamus laoreet, libero at facilisis lacinia, nulla ex pharetra augue, non lobortis felis purus sit amet eros. Nunc eu tellus ut sem malesuada pretium sed eget magna. Quisque tincidunt gravida convallis. Proin mattis tristique ligula vitae venenatis.</p>
          </div>
        </div>
        <img src='imgs/car3.png' alt='Car' />
      </Part>
      <Part background={'url("imgs/fix1.jpg") center bottom / cover fixed no-repeat'} color={'white'}>
        <div>
          <div className='text-container black-background'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt. Vivamus laoreet, libero at facilisis lacinia, nulla ex pharetra augue, non lobortis felis purus sit amet eros. Nunc eu tellus ut sem malesuada pretium sed eget magna. Quisque tincidunt gravida convallis. Proin mattis tristique ligula vitae venenatis.</p>
          </div>
        </div>
        <div>
          
        </div>
      </Part>
      <Part background={'white'} color={'black'}>
        <img src='imgs/car4.png' alt='Car' />
        <div>
          <div className='text-container'>
            <h2>FAST CAR GO BRUM</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquet malesuada tincidunt. Vivamus laoreet, libero at facilisis lacinia, nulla ex pharetra augue, non lobortis felis purus sit amet eros. Nunc eu tellus ut sem malesuada pretium sed eget magna. Quisque tincidunt gravida convallis. Proin mattis tristique ligula vitae venenatis.</p>
          </div>
        </div>
      </Part>
      <Part background={'black'} color={'white'}>
        <div>
          <div className='text-container'>
            <h2>CONTACT</h2>
            <p>Telephone: 123-456-7890</p>
            <p>Email: business@gmail.com</p>
            <p>Address: 123 Fake Street</p>
          </div>
        </div>
        <div>
          <div className='text-container'>
            <h2>SUBSCRIBE</h2>
            <p>Sign up to our newsletter.</p>
            <div>
              <p>Email *</p>
              <input type='text' />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </Part>
    </div>
  );
}

export default App;