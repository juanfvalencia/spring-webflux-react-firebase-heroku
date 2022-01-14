package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;
import static reactor.core.publisher.Mono.when;

@SpringBootTest
class UpdateUseCaseTest {

    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    private UpdateUseCase updateUseCase;

    @Test
    void updateTest(){

        var resourcesDTO = new QuestionDTO(
                "xxxx",
                "xxxx",
                "¿Que es React?",
                "Technology",
                "TECHNOLOGY",
                "photoUrl.com");

        var resource = new Question();
        resource.setId("xxxx");
        resource.setUserId("xxxx");
        resource.setQuestion("¿Que es React?");
        resource.setType("Technology");
        resource.setCategory("TECHNOLOGY");
        resource.getPhotoUrl("photoUrl.com");

        when(questionRepository.save(Mockito.any(Question.class))).thenReturn(Mono.empty());

        var result = updateUseCase.apply(resourcesDTO);
        Assertions.assertEquals(Objects.requireNonNull(result.block()), "xxxx");
    }

}