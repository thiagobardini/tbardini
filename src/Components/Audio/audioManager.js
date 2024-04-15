import { Howl } from 'howler';

class AudioManager {
  constructor() {
    this.backgroundSound = new Howl({
      src: ["/summer-sound-fixed.mp3"],
      loop: true
    });

    this.clickSound = new Howl({
      src: ["/enable-sound.mp3"]
    });
  }

  playBackground() {
    this.backgroundSound.play();
  }

  stopBackground() {
    this.backgroundSound.stop();
  }

  playClick() {
    this.clickSound.play();
  }
}

// Cria uma instância singleton
const audioManager = new AudioManager();

export default audioManager;
