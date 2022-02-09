
const MainScreen = () => {

    const BG = styled("div")({
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: pal.bgmain,
    });

    const SideLimit = styled("div")({
        maxWidth: "64em",
        margin: "0 auto",
        padding: "0 1.7em",
    });

    return (
        <BG>
            <SideLimit>
                <AppTitle />
                <MainArea />
            </SideLimit>
        </BG>
    );
}


const MainArea = () => {

    const a = new Date();
    const b = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())).getTime();
    const c = new Date(Date.UTC(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate())).getTime();

    const [params, setParams] = React.useState({
        search: "",
        albums: true,
        singles: true,
        compilations: true,
        appearsOn: false,
        until: Math.max(b,c),
        since: null,
    });

    const items = get_filtered(params);
    const count = {
        filtered: items.length,
        total: albums_array[0].length + albums_array[1].length + albums_array[2].length,
    }

    const Div = styled("div")({
        display: "flex",
    });

    return (
        <Div>
            <Timeline items={items} />
            <Filters params={params} setParams={setParams} count={count}/>
        </Div>
    );
};


const AppTitle = () => {

    const tweetURL = "https://good-boy-iboibo.github.io/spotify-timeline/"
    const tweetText = "Spotify Timeline"

    const Title = styled(Typography)(({ theme }) => ({
        color: pal.yellow,
        fontSize: "2.4em",
        fontWeight: "bold",
        userSelect: "none",
        textShadow: "hsla(0, 0%, 0%, 0.6) 0.10em 0.07em 0.02em",
    }));

    const Icon = styled("i")({
        color: pal.gray,
        fontSize: "2.1em",
        marginLeft: "0.8em",
        transition: "0.3s",
    });
    const Twitter = styled(Icon)({
        "&:hover": { color: "hsl(203,100%,68%)" }
    });
    const Logout = styled(Icon)({
        "&:hover": { color: "hsl(17,81%,55%)"}
    });

    const Div = styled("div")({
        padding: `2em 0`,

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    });


    return (
        <Div>
            <Title>
                Spotify Timeline <span style={{ fontSize: "50%" }}>BETA</span>
            </Title>
            <div style={{ display: "inline-block" }}>
                <Tooltip title="Share this app on Twitter" placement="bottom">
                    <a
                        href={`https://twitter.com/share?url=${tweetURL}&text=${tweetText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Twitter className="fab fa-twitter-square" />
                    </a>
                </Tooltip>
                <Tooltip title="Sign out" placement="bottom">
                    <Logout className="fas fa-sign-out-alt" onClick={()=>auth()}/>
                </Tooltip>
            </div>
        </Div>
    )
}
