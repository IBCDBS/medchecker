package com.ibcdbs.medchecker.web.controller;

import com.ibcdbs.medchecker.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/feedback")
public class FeedbackController {

    @Value("${email.feedback.from}")
    private String FEEDBACK_FROM;

    @Value("${email.feedback.to}")
    private String FEEDBACK_TO;

    @Value("${email.feedback.subject}")
    private String FEEDBACK_SUBJECT;

    @Autowired
    private EmailService emailService;

    @RequestMapping(method = POST)
    public String sendFeedback(@RequestBody String feedback) {
        try {
            emailService.send(FEEDBACK_FROM,
                    FEEDBACK_TO,
                    FEEDBACK_SUBJECT,
                    feedback);
        } catch (Exception ex) {
            return "0";
        }

        return "1";
    }

}
