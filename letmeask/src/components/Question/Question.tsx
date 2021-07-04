import { ReactNode } from "react";
import {Content, Footer, QuestionArea, UserInfo} from './Question.styled'

export type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
  question?: boolean;
};

export function Question({ content, author, children, isAnswered = false, isHighlighted = false }: QuestionProps) {
  return (
    <QuestionArea question isAnswered={isAnswered} isHighlighted={isHighlighted}> 
      <Content>{content}</Content>
      <Footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </Footer>
    </QuestionArea>
  );
}
 