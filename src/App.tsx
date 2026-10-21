import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import Main from "./components/Main.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills.tsx";
import Projects from "./pages/Projects.tsx";
import Art from "./pages/Art.tsx";
import Contact from "./pages/Contact.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div id="page-wrapper">
                <Header />

                <div id="container">
                    <Nav />
                    <Main />
                </div>

                <Footer />
            </div>
        ),
        children: [
            { index: true, element: <Home /> },
            {path: "education", element:<Education />},
            {path: "experience", element:<Experience />},
            {path: "skills", element:<Skills />},
            {path: "projects", element:<Projects />},
            {path: "art", element:<Art />},
            {path: "contact", element:<Contact />},
        ],
    },
]);

export default function App() {
  return <RouterProvider router={router} />;
}