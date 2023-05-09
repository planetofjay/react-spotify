import Songbar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayclick, artistId }) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs:</h1>

    <div className='mt-6 w-full flex flex-col'>
      {data?.map((song, index) => (
        <Songbar
          key={`${artistId}-${song.key}-${index}`}
          song={song}
          index={index}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayclick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongs ;
