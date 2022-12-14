import { useContext } from 'react';
import { ThemeProvider } from './ContextProvider';
import YouTube from 'react-youtube';

function TrailerPopup() {
    const { isShowYoutube, setIsShowYoutube, videoTrailer, IMAGE_PATH } = useContext(ThemeProvider);
    let key = '';
    let bgImage = '';
    if (typeof videoTrailer.videos !== 'undefined' && videoTrailer.videos.results.length > 0) {
        bgImage = {
            //     backgroundImage: `url("${IMAGE_PATH}${videoTrailer.backdrop_path}")`,
            //     backgroundRepeat: 'no-repeat',
            //     backgroundPosition: '50% 0',
            //     backgroundSize: 'cover',
            //     opacity: '0.5',
        };
        key = videoTrailer.videos.results[0].key;
    }
    const handleOverlayClick = () => {
        setIsShowYoutube(false);
    };
    return isShowYoutube ? (
        <div>
            <YouTube className="youtube-popup" videoId={key} />
            <div onClick={handleOverlayClick} style={bgImage} className="overlay-element"></div>
        </div>
    ) : (
        ''
    );
}

export default TrailerPopup;
