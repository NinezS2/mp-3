import {useMatch} from "react-router-dom";

function Header() {
    const match = useMatch("/:page");
    const page = match?.params.page || "home";

    let title = "Gabrielle Zukeram";
    let subtitle = "My online resume.";

    if (page === "education") {
        title = "Education";
        subtitle = "My academic background and studies.";
    }

    else if (page === "experience") {
        title = "Experience";
        subtitle = "My work and professional experience.";
    }

    else if (page === "skills") {
        title = "Skills";
        subtitle = "My work and professional skills.";
    }

    else if (page === "projects") {
        title = "Projects";
        subtitle = "Projects I have worked on.";
    }

    else if (page === "art") {
        title = "Art";
        subtitle = "Original artwork.";
    }

    else if (page === "contact") {
        title = "Contact";
        subtitle = "Ways to get in touch with me.";
    }

    return (
        <header>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    );
}

export default Header;