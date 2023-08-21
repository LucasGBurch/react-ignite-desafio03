import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Blog } from "./pages/Blog";
import { Post } from "./pages/Post";
import { ScrollToTop } from './utils/ScrollToTop';

export function Router() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Blog />} />
          <Route path='/post/:id' element={<Post />} />
        </Route>
      </Routes>
    </ScrollToTop>
  )
}
