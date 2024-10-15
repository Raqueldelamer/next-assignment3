import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    backgroundImage: `url(imgs/pexels-cemetery1.jpg)`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    height: '100vh', 
    color: 'black', 
};

export default function AboutPage() {
    return  (
    
    <div style={divStyle}>
    <h1>ABOUT</h1> 
    <div className="container text-center">
    <p>All the images are captured by Raquel Marie with a Canon Power Shot SX, an analog Minolta Xd 11, an Olympus OM-D, or an iPhone.</p>
    
    <p>"Inspired and influenced by street photography during the late 19th century to the early and mid 20th century, my 
        personal style of photography is predominately black and white, as I feel that it makes my photographs look timeless 
        with more of a focus on shadows, natural light, and composition. Within my photographs, I aspire to take each viewer 
        on a trip to the past, to a time when technology and artificial intelligence were still unimaginable."
    </p>

    </div>
    </div>
    );
} 