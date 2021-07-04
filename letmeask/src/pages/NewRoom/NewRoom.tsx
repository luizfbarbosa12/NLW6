import illustration from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button/Button";
import { Link, useHistory } from "react-router-dom";
import { FormEvent } from "react";
import { useState } from "react";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import {MainContent} from './NewRoom.styled'
import { PageAuth } from "../Home/Home.styled";

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === "") {
      return;
    }
    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

  return (
    <PageAuth id="page-auth">
      <aside>
        <img
          src={illustration}
          alt="Illustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="letmeask" />

          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              onChange={(event) => setNewRoom(event.target.value)}
              type="text"
              placeholder="Nome da sala"
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </MainContent>
      </main>
    </PageAuth>
  );
}
