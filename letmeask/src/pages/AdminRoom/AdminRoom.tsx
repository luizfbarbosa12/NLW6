import logoImg from "../../assets/images/logo.svg";
import { RoomCode } from "../../components/RoomCode/RoomCode";
import { useHistory, useParams } from "react-router-dom";
import deleteImg from "../../assets/images/delete.svg";
import checkImg from  "../../assets/images/check.svg"
import answerImg from '../../assets/images/answer.svg'
import { Question } from "../../components/Question/Question";
import { useRoom } from "../../hooks/useRoom";
import { database } from "../../services/firebase";
import { Button } from "../../components/Button/Button";
import {PageRoom} from './AdminRoom.styled'

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  // const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { title, questions } = useRoom(roomId);
  const history = useHistory();

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Você tem certeza que deseja apagar esta pergunta?")) {
      const questionRef = await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
    }
  }

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push("/");
  }

  async function handleAnsweredQuestion(questionId: string) {
    await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .update({
          isAnswered: true
        });
  }

  async function handleHighlightedQuestion(questionId: string) {
    await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .update({
          isHighlighted: true
        });
  }
  return (
    <PageRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={params.id} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                <button
                  type="button"
                onClick={() => handleAnsweredQuestion(question.id)}
                >
                  <img src={checkImg} alt="check icon" />
                </button>
                <button
                  type="button" 
                  onClick={() => handleHighlightedQuestion(question.id)}
                >
                  <img src={answerImg} alt="answer icon" />
                </button> 
                </>)}
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="delete icon" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </PageRoom>
  );
}
