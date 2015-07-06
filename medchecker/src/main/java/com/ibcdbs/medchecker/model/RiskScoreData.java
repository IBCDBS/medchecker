package com.ibcdbs.medchecker.model;

public class RiskScoreData {
    private int serious;
    private int seriousnessDeath;
    private int drugCharacterization;

    public RiskScoreData() {
    }

    public RiskScoreData(int serious, int seriousnessDeath, int drugCharacterization) {
        this.serious = serious;
        this.seriousnessDeath = seriousnessDeath;
        this.drugCharacterization = drugCharacterization;
    }

    public int getSerious() {
        return serious;
    }

    public void setSerious(int serious) {
        this.serious = serious;
    }

    public int getSeriousnessDeath() {
        return seriousnessDeath;
    }

    public void setSeriousnessDeath(int seriousnessDeath) {
        this.seriousnessDeath = seriousnessDeath;
    }

    public int getDrugCharacterization() {
        return drugCharacterization;
    }

    public void setDrugCharacterization(int drugCharacterization) {
        this.drugCharacterization = drugCharacterization;
    }
}
