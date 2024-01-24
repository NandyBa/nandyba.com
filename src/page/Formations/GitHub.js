import { useEffect } from "react";

const GitHub = () => {
    const url = 'https://nandyba.github.io/GitHub/';
    useEffect(() => {
        // Redirect to GitHub repo
        window.location.href = url;
    }, []);

    return (
        <div>
            <h1>Moved to <button onClick={url}>Perform action</button></h1>
        </div>
    )
}

export default GitHub;
