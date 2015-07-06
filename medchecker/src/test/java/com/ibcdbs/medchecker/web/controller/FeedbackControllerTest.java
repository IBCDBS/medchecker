package com.ibcdbs.medchecker.web.controller;

import com.ibcdbs.medchecker.service.EmailService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.doThrow;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class FeedbackControllerTest extends AbstractMockMvcTest {

    @Autowired
    EmailService emailService;

    @Test
    public void testSendFeedbackSucceeds() throws Exception {
        mockMvc.perform(post("/feedback")
                .content("test"))
                .andExpect(status().isOk())
                .andExpect(content().string("1"));
    }

    @Test
    public void testSendFeedbackFails() throws Exception {
        doThrow(new RuntimeException())
                .when(emailService).send(anyString(), anyString(), anyString(), anyString());

        mockMvc.perform(post("/feedback")
                .content("test"))
                .andExpect(status().isOk())
                .andExpect(content().string("0"));
    }

}