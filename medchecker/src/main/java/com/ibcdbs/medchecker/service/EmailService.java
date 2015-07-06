package com.ibcdbs.medchecker.service;

public interface EmailService {
    /**
     * Sends an HTML email to the given recipient.
     *
     * @param from    the sender of the email
     * @param to      the recipient of the email
     * @param subject the subject of the email
     * @param content the content of the email
     */
    void send(String from, String to, String subject, String content);

}
