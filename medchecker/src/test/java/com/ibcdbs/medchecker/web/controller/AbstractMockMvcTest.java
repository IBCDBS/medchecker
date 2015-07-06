package com.ibcdbs.medchecker.web.controller;

import com.ibcdbs.medchecker.service.EmailService;
import com.ibcdbs.medchecker.service.RiskScoreService;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = AbstractMockMvcTest.MockMvcTestConfig.class)
public abstract class AbstractMockMvcTest {

    @Autowired
    WebApplicationContext wac;

    MockMvc mockMvc;

    @Before
    public void setup() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).build();
    }

    @Configuration
    @EnableWebMvc
    @ComponentScan("com.ibcdbs.medchecker")
    public static class MockMvcTestConfig extends WebMvcConfigurerAdapter {

        @Bean
        EmailService emailService() {
            return Mockito.mock(EmailService.class);
        }

        @Bean
        RiskScoreService riskScoreService() {
            return Mockito.mock(RiskScoreService.class);
        }

        @Bean
        JavaMailSender javaMailSender() {
            return Mockito.mock(JavaMailSender.class);
        }
    }

}

