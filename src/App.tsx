import { Estimation } from './components/Estimator/Estimator';
import { ThemeProvider } from './ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Estimation />
    </ThemeProvider>
  );
}
