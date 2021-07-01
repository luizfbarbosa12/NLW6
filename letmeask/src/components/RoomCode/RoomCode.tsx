import copyImg from "../../assets/images/copy.svg";
import {CopyButton, Container, Code} from './RoomCode.styled'

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <CopyButton onClick={copyRoomCodeToClipboard}>
      <Container>
        <img src={copyImg} alt="copy room code" />
      </Container>
      <Code>Sala ${props.code}</Code>
    </CopyButton>
  );
}
