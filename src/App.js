import { useState } from 'react';

import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';

import Feed from './components/Feed';

export default function App() {
    const [history, setHistory] = useState('');
    const [userName, setUsername] = useState('');
    const [posts, setPosts] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName,
                publishedAt: new Date(), 
            },
        ]);

        setHistory('');
        setUsername('');
    }

    return (
        <div className="wrapper">
            <form className="post-form" onSubmit={handleSubmit}>
                <input value={history} placeholder="Escreva uma nova história..." onChange={(event) => setHistory(event.target.value)}/>
                <div>
                    <img src={userIcon} alt="User"/>
                    <input value={userName} placeholder="Digite seu nome..." onChange={(event) => setUsername(event.target.value)}/>
                    <button type="submit">
                        <img src={paperPlaneIcon} alt="Paper plane"/>
                        Publicar
                    </button>
                </div>
            </form>
        <main>
            <Feed posts={posts}/>
        </main>
        </div>
    );
}