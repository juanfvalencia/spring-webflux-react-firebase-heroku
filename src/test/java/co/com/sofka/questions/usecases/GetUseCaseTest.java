package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class GetUseCaseTest {

    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    private GetUseCase getUseCase;

    @Test
    public void get(){

        var question = new Question();
        question.setId("xxx");
        question.setUserId("xxx");
        question.setQuestion("¿Que es React?");
        question.setType("OPEN");
        question.setCategory("TECHNOLOGY");
        question.setPhotoUrl("photoUrl.com");
        

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));

        var respuesta = getUseCase.apply("1");
        Assertions.assertEquals(respuesta.block().getQuestion(), "¿Que es React?");
    }

}