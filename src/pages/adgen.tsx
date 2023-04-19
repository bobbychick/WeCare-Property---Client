


export default function AdGen() {
    return(
        <main>
            <p>Hello</p>
            <form method="post">
                <label>Rooms:</label>
                <input type="text" id="rooms" name="rooms"/>
                <label>Baths:</label>
                <input type="text" id="baths" name="baths"/>
                <label>Close to:</label>
                <input type="text" id="proximity" name="proximity"/>
                <label>School Zone:</label>
                <input type="text" id="schoolZone" name="schoolZone"/>
                <label>Transport Options:</label>
                <input type="text" id="transport" name="transport"/>

            </form>
        </main>
    )


}
