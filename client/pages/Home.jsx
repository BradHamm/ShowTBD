//homepage which will render popular tv shows from API, where users can choose to leave reviews. Also contains searchbar for fetching specific results.
export default function Home() {
    return (
        <>
            <input type="text" name="searchbar" id="searchbar" placeholder="Search for a show" />
            <div className="shows">
                <div className="showElement">
                    <h2 className="showTitle">{$showTitle}</h2>
                    <button id="addShowBtn">+</button>
                </div>
            </div>
        </>
    );
}