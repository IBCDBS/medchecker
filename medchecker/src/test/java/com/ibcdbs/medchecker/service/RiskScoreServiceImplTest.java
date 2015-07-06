package com.ibcdbs.medchecker.service;

import com.ibcdbs.medchecker.model.RiskScoreData;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;
import org.junit.Test;
import org.junit.runner.RunWith;

import java.util.Arrays;
import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(JUnitParamsRunner.class)
public class RiskScoreServiceImplTest {

    RiskScoreService riskScoreService = new RiskScoreServiceImpl();

    private Object[] testParams() {
        return new Object[]{
                new Object[]{Arrays.asList(new RiskScoreData(0, 0, 2), new RiskScoreData(0, 0, 3)), 0},
                new Object[]{Arrays.asList(new RiskScoreData(0, 0, 2), new RiskScoreData(1, 1, 1)), 10},
                new Object[]{Arrays.asList(new RiskScoreData(1, 1, 1), new RiskScoreData(1, 1, 1)), 10},
                new Object[]{Arrays.asList(new RiskScoreData(1, 1, 1), new RiskScoreData(0, 0, 1)), 10}
        };
    }

    @Test
    @Parameters(method = "testParams")
    public void testCalculateScore(List<RiskScoreData> riskScoreDataList, int expectedScore) {
        int score = riskScoreService.calculateScore(riskScoreDataList);

        assertEquals(expectedScore, score);
    }

}