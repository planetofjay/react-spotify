import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, isPlaying, activeSong, index, data }) => {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, index }));
    dispatch(playPause(true));
  };

  return (
    <div className='flex flex-col w-[200px] p-4 animate-slideup rounded-2xl cursor-pointer'>
      <div className='relative w-full group'>
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
        ${activeSong?.title === song.title
            ? 'flex bg-black bg-opacity-70'
            : 'hidden'} `}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img 
          src={song.images?.coverart} 
          alt='song_img' 
          className='rounded-2xl'/>
      </div>

      <div className='mt-4 flex flex-col'>
        <p className='text-lg text-gray-100 truncate'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className='text-sm truncate text-gray-300 mt-1'>
          <Link to={song.artists
            ? `/artists/${song?.artists[0]?.adamid}`
            : '/top-artists'}
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;