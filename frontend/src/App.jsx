import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotfoundPage from './pages/NotfoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
import HomeCards from './components/HomeCards';
import Skills from './components/Skills';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/works', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/works/delete/${id}`, {
      method: 'DELETE',
    });
    return;
  };

  const UpdateJob = async (job) => {
    const res = await fetch(`/api/works/update/${job._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/projects" element={<HomeCards isTrue={true} />} />
        <Route
          path="/skills"
          element={
            <>
              <Skills /> <HomeCards isTrue={true} />
            </>
          }
        />
        <Route path="" element={<PrivateRoute />}>
          <Route
            path="/showcase"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
        <Route path="/works" element={<JobsPage />} />
        <Route
          path="/works/update/:id"
          element={<EditJobPage UpdateJobSubmit={UpdateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/works/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="*" element={<NotfoundPage />} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
