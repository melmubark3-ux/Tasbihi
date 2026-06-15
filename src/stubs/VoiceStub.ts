
// Stub for @react-native-voice/voice — يحل محل المكتبة المحذوفة مؤقتاً
// TODO: استبدال بـ expo-speech-recognition

export interface SpeechResultsEvent { value?: string[]; }
export interface SpeechErrorEvent { error?: { code?: string; message?: string; }; }
export interface SpeechPartialResultsEvent { value?: string[]; }

const noop = () => {};

const Voice = {
  onSpeechStart: undefined as (() => void) | undefined,
  onSpeechEnd: undefined as (() => void) | undefined,
  onSpeechResults: undefined as ((e: SpeechResultsEvent) => void) | undefined,
  onSpeechPartialResults: undefined as ((e: SpeechPartialResultsEvent) => void) | undefined,
  onSpeechError: undefined as ((e: SpeechErrorEvent) => void) | undefined,
  onSpeechVolumeChanged: undefined as ((e: any) => void) | undefined,

  start: async (_locale: string) => {
    console.log('[Voice Stub] start called');
  },
  stop: async () => {
    console.log('[Voice Stub] stop called');
  },
  destroy: async () => {
    console.log('[Voice Stub] destroy called');
    Voice.onSpeechStart = undefined;
    Voice.onSpeechEnd = undefined;
    Voice.onSpeechResults = undefined;
    Voice.onSpeechPartialResults = undefined;
    Voice.onSpeechError = undefined;
    Voice.onSpeechVolumeChanged = undefined;
  },
  cancel: async () => {
    console.log('[Voice Stub] cancel called');
  },
  isAvailable: async () => true,
  isRecognizing: async () => false,
  getSpeechRecognitionServices: async () => ['stub'],
  removeAllListeners: () => {},
};

export default Voice;
