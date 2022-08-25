import TypeWriter from './TypeWriter';

import './Banner.css';

const Banner=()=>{
    return (
        <div className="banner">
            <div className="banner-content">
                <TypeWriter text="Hello World" />
            </div>
        </div>
    );
}

export default Banner;