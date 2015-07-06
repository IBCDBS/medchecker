package com.ibcdbs.medchecker.web.controller;

import com.ibcdbs.medchecker.model.RiskScoreData;
import com.ibcdbs.medchecker.service.RiskScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
@RequestMapping("/riskScore")
public class RiskScoreController {

    @Autowired
    private RiskScoreService riskScoreService;

    @RequestMapping(method = POST, consumes = APPLICATION_JSON_VALUE)
    public int getRiskScore(@RequestBody List<RiskScoreData> riskScoreDataList) {
        return riskScoreService.calculateScore(riskScoreDataList);
    }

}
