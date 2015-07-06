package com.ibcdbs.medchecker.service;

import com.ibcdbs.medchecker.model.RiskScoreData;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RiskScoreServiceImpl implements RiskScoreService {

    @Override
    public int calculateScore(List<RiskScoreData> riskScoreDataList) {
        int countSerious = 0;
        int countSeriousnessDeath = 0;

        for (RiskScoreData riskScoreData : riskScoreDataList) {
            if (riskScoreData.getDrugCharacterization() == 1) {
                if (riskScoreData.getSerious() == 1) {
                    countSerious++;
                }
                if (riskScoreData.getSeriousnessDeath() == 1) {
                    countSeriousnessDeath++;
                }
            }
        }

        int score = (countSerious + countSeriousnessDeath) * 100 / riskScoreDataList.size();

        return Math.min(10, score);
    }
}
