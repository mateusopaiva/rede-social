import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockIcon from './images/clock.svg';

export default function App() {
    const posts = [
        {
            id: Math.random(),
            content: 'Conteúdo do post',
            userName: 'Usuário',
            publishedAt: new Date(),
        },
        {
            id: Math.random(),
            content: 'O React é uma biblioteca criada pelo Facebook para criar elementos de interface que podem ser compartilhados e reutilizados em uma aplicação de forma rápida, simples e intuitiva.',
            userName: 'Staart',
            publishedAt: new Date(),
        },
    ];

    return (
        <div className="wrapper">
            <form className="post-form" onSubmit={() => alert('Formulario submetido')}>
                <input placeholder="Escreva uma nova história..."/>
                <div>
                    <img src={userIcon} alt="User"/>
                    <input placeholder="Digite seu nome..." />
                    <button type="submit">
                        <img src={paperPlaneIcon} alt="Paper plane"/>
                        Publicar
                    </button>
                </div>
            </form>
        <main>
            <header>
                <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
            </header>
            <section className="feed">
                {posts.map((post) => (
                    <article key={post.id}>
                        <p>{post.content}</p>
                        <footer>
                            <div className="user-details">
                                <img src={userIcon} alt="User" />
                                <strong>{post.userName}</strong>
                            </div>
                            <div className="time">
                                <img src={clockIcon} alt="Clock"/>
                                    <span>Publicado em {post.publishedAt.toLocaleDateString('pt-br')}</span>
                            </div>
                        </footer>
                    </article>
                ))}
            </section>
        </main>
        </div>
    );
}