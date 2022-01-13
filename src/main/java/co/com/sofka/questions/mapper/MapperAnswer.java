package co.com.sofka.questions.mapper;


import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import org.springframework.stereotype.Component;

import java.util.function.Function;

@Component
public class MapperAnswer {

    public Function<AnswerDTO, Answer> answerDtoToAnswer() {
        return updateAnswer -> {
            var answer = new Answer();
            answer.setPosition(updateAnswer.getPosition());
            answer.setQuestionId(updateAnswer.getQuestionId());
            answer.setUserId(updateAnswer.getUserId());
            answer.setAnswer(updateAnswer.getAnswer());
            answer.setVote(updateAnswer.getVote());
            return answer;
        };
    }

    public Function<Answer, AnswerDTO> answerToAnswerDto() {
        return entity -> new AnswerDTO(
                entity.getId(),
                entity.getQuestionId(),
                entity.getUserId(),
                entity.getAnswer()
        );
    }
}
