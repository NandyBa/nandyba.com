import { useEffect } from "react";

const GitHub = () => {
    const url = 'https://nandyba.github.io/GitHub/';
    useEffect(() => {
        // Redirect to GitHub repo
        window.location.href = url;
    }, []);

    return (
        <div>
            <h1>Moved to <a hreh={url}>GitHub</a></h1>
        </div>
    )
}

export default GitHub;
