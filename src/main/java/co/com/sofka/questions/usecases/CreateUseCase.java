package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.mapper.MapperQuestion;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import co.com.sofka.questions.usecases.question.SaveQuestion;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

@Service
@Validated
public class CreateUseCase implements SaveQuestion {

    private final QuestionRepository questionRepository;
    private final MapperQuestion mapperQuestion;

    public CreateUseCase(MapperQuestion mapperQuestion, QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
        this.mapperQuestion = mapperQuestion;
    }

    @Override
    public Mono<String> apply(QuestionDTO questionDTO) {
        return questionRepository
                .save(mapperQuestion.questionDTOToQuestion(null).apply(questionDTO))
                .map(Question::getId);
    }

}
