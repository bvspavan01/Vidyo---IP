import { Player, LoadingSpinner, BigPlayButton, ControlBar, ReplayControl, ForwardControl, PlaybackRateMenuButton, ClosedCaptionButton } from 'video-react';

import 'video-react/dist/video-react.css'; // import css

function App() {
  return (
      <Player>
          <source src="../public/assets/sample.mp4"
                  type="video/mp4"
          />
          <track kind="cations"
                 src="../public/assets/sample.en.vtt"
                 srcLang="en"
                 label="English"
                 default
          />
          <LoadingSpinner />
          <BigPlayButton position="center" />
          <ControlBar>
              <PlaybackRateMenuButton rates={[6, 2, 1.5, 1, 0.5, 0.1]}/>
              <ForwardControl seconds={10} />
              <ReplayControl seconds={10} />
              <ClosedCaptionButton />
          </ControlBar>
      </Player>
  );
}

export default App;
