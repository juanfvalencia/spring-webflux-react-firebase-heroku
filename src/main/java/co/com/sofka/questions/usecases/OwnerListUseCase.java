package co.com.sofka.questions.usecases;

import co.com.sofka.questions.mapper.MapperQuestion;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Flux;

import java.util.function.Function;

@Service
@Validated
public class OwnerListUseCase implements Function<String, Flux<QuestionDTO>> {
    private final QuestionRepository questionRepository;
    private final MapperQuestion mapperQuestion;

    public OwnerListUseCase(MapperQuestion mapperQuestion, QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
        this.mapperQuestion = mapperQuestion;
    }


    @Override
    public Flux<QuestionDTO> apply(String userId) {
        return questionRepository.findByUserId(userId)
                .map(mapperQuestion.questionToQuestion());
    }
}
