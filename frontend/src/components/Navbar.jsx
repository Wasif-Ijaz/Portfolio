import gsap from 'gsap';
import { useWindowScroll } from 'react-use';
import { useEffect, useRef, useState } from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import Button from './Button';
import { FaReact } from 'react-icons/fa';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const NavBar = () => {
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove('floating-nav');
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add('floating-nav');
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add('floating-nav');
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <header ref={navContainerRef} className="bg-[#0F1729] rounded-lg border">
      <nav className="flex size-full items-center justify-between p-4">
        <div className="flex items-center gap-7">
          <FaReact className="text-3xl text-white cursor-pointer" />

          <Button
            id="product-button"
            title="Portfolio"
            rightIcon={<TiLocationArrow />}
            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
          />
        </div>

        <div className="md:ml-auto flex h-full items-center justify-center">
          <div className="flex space-x-7">
            <Link to="/" className="nav-hover-btn">
              About
            </Link>
            {userInfo ? (
              <>
                <Link to="/works" className="nav-hover-btn">
                  Hire
                </Link>
                <Link to="/showcase" className="nav-hover-btn">
                  Showcase Work
                </Link>
              </>
            ) : null}
            <Link to="/skills" className="nav-hover-btn">
              Skills
            </Link>
            <Link to="/projects" className="nav-hover-btn">
              Projects
            </Link>
            {userInfo ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 text-white focus:outline-none">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link to="/login" className="nav-hover-btn flex gap-2">
                  <FaSignInAlt /> <span>Sign In</span>
                </Link>
                <Link to="/register" className="nav-hover-btn flex gap-2">
                  <FaSignOutAlt /> <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
