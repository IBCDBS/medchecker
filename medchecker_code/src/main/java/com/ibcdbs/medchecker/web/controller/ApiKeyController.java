package com.ibcdbs.medchecker.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
public class ApiKeyController {

    public static final String API_KEY = "udM9rU1oKiPCIcSUWfe8EKRpAd6MWBsDESDB4s7S";

    @RequestMapping(value = "/apiKey", method = GET)
    public String getApiKey() {
        return API_KEY;
    }

}
