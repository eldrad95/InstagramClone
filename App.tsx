/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  useColorScheme,
} from 'react-native';
import amplify from  'aws-amplify'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Navigation from './src/navigation';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <Navigation />
  );
}



export default App;
