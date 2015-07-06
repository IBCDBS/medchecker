package com.ibcdbs.medchecker.service;

import com.ibcdbs.medchecker.model.RiskScoreData;

import java.util.List;

public interface RiskScoreService {
    /**
     * Calculates the risk score using the given data.
     *
     * @param riskScoreDataList the risk score data
     * @return the risk score
     */
    int calculateScore(List<RiskScoreData> riskScoreDataList);

}
