package com.ibcdbs.medchecker.web.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ibcdbs.medchecker.model.RiskScoreData;
import com.ibcdbs.medchecker.service.RiskScoreService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Matchers.anyList;
import static org.mockito.Mockito.when;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class RiskScoreControllerTest extends AbstractMockMvcTest {

    @Autowired
    RiskScoreService riskScoreService;

    @Test
    public void testGetRiskScore() throws Exception {
        int score = 6;

        when(riskScoreService.calculateScore(anyList())).thenReturn(score);

        RiskScoreData riskScoreData = new RiskScoreData();
        riskScoreData.setSerious(1);
        riskScoreData.setSeriousnessDeath(1);
        riskScoreData.setDrugCharacterization(1);

        List<RiskScoreData> riskScoreDataList = new ArrayList<>();
        riskScoreDataList.add(riskScoreData);

        mockMvc.perform(post("/riskScore")
                .content(new ObjectMapper().writeValueAsString(riskScoreDataList))
                .contentType(APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().string(Integer.toString(score)));
    }

}
