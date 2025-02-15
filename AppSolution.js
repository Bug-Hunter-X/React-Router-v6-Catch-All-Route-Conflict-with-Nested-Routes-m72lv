```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:userId/*" element={<UserDetail />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
This revised code addresses the issue by defining a more specific route for `/users/:userId/*` before the catch-all route. Now, requests to `/users/123/profile` will correctly route to `UserDetail`, while requests to other unmatched paths will still correctly route to `NotFound`.