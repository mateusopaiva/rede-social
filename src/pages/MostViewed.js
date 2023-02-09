import Feed from '../components/Feed';

export default function MostViewed() {
    const posts = [
        {
            id: Math.random(),
            content: 'O React é uma biblioteca criada pelo Facebook para criar elementos de interface que podem ser compartilhados e reutilizados em uma aplicação de forma rápida, simples e intuitiva.',
            userName:'Staart',
            publishedAt: new Date(),
        },
    ];

    return(
        <main className="most-viewed">
            <Feed 
                posts={posts} 
                title="Mais Vistos"
                subtitle="Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade"
            />
        </main>
    );
}