import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

export default function Space({ index, space }) {
  return (
    <div className="space">
      {index == 0 && <div className="gallery-trigger"></div>}
      <div className="space__index">
        {index + 1} <h4>{space && space.name}</h4>
      </div>
      {space?.audio && (
        <AudioPlayer
          volume={1}
          src={space.audio}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          showJumpControls={false}
          showFilledVolume={false}
        />
      )}
    </div>
  );
}
