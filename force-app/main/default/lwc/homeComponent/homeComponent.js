import { LightningElement, api } from 'lwc';
import PATIENT from '@salesforce/resourceUrl/HealthPatient';
import PROVIDER from '@salesforce/resourceUrl/HealthProvider';
import SCHEDULE from '@salesforce/resourceUrl/HealthSchedule';
import DOCTOR from '@salesforce/resourceUrl/HealthDoctor';

export default class HealthComponents extends LightningElement {

    @api isHomePage;
    healthPatient = PATIENT;
    healthProvider = PROVIDER;
    healthSchedule = SCHEDULE;
    healthDoctor = DOCTOR;

    providerButton = true;
    scheduleButton = true;

    patientData = [];
    providerData = [];
    
    showPatientRecord = false;
    showPatientHome = true;
    showPatientComponent = false;

    showProviderHome = true;
    showProviderRecord = false;
    showProviderComponent = false;

    showScheduleHome = true;
    showScheduleRecord = false;
    showScheduleComponent = false;

    constructor() {
        super();   
        this.isHomePage = true;
        //this.template.addEventListener('choosed', this.handleChoosed.bind(this));
    }

    handleClickPatient(){
        this.isHomePage = false;
        this.showPatientComponent = true;
    }
    handleChoosed(event){
        console.log(JSON.parse(JSON.stringify(event.detail)));
        this.patientData = event.detail;
        console.log('This is running!');
        this.isHomePage = true;
        this.providerButton = false;
        this.showPatientHome = false;
        this.showPatientComponent = false;
        this.showPatientRecord = true;

        console.log(this.showPatientHome+" "+this.showPatientRecord);
    }

    handleProviderChoosed(event){
        console.log(JSON.parse(JSON.stringify(event.detail)));
        this.providerData = event.detail;
        console.log('This is running for provider!');
        this.isHomePage = true;
        this.scheduleButton = false;
        this.showProviderHome = false;
        this.showProviderComponent = false;
        this.showProviderRecord = true;

        console.log(this.showProviderHome+" "+this.showProviderComponent+" "+this.showProviderRecord);   
    }

    handlePatientChange(){
        this.isHomePage = false;
        this.showPatientComponent = true;
    }

    handleProviderChange(){
        this.isHomePage = false;
        this.showProviderComponent = true;
    }

    handleClickProvider(){
        this.isHomePage = false;
        this.showPatientComponent = false;
        this.showProviderComponent = true;
    }

    handleClickSchedule(){
        this.isHomePage = false;
        this.showPatientComponent = false;
        this.showProviderComponent = false;
        this.showScheduleComponent = true;
    }

    handleBackFromPatient(){
        this.isHomePage = true;
        if(this.showPatientRecord){
            this.showPatientHome = false;
            this.showPatientComponent = false;
            this.showPatientRecord = true;
        }
        else{
            this.showPatientHome = true;
            this.showPatientComponent = false;
        }
    }

    handleBackFromProvider(){
        this.isHomePage = true;
        if(this.showProviderRecord){
            if(this.showPatientRecord){
                this.showPatientHome = false;
                this.showPatientComponent = false;
                this.showPatientRecord = true;
            }
            else{
                this.showPatientHome = true;
                this.showPatientComponent = false;
            }

            this.showProviderHome = false;
            this.showProviderComponent = false;
            this.showProviderRecord = true;
        }
        else{
            if(this.showPatientRecord){
                this.showPatientHome = false;
                this.showPatientComponent = false;
                this.showPatientRecord = true;
            }
            else{
                this.showPatientHome = true;
                this.showPatientComponent = false;
            }

            this.showProviderHome = true;
            this.showProviderComponent = false;
        }
    }

    handleBackFromSchedule(){
        
    }
    
}