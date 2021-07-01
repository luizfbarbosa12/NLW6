import { ReactNode } from "react";
import {QuestionArea} from './Question.styled'

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
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </QuestionArea>
  );
}
 