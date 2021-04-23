import { createContext, ReactNode, useContext, useState } from "react";
import {AppProps } from 'next/app';
import '../styles/global.scss';

import { Header } from '../components/Header';
import {Player} from '../components/Player';

import styles from '../styles/app.module.scss';
import { PlayerContext } from '../contexts/PlayerContexts';



function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, SetIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList ([episode]);
    setCurrentEpisodeIndex(0);
    SetIsPlaying(true);
  }

  function togglePlay() {
    SetIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    SetIsPlaying(state);
  }
  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, play, isPlaying, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <main>
          <Header/>
          <Component {...pageProps} />
        </main>
          <Player/>
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp;