
const retry = (arg) => {

    console.log("retry(...) is called");

    const Div = styled("div")({
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    });

    ReactDOM.render(
        <ThemeProvider theme={theme}>
            <Div>
                <ErrorMsg msg={"Too Many Requests (429)\nPlease wait for a while and retry."} />
                <BigButton
                    label="Retry"
                    icon="fas fa-redo-alt"
                    func={ arg } />
            </Div>
            <BGParticles />
        </ThemeProvider>,
        document.getElementById("root")
    );
}