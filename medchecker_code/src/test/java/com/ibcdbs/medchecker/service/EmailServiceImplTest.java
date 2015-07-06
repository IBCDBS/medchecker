package com.ibcdbs.medchecker.service;

import com.icegreen.greenmail.util.GreenMail;
import com.icegreen.greenmail.util.GreenMailUtil;
import com.icegreen.greenmail.util.ServerSetupTest;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import javax.mail.Message;
import javax.mail.MessagingException;

import static org.junit.Assert.assertEquals;

public class EmailServiceImplTest {

    EmailService emailService;

    JavaMailSenderImpl mailSender;
    GreenMail smtp;

    @Before
    public void init() {
        smtp = new GreenMail(ServerSetupTest.SMTP);
        smtp.start();

        mailSender = new JavaMailSenderImpl();
        mailSender.setPort(3025);
        mailSender.setHost("localhost");

        emailService = new EmailServiceImpl(mailSender);
    }

    @Test
    public void testSend() throws MessagingException {
        String from = "test@sender.com";
        String to = "test@receiver.com";
        String subject = "test subject";
        String content = "test message";

        emailService.send(from, to, subject, content);

        Message[] messages = smtp.getReceivedMessages();
        assertEquals(1, messages.length);
        assertEquals("test subject", messages[0].getSubject());

        String body = GreenMailUtil.getBody(messages[0]).replaceAll("=\r?\n", "");
        assertEquals("test message", body);
    }

    @After
    public void cleanup() {
        smtp.stop();
    }

}