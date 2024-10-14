import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
  const divStyle = {
    backgroundImage: `url(imgs/pexels-cemetery.jpg)`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    height: '100vh', 
    color: 'black', 

  };

  return (
    <div style={divStyle}>
      <h1>BOO! WELCOME TO MY NEXT ASSIGNMENT!</h1>
    </div>
  );
}
