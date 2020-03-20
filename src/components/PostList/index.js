import React, { Component } from 'react';

import { Container, List, Card, Avatar, Content, Row, CardComent } from './styles';
class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Maria Eduarda",
              avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-mulher_24640-16518.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg"
        },
        date: "04 Jun 2019",
        content: `Fala galera, beleza?

        Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.`,
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          },
          {
            id: 2,
            author: {
              name: "Fabricio",
              avatar: "https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14046.jpg"
            },
            content: "Vamo nos empenhar ao máximo!"
          }
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state;
    return (
      <Container>
        <List>
        {posts.map(post => (
          <Card key={String(post.id)}>
            <aside>
              <Avatar src={post.author.avatar} alt={post.author.name} />
              <div>
                <strong>{post.author.name}</strong>
                <p>{post.date}</p>
              </div>
            </aside>
            <Content>{post.content}</Content>
            <Row />
            <List>
            {post.comments.map(comment => (
              <CardComent key={String(comment.id)}>
                <Avatar src={comment.author.avatar} />
                <div>
                  <Content>
                    <span
                      style={{"marginRight": "5px", "fontFamily": "Helvetica", "color": "#1E1E1E"}} >
                        {comment.author.name}:
                    </span>
                    {comment.content}
                  </Content>
                </div>
              </CardComent>
            ))}
            </List>
          </Card>
        ))}
        </List>
      </Container>
    );
  }
}

export default PostList;
