package com.ibcdbs.medchecker.web.controller;

import org.junit.Test;

import static com.ibcdbs.medchecker.web.controller.ApiKeyController.API_KEY;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ApiKeyControllerTest extends AbstractMockMvcTest {

    @Test
    public void testGetApiKey() throws Exception {
        mockMvc.perform(get("/apiKey"))
                .andExpect(status().isOk())
                .andExpect(content().string(API_KEY));
    }

}
