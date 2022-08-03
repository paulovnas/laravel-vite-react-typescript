interface IMessage {
    title: string,
    content: string
}

const Home = () => {
    const message : IMessage = {
        title : "Laravel + Vite + React + Typescript",
        content: "Esqueleto base para projetos!"
    };

    return <div className="container">
        <div className="box">
            <h2>{message.title}</h2>
            <p>{message.content}</p>
        </div>
    </div>
}

export default Home;