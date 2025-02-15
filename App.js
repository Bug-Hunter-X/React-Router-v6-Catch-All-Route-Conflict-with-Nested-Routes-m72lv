```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This code uses `/*` as a catch-all route.  While seemingly correct, it can cause unexpected behavior when nested routes are used.  If a nested route is defined with a segment that matches `/*`, the catch-all route will be triggered instead of the nested route.